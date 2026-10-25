import * as THREE from 'three';

// Generates the anatomical 3D Bee model hierarchy in Three.js
export function createBee3D() {
  const beeGroup = new THREE.Group();

  // Materials
  const chitinBlack = new THREE.MeshStandardMaterial({
    color: 0x111115,
    roughness: 0.4,
    metalness: 0.3
  });

  const thoraxFuzz = new THREE.MeshStandardMaterial({
    color: 0x8a5316,
    roughness: 0.9,
    metalness: 0.1
  });

  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0x050508,
    roughness: 0.15,
    metalness: 0.8,
    envMapIntensity: 1.5
  });

  // Translucent Iridescent Wings
  const wingMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.92,
    opacity: 0.82,
    transparent: true,
    roughness: 0.1,
    ior: 1.48,
    reflectivity: 0.9,
    side: THREE.DoubleSide
  });

  // 1. HEAD
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0, 0.7);
  beeGroup.add(headGroup);

  const headGeo = new THREE.SphereGeometry(0.32, 16, 16);
  headGeo.scale(1, 0.9, 0.85);
  const headMesh = new THREE.Mesh(headGeo, chitinBlack);
  headGroup.add(headMesh);

  // Compound Eyes
  const eyeGeo = new THREE.SphereGeometry(0.16, 16, 16);
  eyeGeo.scale(0.8, 1.2, 0.9);

  const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
  leftEye.position.set(-0.2, 0.08, 0.12);
  leftEye.rotation.set(0.2, -0.3, 0.2);
  headGroup.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeo, eyeMaterial);
  rightEye.position.set(0.2, 0.08, 0.12);
  rightEye.rotation.set(0.2, 0.3, -0.2);
  headGroup.add(rightEye);

  // Antennae
  const antennaCurveLeft = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.08, 0.18, 0.2),
    new THREE.Vector3(-0.16, 0.38, 0.4),
    new THREE.Vector3(-0.22, 0.48, 0.6)
  ]);
  const antennaGeoLeft = new THREE.TubeGeometry(antennaCurveLeft, 12, 0.02, 6, false);
  const antennaLeft = new THREE.Mesh(antennaGeoLeft, chitinBlack);
  headGroup.add(antennaLeft);

  const antennaCurveRight = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.08, 0.18, 0.2),
    new THREE.Vector3(0.16, 0.38, 0.4),
    new THREE.Vector3(0.22, 0.48, 0.6)
  ]);
  const antennaGeoRight = new THREE.TubeGeometry(antennaCurveRight, 12, 0.02, 6, false);
  const antennaRight = new THREE.Mesh(antennaGeoRight, chitinBlack);
  headGroup.add(antennaRight);

  // 2. THORAX
  const thoraxGeo = new THREE.SphereGeometry(0.48, 16, 16);
  thoraxGeo.scale(1.05, 0.95, 1.2);
  const thoraxMesh = new THREE.Mesh(thoraxGeo, thoraxFuzz);
  thoraxMesh.position.set(0, 0, 0.1);
  beeGroup.add(thoraxMesh);

  // 3. ABDOMEN with alternating Gold & Black Stripes
  const abdomenGroup = new THREE.Group();
  abdomenGroup.position.set(0, -0.05, -0.85);
  beeGroup.add(abdomenGroup);

  const numStripes = 6;
  const abdomenLength = 1.2;
  const stripeThickness = abdomenLength / numStripes;

  for (let i = 0; i < numStripes; i++) {
    const t = i / numStripes;
    const radius = Math.sin(t * Math.PI) * 0.46 + 0.12;

    const stripeGeo = new THREE.CylinderGeometry(radius, radius * 0.92, stripeThickness, 20);
    stripeGeo.rotateX(Math.PI / 2);

    const isGold = i % 2 === 1;
    const stripeMat = isGold
      ? new THREE.MeshStandardMaterial({
          color: 0xf5a524,
          roughness: 0.35,
          metalness: 0.2,
          emissive: 0x824400,
          emissiveIntensity: 0.3
        })
      : chitinBlack;

    const stripeMesh = new THREE.Mesh(stripeGeo, stripeMat);
    stripeMesh.position.set(0, 0, (i - numStripes / 2) * stripeThickness);
    abdomenGroup.add(stripeMesh);
  }

  // 4. WINGS (Left & Right dual wing sets)
  const createWing = () => {
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.bezierCurveTo(0.2, 0.4, 0.6, 1.4, 0.45, 1.8);
    wingShape.bezierCurveTo(0.35, 2.0, -0.1, 1.9, -0.2, 1.3);
    wingShape.bezierCurveTo(-0.25, 0.8, -0.15, 0.3, 0, 0);

    const wingGeo = new THREE.ShapeGeometry(wingShape);
    return new THREE.Mesh(wingGeo, wingMaterial);
  };

  // Left Wing Group
  const leftWingPivot = new THREE.Group();
  leftWingPivot.position.set(-0.28, 0.35, 0.2);
  beeGroup.add(leftWingPivot);

  const leftForeWing = createWing();
  leftForeWing.scale.set(0.7, 0.7, 0.7);
  leftForeWing.rotation.set(Math.PI / 2, -Math.PI / 4, 0);
  leftWingPivot.add(leftForeWing);

  // Right Wing Group
  const rightWingPivot = new THREE.Group();
  rightWingPivot.position.set(0.28, 0.35, 0.2);
  beeGroup.add(rightWingPivot);

  const rightForeWing = createWing();
  rightForeWing.scale.set(0.7, 0.7, 0.7);
  rightForeWing.rotation.set(Math.PI / 2, Math.PI / 4, 0);
  rightWingPivot.add(rightForeWing);

  // 5. LEGS
  const legMaterial = chitinBlack;
  [-1, 1].forEach((side) => {
    // 3 legs on each side
    [-0.15, 0.05, 0.25].forEach((zPos, idx) => {
      const legCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.3, -0.1, zPos),
        new THREE.Vector3(side * 0.55, -0.4, zPos - 0.1),
        new THREE.Vector3(side * 0.65, -0.7, zPos - 0.25)
      ]);
      const legGeo = new THREE.TubeGeometry(legCurve, 8, 0.025, 6, false);
      const legMesh = new THREE.Mesh(legGeo, legMaterial);
      beeGroup.add(legMesh);
    });
  });

  // Scale entire bee to comfortable size
  beeGroup.scale.set(1.5, 1.5, 1.5);

  // Animation Update function
  return {
    group: beeGroup,
    leftWing: leftWingPivot,
    rightWing: rightWingPivot,
    abdomen: abdomenGroup,
    update: (time, flapSpeed = 65.0) => {
      // Rapid high-frequency wing oscillation
      const flap = Math.sin(time * flapSpeed);
      leftWingPivot.rotation.z = flap * 0.75;
      rightWingPivot.rotation.z = -flap * 0.75;

      // Gentle organic abdomen breathing flex
      abdomenGroup.rotation.x = Math.sin(time * 3.5) * 0.08 - 0.12;

      // Subtle hover body yaw & pitch
      beeGroup.position.y += Math.sin(time * 4) * 0.003;
    }
  };
}
