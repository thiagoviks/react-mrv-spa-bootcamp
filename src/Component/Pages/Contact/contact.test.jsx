import { render, screen } from '@testing-library/react';
import Contact from './contact';

test('renders learn react link', () => {
  render(<Contact />);
  const contact = screen.getByText(/Get in Touch/i);
  expect(contact).toBeInTheDocument();
});
