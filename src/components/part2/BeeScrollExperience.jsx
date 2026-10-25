import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createBee3D } from './Bee3D';
import { createPollenSystem } from './PollenParticles';
import StorySections from './StorySections';
import KineticHeading from '../typography/KineticHeading';
import { sound } from '../../utils/sound';

gsap.registerPlugin(ScrollTrigger);

export default function BeeScrollExperience({ onReplay }) {
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03050a, 0.025);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Ambient & Studio Lighting
    const ambient = new THREE.AmbientLight(0x222a3a, 1.8);
    scene.add(ambient);

    const sunLight = new THREE.DirectionalLight(0xffecd1, 2.5);
    sunLight.position.set(6, 8, 5);
    scene.add(sunLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.0, 15);
    rimLight.position.set(-6, -2, 2);
    scene.add(rimLight);

    const amberGlow = new THREE.PointLight(0xf5a524, 3.0, 12);
    amberGlow.position.set(0, 0, 4);
    scene.add(amberGlow);

    // 3D Bee Model
    const bee = createBee3D();
    scene.add(bee.group);

    // Initial Bee Position (Emergence frame)
    bee.group.position.set(0, -0.6, 2.0);
    bee.group.rotation.set(0.3, -0.2, 0.1);

    // Pollen Particle System
    const pollen = createPollenSystem(400);
    scene.add(pollen.points);

    // Mouse Tracking Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // GSAP ScrollTrigger Sequence for Continuous Bee Flight Path
    const ctx = gsap.context(() => {
      // 1. Chapter I: The Emergence (Bee lifts off from image into 3D space)
      const tlEmergence = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-emergence',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          onUpdate: (self) => {
            if (self.progress > 0.1 && self.progress < 0.3) {
              sound.hoverBee();
            }
          }
        }
      });

      tlEmergence.to(bee.group.position, {
        x: 1.5,
        y: 0.2,
        z: 3.8,
        ease: 'power2.inOut'
      }, 0);

      tlEmergence.to(bee.group.rotation, {
        x: 0.2,
        y: -0.6,
        z: 0.15,
        ease: 'power2.inOut'
      }, 0);

      // 2. Chapter II: Macro Cosmos (Bee travels to left column, banks gracefully)
      const tlCosmos = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-cosmos',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });

      tlCosmos.to(bee.group.position, {
        x: -1.6,
        y: 0.1,
        z: 3.5,
        ease: 'sine.inOut'
      }, 0);

      tlCosmos.to(bee.group.rotation, {
        x: -0.1,
        y: 0.75,
        z: -0.25,
        ease: 'sine.inOut'
      }, 0);

      // 3. Chapter III: The Nectar Forge (Crosses back to right, amber radiance)
      const tlNectar = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-nectar',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });

      tlNectar.to(bee.group.position, {
        x: 1.8,
        y: -0.2,
        z: 3.6,
        ease: 'power2.inOut'
      }, 0);

      tlNectar.to(bee.group.rotation, {
        x: 0.3,
        y: -0.8,
        z: 0.2,
        ease: 'power2.inOut'
      }, 0);

      tlNectar.to(amberGlow, {
        intensity: 5.5,
        ease: 'sine.inOut'
      }, 0);

      // 4. Chapter IV: Quantum Symbiosis (Centers and ascends)
      const tlSymbiosis = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-symbiosis',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });

      tlSymbiosis.to(bee.group.position, {
        x: 0,
        y: 0.4,
        z: 4.2,
        ease: 'power2.inOut'
      }, 0);

      tlSymbiosis.to(bee.group.rotation, {
        x: 0.1,
        y: Math.PI * 2,
        z: 0,
        ease: 'power2.inOut'
      }, 0);

      // 5. Chapter V: Celestial Hive & Finale (Lands gracefully at pedestal)
      const tlHive = gsap.timeline({
        scrollTrigger: {
          trigger: '#section-hive',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5
        }
      });

      tlHive.to(bee.group.position, {
        x: 0,
        y: -1.2,
        z: 4.5,
        ease: 'power2.out'
      }, 0);

      tlHive.to(bee.group.rotation, {
        x: 0.45,
        y: Math.PI * 2 + 0.15,
        z: 0,
        ease: 'power2.out'
      }, 0);
    });

    // Render & Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.6;
      camera.position.y = mouse.y * 0.4;
      camera.lookAt(0, 0, 0);

      // Update 3D Bee flutter & breathing
      bee.update(elapsedTime, 65.0);

      // Light follows bee
      amberGlow.position.x = bee.group.position.x;
      amberGlow.position.y = bee.group.position.y;
      amberGlow.position.z = bee.group.position.z + 0.5;

      // Update pollen particle system
      pollen.update(elapsedTime);
      pollen.emitAround(bee.group.position, 1);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      ctx.revert();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#03050a] overflow-x-hidden">
      {/* Sticky Fixed Three.js WebGL Canvas Layer */}
      <div
        ref={canvasContainerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      />

      {/* Floating Header */}
      <header className="fixed top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-4">
          <KineticHeading
            text="CELESTIUS"
            tag="h1"
            className="text-2xl font-black text-white tracking-widest"
            accentIndices={[0, 4]}
          />
          <span className="hidden md:inline-block text-xs font-mono text-amber-400/80 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 backdrop-blur-md">
            RELI WEBGL CONTINUUM
          </span>
        </div>

        <div className="pointer-events-auto">
          <button
            onClick={onReplay}
            className="px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-mono text-xs tracking-wider backdrop-blur-md transition-all hover:border-amber-400/40"
          >
            RETURN TO MONITOR
          </button>
        </div>
      </header>

      {/* Storytelling DOM Content Layer */}
      <StorySections onReplay={onReplay} />
    </div>
  );
}
