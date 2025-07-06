import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGrid from '../src/app/components/ButtonGrid/ButtonGrid';

describe('ButtonGrid Component', () => {
  it('renders ButtonGrid component correctly', () => {
    render(<ButtonGrid onInput={() => { }} onClear={() => { }} onEquals={() => { }} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBeGreaterThan(0);
  });
});

