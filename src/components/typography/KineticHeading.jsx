import React, { useRef } from 'react';
import gsap from 'gsap';

export default function KineticHeading({
  text,
  className = '',
  tag: Tag = 'h2',
  glowColor = 'rgba(245, 195, 68, 0.4)',
  accentIndices = []
}) {
  const containerRef = useRef(null);

  const letters = Array.from(text);

  const handleMouseEnterLetter = (e, index) => {
    const el = e.currentTarget;
    const isAdjacent = (offset) => {
      const neighbor = containerRef.current?.querySelector(`[data-char-idx="${index + offset}"]`);
      if (neighbor) {
        gsap.to(neighbor, {
          y: -8,
          scale: 1.08,
          rotate: offset * 2,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    // Primary letter launch
    gsap.to(el, {
      y: -18,
      scale: 1.18,
      rotate: (Math.random() - 0.5) * 8,
      color: '#ffffff',
      textShadow: `0 0 25px ${glowColor}, 0 0 45px rgba(255, 77, 109, 0.6)`,
      duration: 0.3,
      ease: 'back.out(2.5)',
      overwrite: 'auto'
    });

    isAdjacent(-1);
    isAdjacent(1);
  };

  const handleMouseLeaveLetter = (e, index) => {
    const el = e.currentTarget;
    const resetNeighbor = (offset) => {
      const neighbor = containerRef.current?.querySelector(`[data-char-idx="${index + offset}"]`);
      if (neighbor) {
        gsap.to(neighbor, {
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
          overwrite: 'auto'
        });
      }
    };

    gsap.to(el, {
      y: 0,
      scale: 1,
      rotate: 0,
      color: '',
      textShadow: 'none',
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto'
    });

    resetNeighbor(-1);
    resetNeighbor(1);
  };

  return (
    <Tag
      ref={containerRef}
      className={`inline-flex flex-wrap items-center select-none cursor-default font-display tracking-tight ${className}`}
      aria-label={text}
    >
      {letters.map((char, idx) => {
        if (char === ' ') {
          return (
            <span key={idx} className="w-[0.35em] inline-block">
              &nbsp;
            </span>
          );
        }

        const isAccent = accentIndices.includes(idx);

        return (
          <span
            key={idx}
            data-char-idx={idx}
            onMouseEnter={(e) => handleMouseEnterLetter(e, idx)}
            onMouseLeave={(e) => handleMouseLeaveLetter(e, idx)}
            className={`inline-block transition-colors duration-200 will-change-transform ${
              isAccent ? 'text-amber-400 font-extrabold' : ''
            }`}
            style={{ display: 'inline-block' }}
          >
            {char}
          </span>
        );
      })}
    </Tag>
  );
}
