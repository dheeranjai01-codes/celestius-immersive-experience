import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { sound } from '../../utils/sound';
import { createMascot3D } from '../common/MascotCharacter';
import { Volume2, VolumeX, Play } from 'lucide-react';

export default function RedPosterScene({ onComplete }) {
  const containerRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [lang, setLang] = useState('EN');
  const [balloons, setBalloons] = useState([]);
  const [characterEscaped, setCharacterEscaped] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 6, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const redRimLight = new THREE.PointLight(0xff2200, 3.5, 15);
    redRimLight.position.set(-5, 0, 3);
    scene.add(redRimLight);

    // Master Group for Computer & Desk
    const rig = new THREE.Group();
    scene.add(rig);

    // Realistic Halftone Beige Texture for Vintage Macintosh (Image 1)
    const createHalftoneTexture = () => {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 512;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#eae4d5'; // Authentic vintage Macintosh cream
      ctx.fillRect(0, 0, 512, 512);

      // Fine halftone stipple pattern (Image 1)
      ctx.fillStyle = '#222224';
      for (let y = 0; y < 512; y += 8) {
        for (let x = 0; x < 512; x += 8) {
          if ((x + y) % 16 === 0) {
            ctx.beginPath();
            ctx.arc(x, y, 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      return new THREE.CanvasTexture(c);
    };

    const halftoneTex = createHalftoneTexture();
    halftoneTex.wrapS = THREE.RepeatWrapping;
    halftoneTex.wrapT = THREE.RepeatWrapping;
    halftoneTex.repeat.set(2, 2);

    const pcMaterial = new THREE.MeshStandardMaterial({
      map: halftoneTex,
      color: 0xeee7d8,
      roughness: 0.55,
      metalness: 0.1
    });

    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.7
    });

    // 1. Vintage Macintosh Monitor Chassis (Image 1)
    const monitorGroup = new THREE.Group();
    rig.add(monitorGroup);

    // PC Main Body with rounded vintage Macintosh proportions
    const pcBodyGeo = new THREE.BoxGeometry(2.8, 3.1, 2.3);
    const pcBodyMesh = new THREE.Mesh(pcBodyGeo, pcMaterial);
    pcBodyMesh.position.set(0, 0.45, 0);
    pcBodyMesh.castShadow = true;
    monitorGroup.add(pcBodyMesh);

    // Front Bezel Frame (Image 1: rounded rectangular bezel with recessed screen)
    const bezelGeo = new THREE.BoxGeometry(2.82, 3.12, 0.2);
    const bezelMesh = new THREE.Mesh(bezelGeo, pcMaterial);
    bezelMesh.position.set(0, 0.45, 1.15);
    monitorGroup.add(bezelMesh);

    // Floppy Drive Slot (Image 1)
    const slotGeo = new THREE.BoxGeometry(1.2, 0.08, 0.05);
    const slotMesh = new THREE.Mesh(slotGeo, darkAccentMat);
    slotMesh.position.set(0.55, -0.65, 1.26);
    monitorGroup.add(slotMesh);

    // Square Logo / Eject Button (Image 1)
    const badgeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.05);
    const badgeMesh = new THREE.Mesh(badgeGeo, darkAccentMat);
    badgeMesh.position.set(-0.95, -0.65, 1.26);
    monitorGroup.add(badgeMesh);

    // 2. Mechanical Keyboard on Red Floor in Front
    const kbGroup = new THREE.Group();
    kbGroup.position.set(0, -1.35, 1.6);
    kbGroup.rotation.x = 0.15;
    rig.add(kbGroup);

    const kbBaseGeo = new THREE.BoxGeometry(3.1, 0.22, 1.2);
    const kbBaseMesh = new THREE.Mesh(kbBaseGeo, pcMaterial);
    kbGroup.add(kbBaseMesh);

    // Keycaps with dark stipple
    const keysGeo = new THREE.BoxGeometry(2.8, 0.12, 0.95);
    const keysMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.7 });
    const keysMesh = new THREE.Mesh(keysGeo, keysMat);
    keysMesh.position.set(0, 0.14, 0);
    kbGroup.add(keysMesh);

    // Coiled cable
    const cableCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.3, -1.35, 1.6),
      new THREE.Vector3(-1.6, -1.2, 1.2),
      new THREE.Vector3(-1.7, -0.5, 0.8),
      new THREE.Vector3(-1.4, -0.2, 0.2)
    ]);
    const cableGeo = new THREE.TubeGeometry(cableCurve, 20, 0.035, 8, false);
    const cableMesh = new THREE.Mesh(cableGeo, darkAccentMat);
    rig.add(cableMesh);

    // 3. CRT Screen Canvas Texture (Matches Image 1: Green circular room with Image 2 Character inside!)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 1024;
    const sCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);

    const screenGeo = new THREE.PlaneGeometry(2.2, 1.8, 24, 24);
    // Curve screen vertices outward to replicate curved CRT bulb glass
    const pos = screenGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const r2 = (u * u) / 2.2 + (v * v) / 1.8;
      pos.setZ(i, -Math.sin(r2 * 0.4) * 0.15);
    }
    screenGeo.computeVertexNormals();

    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.75, 1.28);
    monitorGroup.add(screenMesh);

    // Portal behind screen
    const portalGeo = new THREE.SphereGeometry(1.0, 24, 24);
    const portalMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0
    });
    const portalMesh = new THREE.Mesh(portalGeo, portalMat);
    portalMesh.position.set(0, 0.75, 0.4);
    monitorGroup.add(portalMesh);

    // 4. Mascot 3D Model (Exact match to Reference Image 2!)
    const mascot = createMascot3D();
    scene.add(mascot.group);
    mascot.group.scale.set(0.01, 0.01, 0.01); // Hidden until breakout
    mascot.group.position.set(0, 0.75, 0.5);

    // 5. 3D Glass Shards on Desk
    const shardsGroup = new THREE.Group();
    scene.add(shardsGroup);

    // Draw Screen Canvas (Exact match to Image 1: CRT screen with Image 2 Character inside!)
    let screenCracks = 0;
    const renderCRTContent = (time) => {
      // Dark CRT room
      sCtx.fillStyle = '#051108';
      sCtx.fillRect(0, 0, 1024, 1024);

      // Green circular glowing chamber (Image 1)
      const cx = 512;
      const cy = 512;
      const radGrad = sCtx.createRadialGradient(cx, cy, 60, cx, cy, 480);
      radGrad.addColorStop(0, '#22c55e');
      radGrad.addColorStop(0.35, '#16a34a');
      radGrad.addColorStop(0.7, '#0f3a1d');
      radGrad.addColorStop(1, '#051208');
      sCtx.fillStyle = radGrad;
      sCtx.beginPath();
      sCtx.arc(cx, cy, 460, 0, Math.PI * 2);
      sCtx.fill();

      // CRT Scanline rasterization
      sCtx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      for (let y = 0; y < 1024; y += 6) {
        sCtx.fillRect(0, y, 1024, 3);
      }

      // Exact Image 2 Character rendered inside the CRT screen!
      const charY = cy + Math.sin(time * 3) * 12;

      // 1. Chunky orange/red sneakers underneath
      sCtx.save();
      const drawScreenShoe = (sx, sy) => {
        // Orange curved sole
        sCtx.fillStyle = '#f95738';
        sCtx.beginPath();
        sCtx.ellipse(sx, sy + 18, 55, 26, 0, 0, Math.PI * 2);
        sCtx.fill();
        sCtx.beginPath();
        sCtx.arc(sx + 35, sy + 10, 28, 0, Math.PI * 2);
        sCtx.fill();

        // Black leather body
        sCtx.fillStyle = '#18181b';
        sCtx.beginPath();
        sCtx.roundRect(sx - 45, sy - 25, 75, 45, 15);
        sCtx.fill();

        // White laces
        sCtx.fillStyle = '#ffffff';
        sCtx.fillRect(sx - 5, sy - 20, 20, 5);
        sCtx.fillRect(sx, sy - 10, 20, 5);
      };

      drawScreenShoe(cx - 100, charY + 220);
      drawScreenShoe(cx + 100, charY + 220);
      sCtx.restore();

      // 2. Black glossy helmet head with cat/devil horns & headphones
      sCtx.save();
      sCtx.translate(cx, charY);

      // Black helmet
      sCtx.fillStyle = '#09090b';
      sCtx.beginPath();
      sCtx.arc(0, -30, 160, 0, Math.PI * 2);
      sCtx.fill();
      sCtx.strokeStyle = '#27272a';
      sCtx.lineWidth = 6;
      sCtx.stroke();

      // Horns with red edges (Image 2)
      [-1, 1].forEach((side) => {
        sCtx.save();
        sCtx.translate(side * 85, -170);
        sCtx.rotate(side * 0.3);
        sCtx.fillStyle = '#09090b';
        sCtx.beginPath();
        sCtx.moveTo(-25, 0);
        sCtx.lineTo(0, -60);
        sCtx.lineTo(25, 0);
        sCtx.closePath();
        sCtx.fill();
        sCtx.strokeStyle = '#ef4444';
        sCtx.lineWidth = 6;
        sCtx.stroke();
        sCtx.restore();
      });

      // Headphones with red rings
      [-1, 1].forEach((side) => {
        sCtx.fillStyle = '#18181b';
        sCtx.beginPath();
        sCtx.ellipse(side * 160, -30, 25, 60, 0, 0, Math.PI * 2);
        sCtx.fill();
        sCtx.strokeStyle = '#ef4444';
        sCtx.lineWidth = 6;
        sCtx.stroke();
      });

      // Visor red brow arc
      sCtx.strokeStyle = '#ef4444';
      sCtx.lineWidth = 10;
      sCtx.beginPath();
      sCtx.arc(0, -40, 140, Math.PI * 1.15, Math.PI * 1.85);
      sCtx.stroke();

      // Bright green pixel eyes: ^ ^ (Exact match to Image 2!)
      sCtx.fillStyle = '#4ade80';
      sCtx.shadowColor = '#22c55e';
      sCtx.shadowBlur = 25;
      const px = 10;
      const drawEye = (ex, ey) => {
        sCtx.fillRect(ex, ey - px * 2, px, px);
        sCtx.fillRect(ex - px, ey - px, px, px);
        sCtx.fillRect(ex - px * 2, ey, px, px);
        sCtx.fillRect(ex - px * 3, ey + px, px, px);
        sCtx.fillRect(ex + px, ey - px, px, px);
        sCtx.fillRect(ex + px * 2, ey, px, px);
        sCtx.fillRect(ex + px * 3, ey + px, px, px);
      };
      drawEye(-70, -50);
      drawEye(70, -50);
      sCtx.shadowBlur = 0;

      // Shark teeth grin (Image 2)
      sCtx.fillStyle = '#18181b';
      sCtx.beginPath();
      sCtx.ellipse(0, 45, 90, 35, 0, 0, Math.PI);
      sCtx.fill();

      sCtx.fillStyle = '#ffffff';
      for (let t = 0; t < 7; t++) {
        const tx = -80 + t * 24;
        sCtx.beginPath();
        sCtx.moveTo(tx, 45);
        sCtx.lineTo(tx + 12, 68);
        sCtx.lineTo(tx + 24, 45);
        sCtx.closePath();
        sCtx.fill();
      }
      sCtx.restore();

      // Crack lines on screen if struck
      if (screenCracks >= 1) {
        sCtx.strokeStyle = '#ffffff';
        sCtx.lineWidth = 5;
        sCtx.shadowColor = '#4ade80';
        sCtx.shadowBlur = 25;

        const numRays = screenCracks === 1 ? 8 : 16;
        for (let r = 0; r < numRays; r++) {
          const angle = (Math.PI * 2 * r) / numRays + 0.15;
          sCtx.beginPath();
          sCtx.moveTo(cx, cy);
          let px = cx;
          let py = cy;
          for (let step = 0; step < 4; step++) {
            px += Math.cos(angle + (step % 2 === 0 ? 0.2 : -0.2)) * (70 + screenCracks * 45);
            py += Math.sin(angle + (step % 2 === 0 ? 0.2 : -0.2)) * (70 + screenCracks * 45);
            sCtx.lineTo(px, py);
          }
          sCtx.stroke();
        }

        // Green burst beam
        const beam = sCtx.createRadialGradient(cx, cy, 10, cx, cy, 180);
        beam.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        beam.addColorStop(0.4, 'rgba(74, 222, 128, 0.85)');
        beam.addColorStop(1, 'rgba(74, 222, 128, 0)');
        sCtx.fillStyle = beam;
        sCtx.beginPath();
        sCtx.arc(cx, cy, 180, 0, Math.PI * 2);
        sCtx.fill();
        sCtx.shadowBlur = 0;
      }
    };

    // Mouse Tracking Parallax
    const targetRot = { x: 0, y: 0 };
    const curRot = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRot.y = x * 0.16;
      targetRot.x = -y * 0.12;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Breakout Sequence (Mascot leaps out in 3D!)
    const executeBreakout = () => {
      setCharacterEscaped(true);
      screenMesh.visible = false;
      portalMat.opacity = 0.85;

      // Spawn 3D broken glass shards onto the red table
      const shardMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.9,
        transparent: true,
        roughness: 0.1,
        reflectivity: 0.9
      });

      for (let i = 0; i < 45; i++) {
        const sGeo = new THREE.ConeGeometry(0.12 + Math.random() * 0.16, 0.04, 3);
        const sMesh = new THREE.Mesh(sGeo, shardMat);
        sMesh.position.set(
          (Math.random() - 0.5) * 3.6,
          -1.45 + Math.random() * 0.05,
          1.8 + Math.random() * 1.6
        );
        sMesh.rotation.set(Math.PI / 2, (Math.random() - 0.5) * 3, Math.random() * 3);
        shardsGroup.add(sMesh);
      }

      // Mascot leaps OUT of the screen into the foreground (Image 2 in full 3D!)
      mascot.group.scale.set(0.68, 0.68, 0.68);
      mascot.group.position.set(0, 0.75, 1.28);

      const tl = gsap.timeline();
      // Leap forward and land on the left desk
      tl.to(mascot.group.position, {
        x: -1.6,
        y: -0.55,
        z: 2.7,
        duration: 1.1,
        ease: 'back.out(1.4)'
      });

      tl.to(
        mascot.group.rotation,
        {
          y: 0.35,
          z: 0.08,
          duration: 1.1,
          ease: 'power2.out'
        },
        0
      );

      // Camera pan
      tl.to(
        camera.position,
        {
          x: -0.6,
          y: 0.1,
          z: 6.0,
          duration: 1.4,
          ease: 'power2.out'
        },
        0
      );

      // Transition smoothly into Game after displaying breakout
      tl.to(
        camera.position,
        {
          z: 3.5,
          x: -1.6,
          y: -0.55,
          duration: 1.2,
          delay: 0.9,
          ease: 'power3.in',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        }
      );
    };

    // Click Raycasting
    let clicks = 0;
    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2();

    const handleScreenClick = (e) => {
      if (clicks >= 3) return;

      const rect = container.getBoundingClientRect();
      mouse2D.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2D.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse2D, camera);
      const hits = raycaster.intersectObjects([screenMesh, pcBodyMesh, bezelMesh]);

      if (hits.length > 0 || Math.hypot(mouse2D.x, mouse2D.y) < 0.6) {
        clicks += 1;
        setClickCount(clicks);
        screenCracks = clicks;

        const newBalloon = {
          id: Date.now(),
          type: clicks === 1 ? 'green' : 'yellow',
          text: clicks === 1 ? 'コンッ!!' : 'ガシャーン!!',
          x: e.clientX,
          y: e.clientY
        };
        setBalloons((prev) => [...prev, newBalloon]);

        // Monitor shake
        gsap.to(monitorGroup.position, {
          x: (Math.random() - 0.5) * 0.12 * clicks,
          y: (Math.random() - 0.5) * 0.12 * clicks,
          duration: 0.05,
          repeat: 3,
          yoyo: true,
          onComplete: () => monitorGroup.position.set(0, 0, 0)
        });

        if (clicks === 1) sound.knock1();
        else if (clicks === 2) sound.knock2();
        else if (clicks === 3) {
          sound.shatter();
          executeBreakout();
        }
      }
    };

    container.addEventListener('click', handleScreenClick);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Mouse Parallax
      curRot.x += (targetRot.x - curRot.x) * 0.06;
      curRot.y += (targetRot.y - curRot.y) * 0.06;
      rig.rotation.x = curRot.x;
      rig.rotation.y = curRot.y;

      // Update Screen Texture
      if (!characterEscaped) {
        renderCRTContent(time);
        screenTexture.needsUpdate = true;
      } else {
        // Animate 3D Mascot on desk
        mascot.update(time, false);
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
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleScreenClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#dc2626] overflow-hidden select-none cursor-pointer">
      {/* Red Poster Halftone Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#000000 1.2px, transparent 1.2px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Massive Background Poster Typography */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 pointer-events-none z-0">
        <div className="w-full flex justify-center">
          <h1 className="text-[14vw] font-black tracking-tighter text-[#f4efe6] leading-none uppercase font-display select-none">
            CELESTIUS
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <h2 className="text-[12vw] font-black tracking-tighter text-[#f4efe6] leading-none uppercase font-display select-none">
            SHOWREEL 2026
          </h2>
        </div>
      </div>

      {/* Top Left: Bubble Logo */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3 pointer-events-auto">
        <div className="px-4 py-1.5 rounded-2xl bg-black text-[#dc2626] font-black text-2xl tracking-tight shadow-md select-none transform -rotate-3 hover:rotate-0 transition-transform font-display">
          Celestius
        </div>
      </div>

      {/* Top Right: Buttons */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-3 pointer-events-auto">
        <button
          onClick={() => setLang(lang === 'EN' ? 'JA' : 'EN')}
          className="px-4 py-2 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase shadow-md hover:bg-slate-100 transition-colors"
        >
          {lang === 'EN' ? 'JA / EN' : 'EN / JA'}
        </button>

        <button
          onClick={() => {
            const muted = sound.toggleMute();
            setSoundOn(!muted);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase shadow-md hover:bg-slate-100 transition-colors"
        >
          <span className="flex gap-0.5 items-end h-3">
            <span className={`w-0.5 bg-black ${soundOn ? 'h-3 animate-pulse' : 'h-1'}`} />
            <span className={`w-0.5 bg-black ${soundOn ? 'h-2 animate-pulse' : 'h-1'}`} />
            <span className={`w-0.5 bg-black ${soundOn ? 'h-3.5 animate-pulse' : 'h-1'}`} />
          </span>
          <span>{soundOn ? 'SOUND ON' : 'SOUND OFF'}</span>
        </button>

        <button
          onClick={() => alert('Celestius Showreel 2026 // Interactive Experience')}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#dc2626] border-2 border-white text-white font-mono font-bold text-xs uppercase shadow-md hover:bg-[#b91c1c] transition-colors"
        >
          <Play size={12} fill="white" />
          <span>Watch the film</span>
        </button>
      </div>

      {/* Mid Left: 東京 / TOKYO / Barcode */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-white space-y-3 hidden md:block">
        <div className="text-3xl font-black tracking-widest font-display">東京</div>
        <div className="text-xs font-mono tracking-widest text-slate-200 uppercase">
          TOKYO // 2026
        </div>
        <div className="flex gap-1 items-end h-8 pt-2 opacity-90">
          {[4, 1, 3, 2, 5, 2, 4, 1, 6, 2, 3, 1, 4, 2].map((w, idx) => (
            <span key={idx} className="bg-white h-full" style={{ width: `${w * 2}px` }} />
          ))}
        </div>
      </div>

      {/* Mid Right: 2026.10 & Vertical Japanese Kana */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-white flex items-center gap-8 hidden md:flex">
        <div className="text-right space-y-1">
          <div className="text-4xl font-black font-display tracking-tight text-white">
            2026.10
          </div>
          <div className="text-xs font-mono text-slate-200">
            あなたの画面で<br />近日公開。
          </div>
        </div>
        <div
          className="text-lg font-black tracking-widest text-white select-none py-2 px-1 border-l-2 border-white/40"
          style={{ writingMode: 'vertical-rl' }}
        >
          ワクワクを、実験する。
        </div>
      </div>

      {/* 3D Canvas Layer */}
      <div ref={containerRef} className="absolute inset-0 z-10 w-full h-full" />

      {/* Pinned Callout HUD Line pointing to Screen Center (Image 1) */}
      {!characterEscaped && (
        <div className="absolute top-[48%] left-[28%] md:left-[35%] -translate-y-1/2 z-20 pointer-events-none flex items-center">
          <div className="px-5 py-3 rounded-2xl bg-black/95 text-white shadow-2xl border border-white/20 backdrop-blur-md flex flex-col gap-2 min-w-[210px]">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider">
              <div className="w-4 h-5 rounded-full border-2 border-white flex justify-center pt-1">
                <span className="w-0.5 h-1.5 bg-white rounded-full animate-bounce" />
              </div>
              <span>Knock on the screen</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((step) => (
                  <span
                    key={step}
                    className={`w-3 h-3 rounded-full border transition-all ${
                      clickCount >= step
                        ? 'bg-white border-white shadow-[0_0_8px_#ffffff]'
                        : 'bg-transparent border-slate-500'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-white">
                {3 - clickCount > 0 ? `${3 - clickCount} to go` : 'BREACHING!'}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-16 md:w-24 h-[1px] bg-white/70" />
            <div className="w-3 h-3 rounded-full border-2 border-white bg-transparent -ml-1.5" />
          </div>
        </div>
      )}

      {/* Spiky Comic Speech Balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
          style={{ left: b.x + 80, top: b.y - 60 }}
        >
          <div className="relative px-6 py-4 bg-[#22c55e] text-white border-4 border-black font-black text-3xl tracking-widest shadow-[6px_6px_0px_#000000] rotate-6">
            <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {b.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
