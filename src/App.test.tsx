import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main view with app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Guardian Articles/i);
  expect(linkElement).toBeInTheDocument();
});
