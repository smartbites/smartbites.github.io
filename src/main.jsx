import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import ScrollRestoration from './components/routing/ScrollRestoration';
import './index.css';

function useEntryAnimations() {
  const location = useLocation();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.sb-animate-enter:not(.is-visible)'));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}

function AppWithEntryAnimations() {
  useEntryAnimations();

  return (
    <App />
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <AppWithEntryAnimations />
    </BrowserRouter>
  </React.StrictMode>
);
