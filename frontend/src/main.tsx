import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop.tsx';
import { AppContextProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ScrollToTop />
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);
