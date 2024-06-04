import React from 'react';
import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/react';
import Counter from './Counter.jsx';

describe('Counter', () => {
  it('should render a counter', () => {
    render(<Counter />);
    // expect(screen.getByText('Counter')).toBeInTheDocument();
  });
});

