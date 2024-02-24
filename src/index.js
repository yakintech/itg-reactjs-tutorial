import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FavoritesProvider } from './context/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));


export const queryClient = new QueryClient();

root.render(
  <FavoritesProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </QueryClientProvider>
  </FavoritesProvider>




);

