import { useState, useEffect } from 'react';

const useTextAnimation = (texts, interval = 200, letterInterval = 200) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const currentText = texts[textIndex];

  const handleChangeText = () => {
    if (displayedText.length < currentText.length) {
      setDisplayedText(currentText.slice(0, displayedText.length + 1));
    } else {
      setTimeout(() => {
        setTextIndex((textIndex + 1) % texts.length);
        setDisplayedText('');
      }, interval);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleChangeText, letterInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [displayedText, letterInterval]);

  return displayedText;
};

export default useTextAnimation;
