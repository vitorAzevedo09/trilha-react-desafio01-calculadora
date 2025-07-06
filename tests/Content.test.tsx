import { render, screen, fireEvent } from '@testing-library/react';
import Content from '../src/app/components/Content';
import React from 'react';

describe('Content Component', () => {
  test('renders input and button grid', () => {
    render(<Content />);

    // Check if the input and buttons are rendered
    const inputElement = screen.getByPlaceholderText('0');
    expect(inputElement).toBeDefined();

    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements).toHaveLength(16); // assuming 16 buttons in the grid
  });

  test('handles input value properly', () => {
    render(<Content />);

    const buttonElement = screen.getByText('1');
    const inputElement = screen.getByPlaceholderText('0');

    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('1');

    fireEvent.click(screen.getByText('2'));
    expect(inputElement.value).toBe('12');
  });

  test('clears input on clear button click', () => {
    render(<Content />);

    const buttonElement = screen.getByText('1');
    const inputElement = screen.getByPlaceholderText('0');
    const clearButtonElement = screen.getByText('C');

    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('1');

    fireEvent.click(clearButtonElement);
    expect(inputElement.value).toBe('');
  });

  test('calculates the result on equals button click', () => {
    render(<Content />);

    const inputElement = screen.getByPlaceholderText('0');
    const buttonElement1 = screen.getByText('1');
    const buttonElementPlus = screen.getByText('+');
    const buttonElement2 = screen.getByText('2');
    const equalsButtonElement = screen.getByText('=');

    fireEvent.click(buttonElement1);
    fireEvent.click(buttonElementPlus);
    fireEvent.click(buttonElement2);
    fireEvent.click(equalsButtonElement);

    expect(inputElement.value).toBe('3');
  });
});

