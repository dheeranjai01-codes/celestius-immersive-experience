import React, { useEffect, useRef, useState } from 'react';

export default function HeartCursor() {
  const canvasRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    
    if (isTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates and smoothing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, speed: 0 };
    let lastX = width / 2;
    let lastY = height / 2;

    // Trail particles
    const trail = [];
    const MAX_TRAIL = 28;
    const sparks = [];

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      // Add sparks when moving fast
      const dx = mouse.targetX - lastX;
      const dy = mouse.targetY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 8 && sparks.length < 40) {
        sparks.push({
          x: mouse.targetX + (Math.random() - 0.5) * 8,
          y: mouse.targetY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1.5,
          alpha: 1,
          decay: Math.random() * 0.04 + 0.02,
          color: Math.random() > 0.4 ? '#f5c344' : '#ff4d6d'
        });
      }
      lastX = mouse.targetX;
      lastY = mouse.targetY;
    };

    const onMouseDown = () => {
      setIsMouseDown(true);
      // Spawn burst of heart sparks on click
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const speed = Math.random() * 4 + 2;
        sparks.push({
          x: mouse.targetX,
          y: mouse.targetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4 + 2,
          alpha: 1,
          decay: 0.035,
          color: i % 2 === 0 ? '#ff4d6d' : '#f5c344'
        });
      }
    };

    const onMouseUp = () => setIsMouseDown(false);

    // Detect hover on interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Draw recognizable heart path centered at (cx, cy) with given scale
    const drawHeart = (cx, cy, scale, fillColor, strokeColor, glowColor, glowBlur = 15) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      ctx.beginPath();
      // Standard parametric / cubic bezier heart shape
      // Top center notch is at (0, -6)
      ctx.moveTo(0, -4);
      ctx.bezierCurveTo(-8, -16, -20, -6, -20, 6);
      ctx.bezierCurveTo(-20, 16, -10, 24, 0, 32);
      ctx.bezierCurveTo(10, 24, 20, 16, 20, 6);
      ctx.bezierCurveTo(20, -6, 8, -16, 0, -4);
      ctx.closePath();

      if (glowColor) {
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = glowBlur;
      }

      if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
      }

      if (strokeColor) {
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
      }

      ctx.restore();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp
      const lerp = 0.22;
      mouse.x += (mouse.targetX - mouse.x) * lerp;
      mouse.y += (mouse.targetY - mouse.y) * lerp;

      // Add point to trail
      trail.unshift({ x: mouse.x, y: mouse.y });
      if (trail.length > MAX_TRAIL) {
        trail.pop();
      }

      // Draw Glowing Ribbon Trail
      if (trail.length > 2) {
        ctx.save();
        for (let i = 0; i < trail.length - 1; i++) {
          const p1 = trail[i];
          const p2 = trail[i + 1];
          const progress = 1 - i / trail.length; // 1 at tip, 0 at tail
          const alpha = progress * 0.55;
          const lineWidth = progress * (isHoveringInteractive ? 8 : 5);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 90, 130, ${alpha})`;
          ctx.lineWidth = lineWidth;
          ctx.lineCap = 'round';
          ctx.shadowColor = 'rgba(255, 77, 109, 0.8)';
          ctx.shadowBlur = 12 * progress;
          ctx.stroke();

          // Inner gold core
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(245, 195, 68, ${alpha * 0.9})`;
          ctx.lineWidth = lineWidth * 0.45;
          ctx.stroke();
        }
        ctx.restore();
      }

      // Draw floating sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.alpha, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // Dynamic heart scale
      let heartScale = isHoveringInteractive ? 0.65 : 0.45;
      if (isMouseDown) heartScale *= 0.8;

      // Draw Tip Glow Aura
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 2, mouse.x, mouse.y, 35);
      gradient.addColorStop(0, 'rgba(255, 77, 109, 0.45)');
      gradient.addColorStop(0.5, 'rgba(245, 195, 68, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 77, 109, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
      ctx.fill();

      // Draw Main Recognizable Heart Shape
      drawHeart(
        mouse.x,
        mouse.y - 6,
        heartScale,
        isHoveringInteractive ? 'rgba(255, 77, 109, 0.9)' : 'rgba(255, 50, 95, 0.75)',
        '#ffffff',
        '#ff4d6d',
        isHoveringInteractive ? 24 : 16
      );

      // Subtle gold inner heart accent
      drawHeart(
        mouse.x,
        mouse.y - 6,
        heartScale * 0.5,
        'rgba(245, 195, 68, 0.85)',
        null,
        '#f5c344',
        8
      );

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHoveringInteractive, isMouseDown]);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ pointerEvents: 'none' }}
    />
  );
}
