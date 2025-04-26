import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import i18n from './shared/locales/i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
