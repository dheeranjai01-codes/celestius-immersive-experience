import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { createCRTTexture } from './CRTShaderScreen';
import { sound } from '../../utils/sound';
import KineticHeading from '../typography/KineticHeading';
import { MousePointerClick, Volume2, VolumeX } from 'lucide-react';

export default function MonitorScene({ onComplete }) {
  const containerRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);
  const [stickers, setStickers] = useState([]);
  const [isBroken, setIsBroken] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0x202838, 1.2);
    scene.add(ambientLight);

    // Warm key spot light
    const spotLight = new THREE.SpotLight(0xfff1d6, 3.5);
    spotLight.position.set(5, 7, 6);
    spotLight.angle = 0.6;
    spotLight.penumbra = 0.8;
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Cool Cyan Rim light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    rimLight.position.set(-6, 3, -4);
    scene.add(rimLight);

    // Amber bounce light
    const bounceLight = new THREE.PointLight(0xf5c344, 1.5, 12);
    bounceLight.position.set(0, -3, 2);
    scene.add(bounceLight);

    // Monitor Group
    const monitorGroup = new THREE.Group();
    scene.add(monitorGroup);

    // CRT Bezel / Chassis Material
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x22262d,
      roughness: 0.55,
      metalness: 0.15,
      envMapIntensity: 0.8
    });

    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      roughness: 0.7,
      metalness: 0.2
    });

    // Monitor Body Box with rounded bevel look
    const bodyGeo = new THREE.BoxGeometry(4.2, 3.4, 2.8);
    const bodyMesh = new THREE.Mesh(bodyGeo, chassisMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    monitorGroup.add(bodyMesh);

    // Bezel Front Frame
    const frameGeo = new THREE.BoxGeometry(4.3, 3.5, 0.3);
    const frameMesh = new THREE.Mesh(frameGeo, chassisMat);
    frameMesh.position.set(0, 0, 1.35);
    monitorGroup.add(frameMesh);

    // Monitor Base / Stand
    const neckGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.6, 16);
    const neckMesh = new THREE.Mesh(neckGeo, darkAccentMat);
    neckMesh.position.set(0, -2.0, 0);
    monitorGroup.add(neckMesh);

    const baseGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.25, 24);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.set(0, -2.35, 0);
    baseMesh.receiveShadow = true;
    monitorGroup.add(baseMesh);

    // Studio Table Floor
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      roughness: 0.8,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.48;
    floor.receiveShadow = true;
    scene.add(floor);

    // Power LED
    const ledGeo = new THREE.SphereGeometry(0.04, 12, 12);
    const ledMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const ledMesh = new THREE.Mesh(ledGeo, ledMat);
    ledMesh.position.set(1.8, -1.5, 1.51);
    monitorGroup.add(ledMesh);

    // CRT Screen with Curved Surface
    const screenWidth = 3.6;
    const screenHeight = 2.8;
    const screenGeo = new THREE.PlaneGeometry(screenWidth, screenHeight, 32, 32);

    // Curve screen vertices outwards to mimic convex CRT bulb
    const pos = screenGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const r2 = (u * u) / 4 + (v * v) / 3;
      const zCurve = -Math.sin(r2 * 0.25) * 0.22;
      pos.setZ(i, zCurve);
    }
    screenGeo.computeVertexNormals();

    // Canvas Texture for CRT
    const crt = createCRTTexture(1024, 1024);
    const screenTexture = new THREE.CanvasTexture(crt.canvas);
    screenTexture.anisotropy = 8;

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      transparent: true
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 1.51);
    monitorGroup.add(screenMesh);

    // Raycaster for click coordinates on screen
    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2();

    // Mouse Tracking Parallax
    const targetRot = { x: 0, y: 0 };
    const curRot = { x: 0, y: 0 };
    let glitchIntensity = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouse2D.x = x;
      mouse2D.y = y;

      targetRot.y = x * 0.28;
      targetRot.x = -y * 0.18;
    };

    // Shards Group for 3rd click explosion
    const shardsGroup = new THREE.Group();
    scene.add(shardsGroup);
    let shardsData = [];

    // Trigger Screen Breaking Explosion
    const triggerShatterExplosion = () => {
      setIsBroken(true);
      screenMesh.visible = false; // Hide intact screen

      // Generate 160 3D glass shards
      const shardMat = new THREE.MeshPhysicalMaterial({
        color: 0x90e0ef,
        transmission: 0.85,
        opacity: 0.9,
        transparent: true,
        roughness: 0.1,
        ior: 1.52,
        reflectivity: 0.9,
        side: THREE.DoubleSide
      });

      const cols = 14;
      const rows = 12;
      const dx = screenWidth / cols;
      const dy = screenHeight / rows;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x0 = -screenWidth / 2 + c * dx;
          const y0 = -screenHeight / 2 + r * dy;

          // Create triangular shard geometry
          const geom = new THREE.BufferGeometry();
          const p1 = [x0 + (Math.random() - 0.5) * 0.05, y0 + (Math.random() - 0.5) * 0.05, 0];
          const p2 = [x0 + dx + (Math.random() - 0.5) * 0.05, y0 + (Math.random() - 0.5) * 0.05, 0];
          const p3 = [x0 + dx * 0.5, y0 + dy + (Math.random() - 0.5) * 0.05, 0];
          const vertices = new Float32Array([...p1, ...p2, ...p3]);
          geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          geom.computeVertexNormals();

          const shard = new THREE.Mesh(geom, shardMat);
          shard.position.set(0, 0, 1.51);

          // Calculate burst velocity away from screen center + forward towards camera
          const dirX = (x0 / screenWidth) * 3 + (Math.random() - 0.5) * 2;
          const dirY = (y0 / screenHeight) * 3 + (Math.random() - 0.5) * 2;
          const dirZ = Math.random() * 5 + 3.5;

          shardsData.push({
            mesh: shard,
            vx: dirX * 0.08,
            vy: dirY * 0.08,
            vz: dirZ * 0.08,
            rotX: (Math.random() - 0.5) * 0.3,
            rotY: (Math.random() - 0.5) * 0.3,
            rotZ: (Math.random() - 0.5) * 0.3
          });

          shardsGroup.add(shard);
        }
      }

      // Camera dive through the shattered frame
      gsap.to(camera.position, {
        z: 1.6,
        duration: 1.4,
        ease: 'power3.in',
        onUpdate: () => {
          camera.lookAt(0, 0, 1.5);
        },
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // Shake monitor chassis violently
      gsap.to(monitorGroup.rotation, {
        z: 0.15,
        duration: 0.08,
        repeat: 7,
        yoyo: true,
        ease: 'none'
      });
    };

    // Screen Click Handler
    let currentClicks = 0;
    const onScreenClick = (e) => {
      if (currentClicks >= 3) return;

      const rect = container.getBoundingClientRect();
      mouse2D.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2D.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse2D, camera);
      const intersects = raycaster.intersectObject(screenMesh);

      // Even if clicked slightly outside the screen mesh, register if clicking on monitor
      const monitorIntersects = raycaster.intersectObjects([screenMesh, frameMesh, bodyMesh]);

      if (intersects.length > 0 || monitorIntersects.length > 0) {
        currentClicks += 1;
        setClickCount(currentClicks);

        let uvU = 0.5;
        let uvV = 0.5;
        if (intersects.length > 0 && intersects[0].uv) {
          uvU = intersects[0].uv.x;
          uvV = intersects[0].uv.y;
        } else {
          uvU = 0.5 + (Math.random() - 0.5) * 0.3;
          uvV = 0.5 + (Math.random() - 0.5) * 0.3;
        }

        // Add crack to CRT texture
        crt.addCrack(uvU, 1 - uvV, currentClicks);
        screenTexture.needsUpdate = true;

        // Screen glitch effect
        glitchIntensity = currentClicks * 1.8;
        gsap.to(monitorGroup.position, {
          x: (Math.random() - 0.5) * 0.15 * currentClicks,
          y: (Math.random() - 0.5) * 0.15 * currentClicks,
          duration: 0.06,
          repeat: 3,
          yoyo: true,
          onComplete: () => {
            monitorGroup.position.set(0, 0, 0);
          }
        });

        // Add Comic Sound Sticker
        const stickerTexts = ['TAP!', 'CRACK!', 'SHATTER!'];
        const newSticker = {
          id: Date.now(),
          text: stickerTexts[currentClicks - 1],
          x: e.clientX,
          y: e.clientY,
          rotation: (Math.random() - 0.5) * 30
        };
        setStickers((prev) => [...prev, newSticker]);

        // Trigger Audio
        if (currentClicks === 1) sound.knock1();
        else if (currentClicks === 2) sound.knock2();
        else if (currentClicks === 3) {
          sound.shatter();
          triggerShatterExplosion();
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('click', onScreenClick);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth mouse rotation lerp
      curRot.x += (targetRot.x - curRot.x) * 0.06;
      curRot.y += (targetRot.y - curRot.y) * 0.06;
      monitorGroup.rotation.x = curRot.x;
      monitorGroup.rotation.y = curRot.y;

      // Update CRT Screen canvas
      if (!isBroken) {
        if (glitchIntensity > 0) glitchIntensity *= 0.92;
        crt.update(glitchIntensity);
        screenTexture.needsUpdate = true;
      }

      // Update exploding shards
      if (shardsData.length > 0) {
        shardsData.forEach((s) => {
          s.mesh.position.x += s.vx;
          s.mesh.position.y += s.vy;
          s.mesh.position.z += s.vz;
          s.mesh.rotation.x += s.rotX;
          s.mesh.rotation.y += s.rotY;
          s.mesh.rotation.z += s.rotZ;
        });
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
      container.removeEventListener('click', onScreenClick);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#03050a] overflow-hidden select-none cursor-pointer">
      {/* 3D Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />

      {/* Top Navigation / Brand Overlay */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <KineticHeading
            text="CELESTIUS"
            tag="h1"
            className="text-2xl md:text-3xl font-extrabold text-white tracking-widest"
            accentIndices={[0, 4]}
          />
          <p className="text-xs font-mono text-slate-400 tracking-wider mt-1">
            EXPERIENCE FUNTECH CREATIVITY ARCHIVE // 2026
          </p>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => {
              const muted = sound.toggleMute();
              setIsMuted(muted);
            }}
            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-all backdrop-blur-md"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

      {/* Interactive Click Counter HUD at Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-slate-700/70 backdrop-blur-md shadow-2xl">
          <MousePointerClick className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
            {clickCount === 0 && 'CLICK THE MONITOR SCREEN TO BREACH'}
            {clickCount === 1 && 'FIRST IMPACT CONFIRMED — STRIKE AGAIN!'}
            {clickCount === 2 && 'CRITICAL STRUCTURAL FAILURE — FINAL STRIKE!'}
            {clickCount >= 3 && 'BREACH IN PROGRESS...'}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {[1, 2, 3].map((step) => (
              <span
                key={step}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  clickCount >= step
                    ? 'bg-amber-400 shadow-[0_0_10px_#f5c344]'
                    : 'bg-slate-700 border border-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-[11px] font-mono text-slate-500">
          Move cursor to orbit studio camera // 3 clicks to shatter
        </p>
      </div>

      {/* Pop-up Comic Sound Stickers */}
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ping-once"
          style={{
            left: sticker.x,
            top: sticker.y,
            transform: `translate(-50%, -50%) rotate(${sticker.rotation}deg)`
          }}
        >
          <div className="px-5 py-2.5 rounded-xl bg-amber-400 text-black font-display font-black text-2xl md:text-3xl shadow-[0_0_30px_rgba(245,195,68,0.8)] border-2 border-white tracking-wider animate-bounce">
            {sticker.text}
          </div>
        </div>
      ))}
    </div>
  );
}
