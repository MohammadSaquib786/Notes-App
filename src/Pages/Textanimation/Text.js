import React, { useEffect, useState } from 'react';
function Typewrite({ text, delay = 500, infinite = false }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
}

export default Typewrite;
