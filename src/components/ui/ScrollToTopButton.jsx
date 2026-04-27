import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 280;
      setIsVisible(shouldShow);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-to-top-button"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg
        className="scroll-to-top-button__icon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path d="M8 14L12 9L16 14" />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;