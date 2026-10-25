import * as THREE from 'three';

// High-fidelity 3D Mascot Model in Three.js (Exact match to Reference Image 2)
export function createMascot3D() {
  const mascotGroup = new THREE.Group();

  // Materials
  const helmetMat = new THREE.MeshStandardMaterial({
    color: 0x09090b,
    roughness: 0.15,
    metalness: 0.85,
    envMapIntensity: 1.2
  });

  const redAccentMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
  const glowingRedMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xff1100,
    emissiveIntensity: 0.8
  });

  const shoeOrangeMat = new THREE.MeshStandardMaterial({
    color: 0xf95738,
    roughness: 0.35,
    metalness: 0.1
  });

  const shoeBlackMat = new THREE.MeshStandardMaterial({
    color: 0x111115,
    roughness: 0.4
  });

  const shoeWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xf4f4f5,
    roughness: 0.2
  });

  // 1. HEAD / HELMET (Spherical glossy black)
  const headGroup = new THREE.Group();
  mascotGroup.add(headGroup);

  const helmetGeo = new THREE.SphereGeometry(0.85, 32, 32);
  const helmetMesh = new THREE.Mesh(helmetGeo, helmetMat);
  headGroup.add(helmetMesh);

  // 2. CAT / DEVIL HORNS WITH RED EDGES (Image 2)
  [-1, 1].forEach((side) => {
    const hornGroup = new THREE.Group();
    hornGroup.position.set(side * 0.42, 0.78, -0.05);
    hornGroup.rotation.set(-0.25, 0, -side * 0.35);

    const hornGeo = new THREE.ConeGeometry(0.18, 0.45, 16);
    const hornMesh = new THREE.Mesh(hornGeo, helmetMat);
    hornGroup.add(hornMesh);

    // Red glowing edge fin
    const redFinGeo = new THREE.BoxGeometry(0.04, 0.42, 0.12);
    const redFin = new THREE.Mesh(redFinGeo, glowingRedMat);
    redFin.position.set(0, 0, 0.08);
    hornGroup.add(redFin);

    headGroup.add(hornGroup);
  });

  // 3. HEADPHONE EARCUPS WITH RED CONCENTRIC RINGS (Image 2)
  [-1, 1].forEach((side) => {
    const hpGroup = new THREE.Group();
    hpGroup.position.set(side * 0.88, 0.05, 0);
    hpGroup.rotation.z = Math.PI / 2;

    const baseGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.16, 24);
    const baseMesh = new THREE.Mesh(baseGeo, helmetMat);
    hpGroup.add(baseMesh);

    // Glowing red ring
    const ringGeo = new THREE.TorusGeometry(0.24, 0.03, 12, 24);
    const ringMesh = new THREE.Mesh(ringGeo, glowingRedMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = side * 0.08;
    hpGroup.add(ringMesh);

    headGroup.add(hpGroup);
  });

  // 4. VISOR BROW ARCH WITH RED NEON OUTLINE (Image 2)
  const browCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.72, 0.05, 0.35),
    new THREE.Vector3(-0.4, 0.38, 0.65),
    new THREE.Vector3(0, 0.45, 0.75),
    new THREE.Vector3(0.4, 0.38, 0.65),
    new THREE.Vector3(0.72, 0.05, 0.35)
  ]);
  const browGeo = new THREE.TubeGeometry(browCurve, 20, 0.035, 8, false);
  const browMesh = new THREE.Mesh(browGeo, glowingRedMat);
  headGroup.add(browMesh);

  // 5. VISOR DOME & FACE CANVAS (Pixel Eyes ^ ^ + Sharp Teeth Mouth)
  const faceCanvas = document.createElement('canvas');
  faceCanvas.width = 512;
  faceCanvas.height = 512;
  const fCtx = faceCanvas.getContext('2d');
  const faceTex = new THREE.CanvasTexture(faceCanvas);

  const facePlaneGeo = new THREE.PlaneGeometry(1.2, 0.9);
  const facePlaneMat = new THREE.MeshBasicMaterial({ map: faceTex, transparent: true });
  const facePlaneMesh = new THREE.Mesh(facePlaneGeo, facePlaneMat);
  facePlaneMesh.position.set(0, 0.08, 0.82);
  headGroup.add(facePlaneMesh);

  // 6. CHUNKY RED/ORANGE SNEAKERS (Image 2)
  const createShoeMesh = (isLeft) => {
    const shoe = new THREE.Group();

    // Chunky curved orange sole
    const soleGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.28, 20);
    soleGeo.scale(0.9, 1.0, 1.4);
    const soleMesh = new THREE.Mesh(soleGeo, shoeOrangeMat);
    soleMesh.position.set(0, -0.15, 0.05);
    shoe.add(soleMesh);

    // Front bulbous toe cap (Image 2)
    const toeGeo = new THREE.SphereGeometry(0.32, 16, 16);
    toeGeo.scale(0.85, 0.7, 1.0);
    const toeMesh = new THREE.Mesh(toeGeo, shoeOrangeMat);
    toeMesh.position.set(0, -0.05, 0.35);
    shoe.add(toeMesh);

    // Black upper body
    const upperGeo = new THREE.BoxGeometry(0.5, 0.45, 0.85);
    const upperMesh = new THREE.Mesh(upperGeo, shoeBlackMat);
    upperMesh.position.set(0, 0.12, 0);
    shoe.add(upperMesh);

    // Orange tongue / collar
    const collarGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.2, 16);
    const collarMesh = new THREE.Mesh(collarGeo, shoeOrangeMat);
    collarMesh.position.set(0, 0.32, -0.05);
    shoe.add(collarMesh);

    // Black criss-cross laces
    const laceGeo = new THREE.BoxGeometry(0.35, 0.04, 0.08);
    for (let l = 0; l < 3; l++) {
      const lace = new THREE.Mesh(laceGeo, shoeBlackMat);
      lace.position.set(0, 0.25 - l * 0.08, 0.15 + l * 0.08);
      shoe.add(lace);
    }

    return shoe;
  };

  const leftShoe = createShoeMesh(true);
  leftShoe.position.set(-0.45, -1.05, 0.1);
  mascotGroup.add(leftShoe);

  const rightShoe = createShoeMesh(false);
  rightShoe.position.set(0.45, -1.05, 0.1);
  mascotGroup.add(rightShoe);

  // Function to render the exact pixel eyes ^ ^ and sharp teeth mouth
  const updateFaceCanvas = (time, isBlinking = false, expression = 'HAPPY') => {
    fCtx.clearRect(0, 0, 512, 512);

    fCtx.fillStyle = '#22c55e';
    fCtx.shadowColor = '#4ade80';
    fCtx.shadowBlur = 18;

    const eyeSize = 16;
    const gap = 20;

    // Draw Left Chevron Eye "^" (Exact match to Image 2)
    // 7 pixel blocks forming a crisp angled chevron
    const drawChevronEye = (cx, cy) => {
      // Peak
      fCtx.fillRect(cx, cy - eyeSize * 2, eyeSize, eyeSize);
      // Left slope
      fCtx.fillRect(cx - eyeSize, cy - eyeSize, eyeSize, eyeSize);
      fCtx.fillRect(cx - eyeSize * 2, cy, eyeSize, eyeSize);
      fCtx.fillRect(cx - eyeSize * 3, cy + eyeSize, eyeSize, eyeSize);
      // Right slope
      fCtx.fillRect(cx + eyeSize, cy - eyeSize, eyeSize, eyeSize);
      fCtx.fillRect(cx + eyeSize * 2, cy, eyeSize, eyeSize);
      fCtx.fillRect(cx + eyeSize * 3, cy + eyeSize, eyeSize, eyeSize);
    };

    if (expression === 'HAPPY') {
      drawChevronEye(160, 210);
      drawChevronEye(352, 210);
    } else if (expression === 'DIZZY') {
      // X X eyes on defeat
      fCtx.fillStyle = '#ef4444';
      fCtx.shadowColor = '#f87171';
      // Left X
      fCtx.fillRect(130, 180, 60, 14);
      fCtx.fillRect(150, 160, 14, 60);
      // Right X
      fCtx.fillRect(320, 180, 60, 14);
      fCtx.fillRect(340, 160, 14, 60);
    }

    fCtx.shadowBlur = 0;

    // Draw Shark Grin with White Sharp Teeth (Image 2)
    const mouthY = 330;
    // Dark open mouth curve
    fCtx.fillStyle = '#18181b';
    fCtx.beginPath();
    fCtx.ellipse(256, mouthY, 150, 50, 0, 0, Math.PI);
    fCtx.fill();

    // Red inner gum
    fCtx.strokeStyle = '#ef4444';
    fCtx.lineWidth = 6;
    fCtx.stroke();

    // Sharp white triangular teeth
    fCtx.fillStyle = '#ffffff';
    const numTeeth = 8;
    const toothW = 280 / numTeeth;
    for (let t = 0; t < numTeeth; t++) {
      const tx = 116 + t * toothW;
      fCtx.beginPath();
      fCtx.moveTo(tx, mouthY);
      fCtx.lineTo(tx + toothW / 2, mouthY + 28);
      fCtx.lineTo(tx + toothW, mouthY);
      fCtx.closePath();
      fCtx.fill();
    }

    faceTex.needsUpdate = true;
  };

  return {
    group: mascotGroup,
    head: headGroup,
    leftShoe,
    rightShoe,
    update: (time, isRunning = false, runSpeed = 8) => {
      updateFaceCanvas(time);

      if (isRunning) {
        // Natural bouncy run stride
        const stride = Math.sin(time * runSpeed);
        leftShoe.position.z = stride * 0.4;
        leftShoe.position.y = -1.05 + Math.abs(stride) * 0.25;
        leftShoe.rotation.x = -stride * 0.4;

        rightShoe.position.z = -stride * 0.4;
        rightShoe.position.y = -1.05 + Math.abs(-stride) * 0.25;
        rightShoe.rotation.x = stride * 0.4;

        headGroup.position.y = Math.sin(time * runSpeed * 2) * 0.08;
      } else {
        // Gentle idle breathing
        headGroup.position.y = Math.sin(time * 3) * 0.06;
        leftShoe.position.y = -1.05 + Math.sin(time * 2.5) * 0.03;
        rightShoe.position.y = -1.05 + Math.cos(time * 2.5) * 0.03;
      }
    }
  };
}

// 2D High-Resolution Canvas Drawer for the 2D Game Engine (Matches Image 2 exactly!)
export function drawMascot2D(
  ctx,
  x,
  y,
  scale = 1,
  runFrame = 0,
  isGrounded = true,
  rotationAngle = 0,
  expression = 'HAPPY',
  renderMode = 'NORMAL' // 'NORMAL', 'ASCII', '8BIT', 'CHROME'
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  if (rotationAngle !== 0) {
    ctx.rotate(rotationAngle);
  }

  // Handle Chrome mode in Y2K stage
  if (renderMode === 'CHROME') {
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 15;
  }

  // 1. Soft Shadow on Ground
  if (isGrounded && rotationAngle === 0) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.beginPath();
    ctx.ellipse(0, 36, 28, 6, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // 2. Chunky Orange/Red Sneakers (Image 2)
  const legSwing = isGrounded ? Math.sin(runFrame * 3.5) * 16 : 0;
  const legLift = isGrounded ? Math.abs(Math.sin(runFrame * 3.5)) * 10 : -8;

  // Function to draw one Image 2 Sneaker
  const drawSingleShoe = (sx, sy, isRight = false) => {
    ctx.save();
    ctx.translate(sx, sy);

    // Sole: Bright orange chunky curved sole
    ctx.fillStyle = renderMode === 'ASCII' ? '#22c55e' : renderMode === '8BIT' ? '#ea580c' : '#f95738';
    ctx.beginPath();
    ctx.ellipse(0, 8, 16, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    // Front toe bubble
    ctx.beginPath();
    ctx.arc(8, 5, 8, 0, Math.PI * 2);
    ctx.fill();

    // Black leather upper
    ctx.fillStyle = renderMode === 'ASCII' ? '#064e3b' : '#18181b';
    ctx.beginPath();
    ctx.roundRect(-12, -8, 22, 14, 5);
    ctx.fill();

    // Orange collar / tongue
    ctx.fillStyle = renderMode === 'ASCII' ? '#22c55e' : '#f95738';
    ctx.fillRect(-6, -12, 10, 6);

    // Black laces
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, -6, 6, 2);
    ctx.fillRect(2, -2, 6, 2);

    ctx.restore();
  };

  // Draw Left Shoe & Right Shoe
  drawSingleShoe(-14 + legSwing, 24 - legLift);
  drawSingleShoe(14 - legSwing, 24 - (isGrounded ? Math.abs(-Math.sin(runFrame * 3.5)) * 10 : -8));

  // 3. Head / Helmet (Glossy Black Sphere with Horns & Headphones)
  const headBob = isGrounded ? Math.sin(runFrame * 7) * 3 : 0;
  ctx.save();
  ctx.translate(0, headBob);

  // Black Helmet Shell
  if (renderMode === 'CHROME') {
    const chromeGrad = ctx.createLinearGradient(-30, -30, 30, 30);
    chromeGrad.addColorStop(0, '#ffffff');
    chromeGrad.addColorStop(0.3, '#38bdf8');
    chromeGrad.addColorStop(0.7, '#a855f7');
    chromeGrad.addColorStop(1, '#ffffff');
    ctx.fillStyle = chromeGrad;
  } else if (renderMode === 'ASCII') {
    ctx.fillStyle = '#064e3b';
  } else {
    ctx.fillStyle = '#09090b';
  }

  ctx.beginPath();
  ctx.arc(0, -10, 30, 0, Math.PI * 2);
  ctx.fill();

  // Helmet Rim / Outline
  ctx.strokeStyle = renderMode === 'ASCII' ? '#4ade80' : renderMode === 'CHROME' ? '#ffffff' : '#27272a';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Horns on top with Red Edges (Image 2)
  [-1, 1].forEach((side) => {
    ctx.save();
    ctx.translate(side * 16, -36);
    ctx.rotate(side * 0.3);

    // Horn body
    ctx.fillStyle = renderMode === 'ASCII' ? '#064e3b' : '#09090b';
    ctx.beginPath();
    ctx.moveTo(-6, 0);
    ctx.lineTo(0, -14);
    ctx.lineTo(6, 0);
    ctx.closePath();
    ctx.fill();

    // Red neon edge
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  });

  // Headphones on sides with Red Glowing Rings (Image 2)
  [-1, 1].forEach((side) => {
    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    ctx.ellipse(side * 30, -8, 6, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Red ring
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Visor Brow Arc with Red Line (Image 2)
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, -12, 26, Math.PI * 1.15, Math.PI * 1.85);
  ctx.stroke();

  // Green LED Pixel Eyes: ^ ^ (Image 2)
  ctx.fillStyle = '#4ade80';
  ctx.shadowColor = '#22c55e';
  ctx.shadowBlur = 10;

  if (expression === 'HAPPY') {
    const px = 2.5;
    // Left chevron eye ^
    const lx = -14;
    const ly = -14;
    ctx.fillRect(lx, ly - px * 2, px, px);
    ctx.fillRect(lx - px, ly - px, px, px);
    ctx.fillRect(lx - px * 2, ly, px, px);
    ctx.fillRect(lx - px * 3, ly + px, px, px);
    ctx.fillRect(lx + px, ly - px, px, px);
    ctx.fillRect(lx + px * 2, ly, px, px);
    ctx.fillRect(lx + px * 3, ly + px, px, px);

    // Right chevron eye ^
    const rx = 14;
    const ry = -14;
    ctx.fillRect(rx, ry - px * 2, px, px);
    ctx.fillRect(rx - px, ry - px, px, px);
    ctx.fillRect(rx - px * 2, ry, px, px);
    ctx.fillRect(rx - px * 3, ry + px, px, px);
    ctx.fillRect(rx + px, ry - px, px, px);
    ctx.fillRect(rx + px * 2, ry, px, px);
    ctx.fillRect(rx + px * 3, ry + px, px, px);
  } else {
    // Dizzy X X eyes on defeat
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(-18, -16, 12, 3);
    ctx.fillRect(-14, -20, 3, 12);
    ctx.fillRect(8, -16, 12, 3);
    ctx.fillRect(12, -20, 3, 12);
  }

  ctx.shadowBlur = 0;

  // Sharp White Shark Teeth Grin (Image 2)
  ctx.fillStyle = '#18181b';
  ctx.beginPath();
  ctx.ellipse(0, 4, 18, 7, 0, 0, Math.PI);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  for (let t = 0; t < 6; t++) {
    const tx = -16 + t * 5.2;
    ctx.beginPath();
    ctx.moveTo(tx, 4);
    ctx.lineTo(tx + 2.5, 9);
    ctx.lineTo(tx + 5, 4);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
  ctx.restore();
}
