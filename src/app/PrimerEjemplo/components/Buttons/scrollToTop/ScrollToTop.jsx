import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className={styles.scrollToTopButton}
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

