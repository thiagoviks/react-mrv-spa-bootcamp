import { render, screen } from '@testing-library/react';
import About from './about';

test('renders received blog', () => {
  render(<About />);
  const about = screen.getByText(/Company Info/i);
  expect(about).toBeInTheDocument();
});
