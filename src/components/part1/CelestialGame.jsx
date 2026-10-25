import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';
import KineticHeading from '../typography/KineticHeading';
import { Zap, Shield, Sparkles, FastForward, ArrowRight } from 'lucide-react';

export default function CelestialGame({ onComplete }) {
  const containerRef = useRef(null);
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(15);
  const [phase, setPhase] = useState('WIREFRAME'); // 'WIREFRAME' -> 'SYNTH' -> 'RADIANCE' -> 'VICTORY'
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.035);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0x223355, 1.5);
    scene.add(ambientLight);

    const shipLight = new THREE.PointLight(0xf5c344, 3, 20);
    scene.add(shipLight);

    // Player Star Craft
    const craftGroup = new THREE.Group();
    scene.add(craftGroup);
    craftGroup.position.set(0, -1, 5);

    // Craft Geometries
    const craftMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0f4c81,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: true // Starts wireframe in Phase 1
    });

    // Central Core
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const coreMesh = new THREE.Mesh(coreGeo, craftMat);
    craftGroup.add(coreMesh);

    // Wing Fins
    const wingGeo = new THREE.ConeGeometry(0.5, 2.2, 4);
    const wingLeft = new THREE.Mesh(wingGeo, craftMat);
    wingLeft.rotation.z = Math.PI / 2.3;
    wingLeft.position.set(-1.1, 0, -0.4);
    craftGroup.add(wingLeft);

    const wingRight = new THREE.Mesh(wingGeo, craftMat);
    wingRight.rotation.z = -Math.PI / 2.3;
    wingRight.position.set(1.1, 0, -0.4);
    craftGroup.add(wingRight);

    // Thruster engine glow
    const thrusterGeo = new THREE.CylinderGeometry(0.1, 0.35, 0.8, 12);
    const thrusterMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const thrusterMesh = new THREE.Mesh(thrusterGeo, thrusterMat);
    thrusterMesh.rotation.x = Math.PI / 2;
    thrusterMesh.position.set(0, 0, -0.9);
    craftGroup.add(thrusterMesh);

    // Starfield Tunnel Particles
    const starCount = 650;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 12;
      starPos[i * 3] = Math.cos(angle) * radius;
      starPos[i * 3 + 1] = Math.sin(angle) * radius;
      starPos[i * 3 + 2] = -Math.random() * 120;
      starSpeeds[i] = Math.random() * 0.8 + 0.4;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));

    const starMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.16,
      transparent: true,
      opacity: 0.85
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Collectibles & Obstacles
    const items = [];
    const itemMatCore = new THREE.MeshStandardMaterial({
      color: 0xf5c344,
      emissive: 0xffaa00,
      emissiveIntensity: 0.9,
      roughness: 0.1
    });

    const itemMatObstacle = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0x991b1b,
      wireframe: true,
      roughness: 0.5
    });

    const spawnItem = (zDist) => {
      const isCore = Math.random() > 0.35; // 65% cores, 35% obstacles
      const geo = isCore ? new THREE.IcosahedronGeometry(0.45, 0) : new THREE.BoxGeometry(0.8, 0.8, 0.8);
      const mesh = new THREE.Mesh(geo, isCore ? itemMatCore : itemMatObstacle);

      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 3.2;
      mesh.position.set(Math.cos(angle) * r, Math.sin(angle) * r - 0.5, zDist);

      scene.add(mesh);
      items.push({
        mesh,
        isCore,
        rotSpeedX: (Math.random() - 0.5) * 0.05,
        rotSpeedY: (Math.random() - 0.5) * 0.05,
        active: true
      });
    };

    // Initial batch of items
    for (let i = 0; i < 20; i++) {
      spawnItem(-15 - i * 6);
    }

    // Input Tracking
    const mouse = { x: 0, y: -0.5, targetX: 0, targetY: -0.5 };
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 6 - 3;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 4 - 2) - 0.5;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Keyboard controls
    const keys = {};
    const onKeyDown = (e) => (keys[e.key] = true);
    const onKeyUp = (e) => (keys[e.key] = false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // Game state tracking
    let curEnergy = 15;
    let curScore = 0;
    let curPhase = 'WIREFRAME';
    let speed = 24;
    let isGameOver = false;

    // Victory sequence trigger
    const triggerVictory = () => {
      if (isGameOver) return;
      isGameOver = true;
      setPhase('VICTORY');
      sound.victory();

      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#f5c344', '#38bdf8', '#ff4d6d', '#ffffff']
      });

      // Hyperdrive camera zoom
      gsap.to(camera.position, {
        z: -60,
        duration: 2.2,
        ease: 'power4.in',
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // Bloom flash
      gsap.to(ambientLight, { intensity: 10, duration: 2.2 });
    };

    // Advance Phase
    const checkPhaseTransition = (newEnergy) => {
      if (newEnergy >= 100 && curPhase !== 'VICTORY') {
        triggerVictory();
      } else if (newEnergy >= 60 && curPhase !== 'RADIANCE') {
        curPhase = 'RADIANCE';
        setPhase('RADIANCE');
        setMultiplier(3);
        speed = 42;
        craftMat.wireframe = false;
        craftMat.color.setHex(0xf5c344);
        craftMat.emissive.setHex(0xffb703);
        thrusterMat.color.setHex(0xf5c344);
        starMat.color.setHex(0xf5c344);
        starMat.size = 0.28;
      } else if (newEnergy >= 30 && curPhase === 'WIREFRAME') {
        curPhase = 'SYNTH';
        setPhase('SYNTH');
        setMultiplier(2);
        speed = 32;
        craftMat.wireframe = false;
        craftMat.color.setHex(0xd946ef);
        craftMat.emissive.setHex(0xa21caf);
        thrusterMat.color.setHex(0xd946ef);
        starMat.color.setHex(0xd946ef);
      }
    };

    // Expose quick-warp trigger on window for button
    window.__triggerCelestiusWarp = () => {
      setEnergy(100);
      triggerVictory();
    };

    // Render loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      // Keyboard movement
      if (keys['ArrowLeft'] || keys['a']) mouse.targetX -= 4 * dt;
      if (keys['ArrowRight'] || keys['d']) mouse.targetX += 4 * dt;
      if (keys['ArrowUp'] || keys['w']) mouse.targetY += 4 * dt;
      if (keys['ArrowDown'] || keys['s']) mouse.targetY -= 4 * dt;

      // Clamp target
      mouse.targetX = Math.max(-3.5, Math.min(3.5, mouse.targetX));
      mouse.targetY = Math.max(-2.5, Math.min(2.5, mouse.targetY));

      // Craft position smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;
      craftGroup.position.x = mouse.x;
      craftGroup.position.y = mouse.y;

      // Bank craft with movement
      craftGroup.rotation.z = -(mouse.targetX - mouse.x) * 1.2;
      craftGroup.rotation.x = (mouse.targetY - mouse.y) * 0.6;
      coreMesh.rotation.y += 1.5 * dt;

      shipLight.position.copy(craftGroup.position);

      // Animate starfield tunnel
      const starPositions = starGeo.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3 + 2] += (speed + starSpeeds[i] * 10) * dt;
        if (starPositions[i * 3 + 2] > 10) {
          starPositions[i * 3 + 2] = -120;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      // Move items forward
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        item.mesh.position.z += speed * dt;
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;

        // Collision check with player craft
        if (item.active && Math.abs(item.mesh.position.z - craftGroup.position.z) < 1.0) {
          const dist = Math.hypot(
            item.mesh.position.x - craftGroup.position.x,
            item.mesh.position.y - craftGroup.position.y
          );

          if (dist < 1.2) {
            item.active = false;
            scene.remove(item.mesh);

            if (item.isCore) {
              sound.collect();
              curScore += 100 * (curPhase === 'RADIANCE' ? 3 : curPhase === 'SYNTH' ? 2 : 1);
              curEnergy = Math.min(100, curEnergy + 7);
              setScore(curScore);
              setEnergy(curEnergy);
              checkPhaseTransition(curEnergy);

              // Flash ship
              gsap.to(craftGroup.scale, {
                x: 1.25,
                y: 1.25,
                z: 1.25,
                duration: 0.1,
                yoyo: true,
                repeat: 1
              });
            } else {
              sound.hit();
              curEnergy = Math.max(5, curEnergy - 12);
              setEnergy(curEnergy);

              // Camera shake
              gsap.to(camera.position, {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5,
                duration: 0.05,
                repeat: 3,
                yoyo: true,
                onComplete: () => {
                  camera.position.x = 0;
                  camera.position.y = 0;
                }
              });
            }
          }
        }

        // Recycle passed items
        if (item.mesh.position.z > 12) {
          scene.remove(item.mesh);
          items.splice(i, 1);
          spawnItem(-100);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      delete window.__triggerCelestiusWarp;
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#03050a] overflow-hidden select-none">
      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />

      {/* Top HUD Bar */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-4">
          <div>
            <KineticHeading
              text="CELESTIUS CORE BREACH"
              tag="h2"
              className="text-xl md:text-2xl font-black text-white tracking-widest"
              accentIndices={[0, 9]}
            />
            <p className="text-xs font-mono text-cyan-400">
              ARCADE INTERACTION MATRIX // COLLECT CORES TO CHARGE WARP
            </p>
          </div>
        </div>

        {/* Phase Badge & Multiplier */}
        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider border backdrop-blur-md ${
              phase === 'WIREFRAME'
                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400'
                : phase === 'SYNTH'
                ? 'bg-fuchsia-500/10 border-fuchsia-500/40 text-fuchsia-400'
                : 'bg-amber-500/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_#f5c344]'
            }`}
          >
            PHASE: {phase}
          </div>

          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs font-mono text-amber-400 font-bold backdrop-blur-md">
            {multiplier}x MULTIPLIER
          </div>
        </div>
      </div>

      {/* Bottom HUD: Score & Energy Meter */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-none">
        {/* Score Counter */}
        <div className="bg-slate-900/85 border border-slate-700/70 rounded-2xl px-6 py-3 backdrop-blur-md shadow-2xl flex items-center gap-6">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Cosmic Resonance
            </div>
            <div className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-wider">
              {score.toLocaleString()}
            </div>
          </div>
          <div className="h-8 w-[1px] bg-slate-700" />
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
            <Sparkles size={16} />
            <span>COLLECT GOLD // DODGE RED</span>
          </div>
        </div>

        {/* Energy Charge Meter */}
        <div className="w-full md:w-80 bg-slate-900/85 border border-slate-700/70 rounded-2xl p-4 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Zap size={14} className="text-amber-400 fill-amber-400" />
              WARP CHARGE
            </span>
            <span className="font-bold text-amber-400">{energy}%</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div
              className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-400"
              style={{ width: `${energy}%` }}
            />
          </div>
        </div>

        {/* Quick Advance / Warp Button */}
        <div className="pointer-events-auto">
          <button
            onClick={() => window.__triggerCelestiusWarp && window.__triggerCelestiusWarp()}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-display font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(245,195,68,0.5)] transition-all transform hover:scale-105 active:scale-95"
          >
            <span>WARP TO THE BEE REALM</span>
            <FastForward size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
