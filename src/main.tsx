import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from './providers/QueryClientProvider.tsx';
import { RouterProvider } from './providers/RouterProvider.tsx';
import { ThemeProvider } from './providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
