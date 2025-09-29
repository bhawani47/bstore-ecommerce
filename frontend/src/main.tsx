import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './app/context/ThemeContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
