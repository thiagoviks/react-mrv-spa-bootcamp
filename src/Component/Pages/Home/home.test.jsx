import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders learn react link', () => {
  render(<Home />);
  const home = screen.getByText(
    /Providing all Kinds of Construction Services/i
  );
  expect(home).toBeInTheDocument();
});
