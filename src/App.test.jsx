import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple SPA/i);
  expect(linkElement).toBeInTheDocument();
});

/* const Home = screen.getByText(/Home/i);
expect(Home).toBeInTheDocument();

const Projects = screen.getByText(/Projects/i);
expect(Projects).toBeInTheDocument();

  const Services = screen.getByText(/Services/i);
expect(Services).toBeInTheDocument();

const Blog = screen.getByText(/Blog/i);
expect(Blog).toBeInTheDocument();

const About = screen.getByText(/About/i);
expect(About).toBeInTheDocument();

const Contact = screen.getByText(/Contact/i);
expect(Contact).toBeInTheDocument(); */
