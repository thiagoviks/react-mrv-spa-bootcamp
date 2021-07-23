import { render, screen } from '@testing-library/react';
import Services from './services';

test('renders received blog', () => {
  render(<Services />);
  const services = screen.getByText(/What We Do?/i);
  expect(services).toBeInTheDocument();
});
