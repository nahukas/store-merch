import { render, screen } from '@testing-library/react';
import ShelfHeader from '../ShelfHeader';

test('renders shelf header', () => {
  render(<ShelfHeader productsLength={23} />);
  const headerText = screen.getByText(/23 product\(s\) found/i);
  expect(headerText).toBeInTheDocument();
});
