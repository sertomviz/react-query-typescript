import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './components/Dashboard';
import { Layout } from './components/layout';
import { getAppTheme } from './utils/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const theme = useMemo(() => getAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Dashboard />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
