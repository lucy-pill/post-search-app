// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

// Components
import App from './App';

// Shared
import theme from './shared/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </Router>
);
