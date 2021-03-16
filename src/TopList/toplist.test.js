import { render, screen } from '@testing-library/react';
import TopList from './TopList';

test('renders learn react link', () => {
  render(<TopList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
