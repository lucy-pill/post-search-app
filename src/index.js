// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Packages
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Components
import App from './App';

// Shared
import theme from './shared/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
