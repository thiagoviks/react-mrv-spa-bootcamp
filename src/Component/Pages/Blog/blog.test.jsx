import { render, screen } from '@testing-library/react';
import Blog from './blog';

test('renders received blog', () => {
  render(<Blog />);
  const blog = screen.getByText(/Read Events/i);
  expect(blog).toBeInTheDocument();
});
