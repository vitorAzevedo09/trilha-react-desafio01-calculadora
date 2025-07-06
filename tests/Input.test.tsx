import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../src/app/components/Input';

describe('Input Component', () => {
  it('renders input element correctly', () => {
    render(<Input value="123" onChange={() => { }} placeholder="Enter number" />);
    const inputElement = screen.getByPlaceholderText(/Enter number/i);
    expect(inputElement).toBeDefined();
    expect(inputElement).toHaveProperty('value', '123');
  });

});

