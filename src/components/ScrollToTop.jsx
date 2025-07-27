import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-[#00fff7] text-[#232526] shadow-lg hover:shadow-[0_0_32px_#00fff7] transition-all duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        filter: 'drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7)',
        transform: 'rotate(-45deg)',
      }}
    >
      <i className="fa-solid fa-angles-up text-xl"></i>
    </button>
  );
};

export default ScrollToTop;
