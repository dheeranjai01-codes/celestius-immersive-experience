import React, { useRef, useState } from 'react';
import gsap from 'gsap';

export default function DistortionImageCard({
  imageSrc,
  title,
  subtitle,
  chapter,
  aspect = 'aspect-[4/5]',
  className = '',
  tags = []
}) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !imageRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = ((y / rect.height) - 0.5) * -16;
    const rotY = ((x / rect.width) - 0.5) * 16;

    gsap.to(cardRef.current, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000
    });

    gsap.to(imageRef.current, {
      x: ((x / rect.width) - 0.5) * 20,
      y: ((y / rect.height) - 0.5) * 20,
      scale: 1.08,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current || !imageRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)'
    });

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1.0,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_20px_50px_rgba(245,195,68,0.15)] will-change-transform ${aspect} ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Graphic / Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-filter duration-700 group-hover:brightness-110 group-hover:contrast-105"
        />
        {/* Subtle glass reflection gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-cyan-500/10 opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Top Tag & Chapter info */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-black/60 border border-white/10 text-amber-400 backdrop-blur-md">
          {chapter}
        </span>
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Content */}
      <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-sm font-body text-slate-300 mt-2 line-clamp-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Luminous interactive rim border highlight */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none group-hover:border-amber-400/40 transition-colors duration-500" />
    </div>
  );
}
