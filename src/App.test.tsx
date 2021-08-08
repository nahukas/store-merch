import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './components/Filter/Filter';

test('renders learn react link', () => {
  const mockUpdateFilters = (mockSelectedBoxes: unknown[]) => {
    return false;
  };

  render(<Filter updateFilters={mockUpdateFilters} />);
  const filter = screen.getByText(/sizes/i);
  expect(filter).toBeInTheDocument();
});
