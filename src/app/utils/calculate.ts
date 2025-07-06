// Utility functions related to mathematical calculations

/**
 * Precedence map for operators.
 * Higher number indicates higher precedence.
 */
const precedence: Record<string, number> = { '+': 1, '-': 1, '*': 2, '/': 2 };

/**
 * Determines if a character is an operator.
 * @param char - Single character string.
 * @returns True if char is an operator.
 */
const isOperator = (char: string): boolean => ['+', '-', '*', '/'].includes(char);

/**
 * Converts an infix expression to a postfix expression using a stack.
 * @param expression - Infix expression as a string.
 * @returns Postfix expression as an array of strings.
 */
const toPostfix = (expression: string): string[] => {
    const output: string[] = []; // Stores the postfix expression
    const stack: string[] = []; // Operator stack

    // Tokenize the input expression into numbers and operators
    let i = 0;
    let currentNumber = '';

    while (i < expression.length) {
        const char = expression[i];

        // Handle parentheses
        if (char === '(' || char === ')') {
            if (currentNumber) {
                output.push(currentNumber);
                currentNumber = '';
            }

            if (char === '(') {
                stack.push(char);
            } else { // closing parenthesis
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop()!);
                }
                // Remove the opening parenthesis
                if (stack.length) stack.pop();
            }
            i++;
            continue;
        }

        // Handle operators
        if (isOperator(char)) {
            // Special case for negative numbers (when - is the first char or follows another operator or opening parenthesis)
            if (char === '-' && (i === 0 || isOperator(expression[i - 1]) || expression[i - 1] === '(')) {
                currentNumber = char;
                i++;
                continue;
            }

            if (currentNumber) {
                output.push(currentNumber);
                currentNumber = '';
            }

            while (
                stack.length &&
                stack[stack.length - 1] !== '(' &&
                precedence[stack[stack.length - 1]] >= precedence[char]
            ) {
                output.push(stack.pop()!);
            }

            stack.push(char);
            i++;
            continue;
        }

        // Build numbers (including decimals)
        if (/[\d.]/.test(char)) {
            currentNumber += char;
            i++;
            continue;
        }

        // Skip whitespace
        i++;
    }

    // Add the last number if exists
    if (currentNumber) {
        output.push(currentNumber);
    }

    // Add remaining operators to output
    return [...output, ...stack.reverse()];
};

/**
 * Evaluates a postfix expression using a stack.
 * @param postfix - Postfix expression as an array of strings.
 * @returns Evaluation result as a string.
 */
const evaluatePostfix = (postfix: string[]): string => {
    const stack: number[] = []; // Stack for evaluation

    for (const token of postfix) {
        if (!isNaN(Number(token))) {
            // Token is a number
            stack.push(Number(token));
        } else {
            // Token is an operator
            const b = stack.pop()!; // Second operand
            const a = stack.pop()!; // First operand

            // Perform operation based on operator type
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }

    // Final result is the only value in the stack
    return stack[0].toString();
};

/**
 * Calculates the result of a mathematical expression.
 * @param expression - The infix expression as a string.
 * @returns The result of the calculation as a string.
 */
export const calculate = (expression: string): string => {
    const postfix = toPostfix(expression);
    return evaluatePostfix(postfix);
};

