"use client";

import { useState, useEffect } from "react";

const lines = [
  "they call me grass",
  "embedded systems & flight tech",
  "building from scratch"
];

export function TypingEffect() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentLine = lines[lineIndex];
      if (isDeleting) {
        setText(currentLine.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentLine.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentLine) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, lineIndex, isDeleting, speed]);

  return (
    <span className="text-primary font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl min-h-[1.5em] inline-block">
      {text}<span className="animate-pulse">_</span>
    </span>
  );
}
