// Generates rich procedural macro imagery for the story chapters
function generateAbstractMacroCanvas(type) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 1500;
  const ctx = canvas.getContext('2d');

  if (type === 'emergence') {
    // Macro flower petal with golden amber nectar droplets
    const bg = ctx.createLinearGradient(0, 0, 1200, 1500);
    bg.addColorStop(0, '#0a0d14');
    bg.addColorStop(0.5, '#1e1405');
    bg.addColorStop(1, '#05070a');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 1500);

    // Glowing nectar core
    const rad = ctx.createRadialGradient(600, 750, 50, 600, 750, 600);
    rad.addColorStop(0, 'rgba(245, 195, 68, 0.85)');
    rad.addColorStop(0.3, 'rgba(230, 149, 25, 0.45)');
    rad.addColorStop(0.7, 'rgba(168, 85, 247, 0.15)');
    rad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, 1200, 1500);

    // Radiating petal curves
    ctx.strokeStyle = 'rgba(245, 195, 68, 0.25)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      ctx.beginPath();
      ctx.moveTo(600, 750);
      ctx.quadraticCurveTo(
        600 + Math.cos(angle + 0.3) * 400,
        750 + Math.sin(angle + 0.3) * 400,
        600 + Math.cos(angle) * 750,
        750 + Math.sin(angle) * 750
      );
      ctx.stroke();
    }
  } else if (type === 'cosmos') {
    // Hexagonal celestial matrix
    const bg = ctx.createLinearGradient(0, 0, 1200, 1500);
    bg.addColorStop(0, '#04060c');
    bg.addColorStop(0.5, '#0b162c');
    bg.addColorStop(1, '#020306');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 1500);

    // Hexagons
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 2.5;
    const r = 90;
    const h = r * Math.sqrt(3);

    for (let row = -1; row < 12; row++) {
      for (let col = -1; col < 10; col++) {
        const x = col * (r * 1.5) + 80;
        const y = row * h + (col % 2 === 0 ? 0 : h / 2) + 60;

        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const rad = (Math.PI / 3) * a;
          const px = x + r * Math.cos(rad);
          const py = y + r * Math.sin(rad);
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        if ((row + col) % 3 === 0) {
          ctx.fillStyle = 'rgba(245, 195, 68, 0.12)';
          ctx.fill();
        }
      }
    }
  } else if (type === 'nectar') {
    // Solar Amber Forge
    const bg = ctx.createLinearGradient(0, 0, 1200, 1500);
    bg.addColorStop(0, '#1a0b00');
    bg.addColorStop(0.4, '#3d1c00');
    bg.addColorStop(0.8, '#140600');
    bg.addColorStop(1, '#050200');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 1500);

    // Glowing molten rivers
    ctx.strokeStyle = 'rgba(255, 190, 40, 0.6)';
    ctx.lineWidth = 5;
    ctx.shadowColor = '#ffaa00';
    ctx.shadowBlur = 25;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(100 + i * 140, 0);
      ctx.bezierCurveTo(300 + i * 80, 500, 50 + i * 100, 1000, 200 + i * 120, 1500);
      ctx.stroke();
    }
  } else {
    // Celestial Hive
    const bg = ctx.createLinearGradient(0, 0, 1200, 1500);
    bg.addColorStop(0, '#080812');
    bg.addColorStop(0.5, '#19152b');
    bg.addColorStop(1, '#050408');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 1500);

    const rad = ctx.createRadialGradient(600, 750, 80, 600, 750, 500);
    rad.addColorStop(0, 'rgba(217, 70, 239, 0.6)');
    rad.addColorStop(0.5, 'rgba(245, 195, 68, 0.3)');
    rad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, 1200, 1500);
  }

  return canvas.toDataURL('image/jpeg', 0.88);
}

export const cardImages = {
  emergence: generateAbstractMacroCanvas('emergence'),
  cosmos: generateAbstractMacroCanvas('cosmos'),
  nectar: generateAbstractMacroCanvas('nectar'),
  hive: generateAbstractMacroCanvas('hive')
};
