import * as THREE from 'three';

export function createPollenSystem(count = 350) {
  const geom = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const alphas = new Float32Array(count);
  const velocities = [];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

    scales[i] = Math.random() * 0.12 + 0.04;
    alphas[i] = Math.random() * 0.7 + 0.3;

    velocities.push({
      vx: (Math.random() - 0.5) * 0.015,
      vy: (Math.random() - 0.5) * 0.015 + 0.005,
      vz: (Math.random() - 0.5) * 0.015,
      life: Math.random(),
      maxLife: 1.0
    });
  }

  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geom.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

  // Custom golden particle texture
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.3, 'rgba(245, 195, 68, 0.9)');
  grad.addColorStop(0.7, 'rgba(230, 149, 25, 0.4)');
  grad.addColorStop(1, 'rgba(230, 149, 25, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);

  const mat = new THREE.PointsMaterial({
    map: texture,
    size: 0.32,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(geom, mat);

  return {
    points,
    emitAround: (pos, intensity = 1) => {
      const posArray = geom.attributes.position.array;
      // Re-seed a few particles around the bee position
      for (let k = 0; k < Math.floor(intensity * 4); k++) {
        const idx = Math.floor(Math.random() * count);
        posArray[idx * 3] = pos.x + (Math.random() - 0.5) * 0.6;
        posArray[idx * 3 + 1] = pos.y + (Math.random() - 0.5) * 0.6;
        posArray[idx * 3 + 2] = pos.z - 0.4 - Math.random() * 0.8;
      }
      geom.attributes.position.needsUpdate = true;
    },
    update: (time) => {
      const posArray = geom.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const vel = velocities[i];
        posArray[i * 3] += vel.vx + Math.sin(time + i) * 0.003;
        posArray[i * 3 + 1] += vel.vy;
        posArray[i * 3 + 2] += vel.vz;

        // Reset if drifted too far
        if (posArray[i * 3 + 1] > 10) {
          posArray[i * 3 + 1] = -10;
        }
      }
      geom.attributes.position.needsUpdate = true;
    }
  };
}
