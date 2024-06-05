import React from 'react';
import { describe, it, expect } from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter.jsx';

describe('Counter', () => {
  it('should render a counter', () => {
    render(<Counter />);
    const currentCount = screen.getByTestId('currentCount');
    expect(currentCount).toHaveTextContent('0');
  });

  it('should increment the counter', () => {
    render(<Counter />);
    const currentCount = screen.getByTestId('currentCount');
    const incrementButton = screen.getByTestId('Increment');

    fireEvent.click(incrementButton);
    expect(currentCount).toHaveTextContent('1');

    fireEvent.click(incrementButton);
    expect(currentCount).toHaveTextContent('2');

  });
});

