import React, { useState, useEffect } from 'react';

const TextTyping = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Web Developer',
    'Java Developer',
    'Programmer',
    'Open Source Contributor',
    'Blogger',
    'Youtuber',
  ];

  useEffect(() => {
    const typeText = async () => {
      const currentText = texts[currentIndex];
      let i = 0;

      while (i <= currentText.length) {
        if (isDeleting) {
          await new Promise(resolve => setTimeout(resolve, 50));
          setCurrentText(currentText.substring(0, i));
          i--;
        } else {
          await new Promise(resolve => setTimeout(resolve, 100));
          setCurrentText(currentText.substring(0, i + 1));
          i++;
        }
      }

      setIsDeleting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsDeleting(false);
      setCurrentIndex(prev => (prev + 1) % texts.length);
    };

    typeText();
  }, [currentIndex, isDeleting]);

  return (
    <span className="text-[#00fff7] text-2xl font-bold neon-glow">
      {currentText}
      <span className="inline-block w-1 h-4 bg-[#00fff7] animate-blink ml-1"></span>
    </span>
  );
};

export default TextTyping;
