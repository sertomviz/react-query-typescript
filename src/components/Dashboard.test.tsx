import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import App from '../App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

test('renders progress bars on dashboard', () => {
  const container = render(
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>,
  );
  const progressbar = container.getAllByRole('progressbar');
  expect(progressbar).toHaveLength(2);
});
