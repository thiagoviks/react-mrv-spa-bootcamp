import { render, screen } from '@testing-library/react';
import Projects from './projects';

test('renders received blog', () => {
  render(<Projects />);
  const projects = screen.getByText(/Secret of Our Success/i);
  expect(projects).toBeInTheDocument();
});
