import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pickaxe2.0 link', () => {
  render(<App />);
  const element = screen.getByText(/Pickaxe2.0/i);
  expect(element).toBeInTheDocument();
});
