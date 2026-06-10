import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome screen in Arabic', () => {
  render(<App />);
  const titleElement = screen.getByText(/مرحباً/);
  expect(titleElement).toBeInTheDocument();
});
