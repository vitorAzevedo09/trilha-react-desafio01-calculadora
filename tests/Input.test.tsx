import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../src/app/components/Input';

describe('Input Component', () => {
  it('renders input element correctly', () => {
    render(<Input value="123" onChange={() => { }} placeholder="Enter number" />);
    const inputElement = screen.getByPlaceholderText(/Enter number/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('123');
  });

  it('triggers onChange when value is updated', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} placeholder="Enter number" />);
    const inputElement = screen.getByPlaceholderText(/Enter number/i);

    userEvent.type(inputElement, '456');
    expect(handleChange).toBeCalledTimes(3); // '456' involves three separate calls
  });
});

