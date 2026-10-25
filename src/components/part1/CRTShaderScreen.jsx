// Procedural Canvas-based CRT Screen Texture Generator
export function createCRTTexture(width = 1024, height = 1024) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  let time = 0;
  let cracks = []; // Store crack points & paths

  function addCrack(clickU, clickV, stage) {
    const cx = clickU * width;
    const cy = clickV * height;

    const branches = [];
    const numBranches = stage === 1 ? 5 : stage === 2 ? 10 : 20;

    for (let i = 0; i < numBranches; i++) {
      const angle = (Math.PI * 2 * i) / numBranches + (Math.random() - 0.5) * 0.4;
      const length = (stage === 1 ? 90 : stage === 2 ? 220 : 450) * (0.7 + Math.random() * 0.6);
      const points = [{ x: cx, y: cy }];
      let curX = cx;
      let curY = cy;

      const segments = 4 + Math.floor(Math.random() * 4);
      const stepLen = length / segments;

      for (let s = 1; s <= segments; s++) {
        const segAngle = angle + (Math.random() - 0.5) * 0.7;
        curX += Math.cos(segAngle) * stepLen;
        curY += Math.sin(segAngle) * stepLen;
        points.push({ x: curX, y: curY });
      }
      branches.push(points);
    }

    cracks.push({ cx, cy, stage, branches });
  }

  function update(glitchIntensity = 0) {
    time += 0.03;

    // Dark background with CRT phosphor tint
    ctx.fillStyle = '#050c14';
    ctx.fillRect(0, 0, width, height);

    // Radial screen glow
    const radial = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.65);
    radial.addColorStop(0, 'rgba(20, 60, 90, 0.45)');
    radial.addColorStop(0.7, 'rgba(10, 30, 45, 0.2)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, width, height);

    // Subtle Grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Terminal OS header
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 26px "JetBrains Mono", monospace';
    ctx.fillText('CELESTIUS CORE OS — BUILD 2026.09', 60, 90);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillText('> MEMORY: 64TB QUANTUM CELLULAR', 60, 130);
    ctx.fillText('> STATUS: VESSEL TRAPPED IN DIGITAL CHAMBER', 60, 160);
    ctx.fillText(`> SYSTEM TIME: ${new Date().toLocaleTimeString()} :: PROTOCOL ACTIVE`, 60, 190);

    // Glitch shift if impacted
    const glitchOffset = glitchIntensity * (Math.random() - 0.5) * 40;

    // Draw Trapped Entity / Celestial Mascot inside screen
    const centerX = width / 2 + glitchOffset;
    const centerY = height / 2 + Math.sin(time * 2) * 15;

    // Outer orbiting rings
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(time * 0.8);
    ctx.strokeStyle = 'rgba(245, 195, 68, 0.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 140, 0, Math.PI * 2);
    ctx.stroke();

    // Secondary ring
    ctx.rotate(-time * 1.5);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.lineWidth = 2;
    ctx.setLineDash([15, 10]);
    ctx.beginPath();
    ctx.arc(0, 0, 175, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Glowing core sphere
    const coreGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 90);
    coreGrad.addColorStop(0, '#ffffff');
    coreGrad.addColorStop(0.3, '#f5c344');
    coreGrad.addColorStop(0.7, '#e69519');
    coreGrad.addColorStop(1, 'rgba(230, 149, 25, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
    ctx.fill();

    // Digital Eyes (cute expressive trapped spirit / Fun-kun homage)
    const eyeOffset = Math.sin(time * 3) * 4;
    ctx.fillStyle = '#050c14';
    // Left eye
    ctx.beginPath();
    ctx.ellipse(centerX - 28, centerY - 10 + eyeOffset, 10, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    // Right eye
    ctx.beginPath();
    ctx.ellipse(centerX + 28, centerY - 10 + eyeOffset, 10, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye glints
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX - 25, centerY - 16 + eyeOffset, 4, 0, Math.PI * 2);
    ctx.arc(centerX + 31, centerY - 16 + eyeOffset, 4, 0, Math.PI * 2);
    ctx.fill();

    // Smile / expression
    ctx.strokeStyle = '#050c14';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY + 18 + eyeOffset, 16, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Knock callout prompt
    ctx.fillStyle = '#f5c344';
    ctx.font = 'bold 32px "Syne", sans-serif';
    ctx.textAlign = 'center';
    const knockPulse = 1 + Math.sin(time * 5) * 0.05;
    ctx.save();
    ctx.translate(width / 2, height - 140);
    ctx.scale(knockPulse, knockPulse);
    ctx.fillText('KNOCK TO BREAK FREE', 0, 0);
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillText('[ 3 IMPACTS REQUIRED TO BREACH ]', width / 2, height - 90);
    ctx.textAlign = 'left';

    // Scanlines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    for (let y = 0; y < height; y += 4) {
      ctx.fillRect(0, y, width, 2);
    }

    // Moving CRT beam
    const beamY = ((time * 80) % (height + 200)) - 100;
    const beamGrad = ctx.createLinearGradient(0, beamY, 0, beamY + 80);
    beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
    beamGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
    beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = beamGrad;
    ctx.fillRect(0, beamY, width, 80);

    // Draw Cracks
    cracks.forEach((crack) => {
      ctx.save();
      crack.branches.forEach((branch) => {
        ctx.beginPath();
        ctx.moveTo(branch[0].x, branch[0].y);
        for (let i = 1; i < branch.length; i++) {
          ctx.lineTo(branch[i].x, branch[i].y);
        }
        // White bright fracture center
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = crack.stage === 1 ? 2.5 : crack.stage === 2 ? 4 : 6;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Outer chromatic split line
        ctx.beginPath();
        ctx.moveTo(branch[0].x + 1.5, branch[0].y + 1.5);
        for (let i = 1; i < branch.length; i++) {
          ctx.lineTo(branch[i].x + 1.5, branch[i].y + 1.5);
        }
        ctx.strokeStyle = 'rgba(255, 77, 109, 0.8)';
        ctx.lineWidth = crack.stage === 1 ? 1.5 : 2.5;
        ctx.stroke();
      });

      // Impact blast ring
      const ringRadius = crack.stage === 1 ? 25 : crack.stage === 2 ? 55 : 120;
      const ringGrad = ctx.createRadialGradient(crack.cx, crack.cy, 2, crack.cx, crack.cy, ringRadius);
      ringGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      ringGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.7)');
      ringGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = ringGrad;
      ctx.beginPath();
      ctx.arc(crack.cx, crack.cy, ringRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });

    // Outer CRT bezel vignette
    const vignette = ctx.createRadialGradient(width / 2, height / 2, width * 0.4, width / 2, height / 2, width * 0.72);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  }

  return {
    canvas,
    update,
    addCrack,
    getCracks: () => cracks
  };
}
