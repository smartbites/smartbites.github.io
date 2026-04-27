import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - 74;

      window.scrollTo({
        top,
        left: 0,
        behavior: 'auto',
      });

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}
