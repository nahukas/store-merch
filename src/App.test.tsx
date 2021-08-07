import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const filter = screen.getByText(/filter/i);
  expect(filter).toBeInTheDocument();
});
