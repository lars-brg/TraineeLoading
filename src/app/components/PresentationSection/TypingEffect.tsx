"use client";
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => texts[loopNum].substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === texts[loopNum]) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <span>
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
