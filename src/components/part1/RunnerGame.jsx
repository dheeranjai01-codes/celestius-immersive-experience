import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';
import { drawMascot2D } from '../common/MascotCharacter';
import { FastForward, RotateCcw, Volume2, VolumeX, Sparkles, Trophy } from 'lucide-react';

export default function RunnerGame({ onComplete }) {
  const canvasRef = useRef(null);
  // Stages: 1 ('1-1 TOON'), 2 ('1-2 ASCII'), 3 ('1-3 8BIT'), 4 ('1-5 Y2K')
  const [currentLevel, setCurrentLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [streamProgress, setStreamProgress] = useState(32);

  // Restart or Retry game
  const restartRun = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Start 174 BPM chiptune / synth music
    sound.startBGM();

    // Game Physics & State
    const groundY = height * 0.72;
    let localCoins = 0;
    let localLevel = 1;
    let localGameOver = false;

    const player = {
      x: 160,
      y: groundY - 45,
      vy: 0,
      isGrounded: true,
      jumpForce: -13.5,
      gravity: 0.68,
      runFrame: 0,
      rotationAngle: 0,
      isBackflipping: false,
      flipSpeed: 0,
      expression: 'HAPPY'
    };

    // Parallax Skyline Buildings
    const buildings = [];
    for (let i = 0; i < 18; i++) {
      buildings.push({
        x: i * 160,
        w: 120 + Math.random() * 80,
        h: 180 + Math.random() * 240,
        colorIdx: i % 3
      });
    }

    // Road Stripes
    let roadOffset = 0;

    // Collectibles & Obstacles
    const gameItems = [];
    const spawnItem = (xPos) => {
      const isCoin = Math.random() > 0.35;
      gameItems.push({
        x: xPos,
        y: isCoin ? groundY - 70 - Math.random() * 50 : groundY - 32,
        isCoin,
        collected: false,
        size: isCoin ? 20 : 28
      });
    };

    for (let i = 0; i < 9; i++) {
      spawnItem(600 + i * 260);
    }

    // Jump logic with occasional backflip! (User request: "sometimes during jump make him backflip")
    const triggerJump = () => {
      if (localGameOver) {
        if (restartRun.current) restartRun.current();
        return;
      }

      if (player.isGrounded) {
        player.vy = player.jumpForce;
        player.isGrounded = false;

        // ~35% chance to execute backflip!
        const willBackflip = Math.random() < 0.38;
        if (willBackflip) {
          player.isBackflipping = true;
          player.rotationAngle = 0;
          player.flipSpeed = -(Math.PI * 2) / 24; // Full 360 degree spin
          sound.backflip();
        } else {
          player.isBackflipping = false;
          player.rotationAngle = 0;
          sound.jump();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        triggerJump();
      }
    };

    const handleCanvasClick = () => {
      triggerJump();
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleCanvasClick);

    // ASCII stream timer for Level 2
    const streamTimer = setInterval(() => {
      setStreamProgress((prev) => (prev >= 100 ? 100 : prev + 4));
    }, 350);

    // Advance Stage function
    const advanceStage = (nextLvl) => {
      localLevel = nextLvl;
      setCurrentLevel(nextLvl);
      sound.stageUp();
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    };

    // Loss trigger (User request: "make the loss more attempting to play again")
    const triggerLoss = () => {
      if (localGameOver) return;
      localGameOver = true;
      setIsGameOver(true);
      player.expression = 'DIZZY';
      player.vy = -8; // Bounce on defeat
      sound.hit();
      sound.gameOver();
      sound.stopBGM();
    };

    // Restart handler
    restartRun.current = () => {
      localGameOver = false;
      setIsGameOver(false);
      player.y = groundY - 45;
      player.vy = 0;
      player.isGrounded = true;
      player.rotationAngle = 0;
      player.isBackflipping = false;
      player.expression = 'HAPPY';

      // Reposition items
      gameItems.length = 0;
      for (let i = 0; i < 9; i++) {
        spawnItem(600 + i * 260);
      }

      sound.startBGM();
    };

    // Expose advanceToBee on window
    window.__advanceToBee = () => {
      sound.stopBGM();
      sound.victory();
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    };

    // Render loop
    let animId;

    const render = () => {
      animId = requestAnimationFrame(render);

      // Physics
      if (!localGameOver) {
        player.y += player.vy;
        player.vy += player.gravity;

        // Backflip rotation
        if (player.isBackflipping) {
          player.rotationAngle += player.flipSpeed;
          if (player.rotationAngle <= -Math.PI * 2) {
            player.rotationAngle = 0;
            player.isBackflipping = false;
          }
        }

        // Ground collision
        if (player.y >= groundY - 45) {
          player.y = groundY - 45;
          player.vy = 0;
          player.isGrounded = true;
          player.rotationAngle = 0;
          player.isBackflipping = false;
        }

        player.runFrame += 0.22;
        const gameSpeed = 7.0 + localLevel * 0.8;
        roadOffset = (roadOffset + gameSpeed) % 40;

        // Move buildings
        buildings.forEach((b) => {
          b.x -= gameSpeed * 0.45;
          if (b.x + b.w < 0) {
            b.x = width + Math.random() * 80;
          }
        });

        // Items and collisions
        for (let i = gameItems.length - 1; i >= 0; i--) {
          const item = gameItems[i];
          item.x -= gameSpeed;

          if (!item.collected && Math.abs(item.x - player.x) < 36 && Math.abs(item.y - player.y) < 38) {
            if (item.isCoin) {
              item.collected = true;
              localCoins += 1;
              setCoins(localCoins);
              setHighScore((prev) => Math.max(prev, localCoins));
              sound.coin();

              // Stage Progression
              if (localCoins === 6 && localLevel === 1) advanceStage(2); // -> 1-2 ASCII
              else if (localCoins === 14 && localLevel === 2) advanceStage(3); // -> 1-3 8BIT
              else if (localCoins === 24 && localLevel === 3) advanceStage(4); // -> 1-5 Y2K CG
              else if (localCoins >= 36) {
                // Completed all levels -> Bridge to Bee Story!
                cancelAnimationFrame(animId);
                window.__advanceToBee();
                return;
              }
            } else {
              // Hit obstacle
              triggerLoss();
            }
          }

          if (item.x < -60) {
            gameItems.splice(i, 1);
            spawnItem(width + Math.random() * 220);
          }
        }
      } else {
        // Defeat animation physics
        player.y += player.vy;
        player.vy += player.gravity;
        if (player.y >= groundY - 35) {
          player.y = groundY - 35;
          player.vy = 0;
        }
      }

      // =========================================================================
      // LEVEL RENDERERS
      // =========================================================================

      // LEVEL 1: "1-1 TOON" Hand-Drawn Sketch (Screenshot 4)
      if (localLevel === 1) {
        ctx.fillStyle = '#f8f6f0';
        ctx.fillRect(0, 0, width, height);

        // Pencil sketch buildings
        ctx.strokeStyle = '#262626';
        ctx.lineWidth = 1.8;
        ctx.fillStyle = '#eae5db';

        buildings.forEach((b) => {
          ctx.fillRect(b.x, groundY - b.h, b.w, b.h);
          ctx.strokeRect(b.x, groundY - b.h, b.w, b.h);

          ctx.fillStyle = '#8c8c88';
          for (let wy = groundY - b.h + 20; wy < groundY - 20; wy += 35) {
            for (let wx = b.x + 15; wx < b.x + b.w - 15; wx += 25) {
              ctx.fillRect(wx, wy, 14, 18);
            }
          }
          ctx.fillStyle = '#eae5db';
        });

        // Road
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, groundY, width, height - groundY);
        ctx.strokeStyle = '#262626';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();

        ctx.strokeStyle = '#6b7280';
        ctx.lineWidth = 4;
        ctx.setLineDash([25, 20]);
        ctx.beginPath();
        ctx.moveTo(-roadOffset, groundY + 40);
        ctx.lineTo(width, groundY + 40);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // LEVEL 2: "1-2 ASCII" Green CRT Terminal (Screenshot 5)
      else if (localLevel === 2) {
        ctx.fillStyle = '#020d06';
        ctx.fillRect(0, 0, width, height);

        // Green grid floor
        ctx.strokeStyle = 'rgba(74, 222, 128, 0.4)';
        ctx.lineWidth = 1.5;
        for (let x = -roadOffset * 2; x < width; x += 35) {
          ctx.beginPath();
          ctx.moveTo(x, groundY);
          ctx.lineTo(x - 80, height);
          ctx.stroke();
        }
        for (let y = groundY; y < height; y += 25) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Green ASCII Buildings
        ctx.fillStyle = '#22c55e';
        ctx.font = '12px "JetBrains Mono", monospace';
        const glyphs = '01#@$%&*+=|/';
        buildings.forEach((b) => {
          for (let by = groundY - b.h; by < groundY; by += 16) {
            for (let bx = b.x; bx < b.x + b.w; bx += 10) {
              const char = glyphs[Math.floor(Math.random() * glyphs.length)];
              ctx.fillText(char, bx, by);
            }
          }
        });

        // Scanlines
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        for (let y = 0; y < height; y += 4) {
          ctx.fillRect(0, y, width, 2);
        }

        // Bottom Terminal Console Log (Screenshot 5)
        ctx.save();
        ctx.fillStyle = '#4ade80';
        ctx.font = '14px "JetBrains Mono", monospace';
        ctx.fillText('C:\\CELESTIUS> run world_1-2.exe --render=ascii', 40, height - 120);
        ctx.fillText('[ OK ] glyph match 240x72 @ 8x15 px · 2x3 shape vectors', 40, height - 95);
        ctx.fillText('[ OK ] stride lock: 1 step / 8th @ 174 BPM', 40, height - 70);
        const bars = Math.floor(streamProgress / 7);
        const barStr = '█'.repeat(bars) + ' '.repeat(14 - bars);
        ctx.fillText(`[ .. ] celestius.exe streaming [${barStr}] ${streamProgress}%`, 40, height - 45);
        ctx.restore();
      }

      // LEVEL 3: "1-3 8BIT" (Exact from Image 4!)
      else if (localLevel === 3) {
        // Purple-blue retro 8-bit sky
        ctx.fillStyle = '#6366f1';
        ctx.fillRect(0, 0, width, height);

        // Purple and yellow pixel skyscrapers (Image 4)
        buildings.forEach((b) => {
          ctx.fillStyle = '#4338ca'; // Deep purple building
          ctx.fillRect(b.x, groundY - b.h, b.w, b.h);

          // Yellow glowing 8-bit windows (Image 4)
          ctx.fillStyle = '#fde047';
          for (let wy = groundY - b.h + 20; wy < groundY - 20; wy += 32) {
            for (let wx = b.x + 12; wx < b.x + b.w - 12; wx += 24) {
              if ((wx + wy) % 5 === 0) {
                ctx.fillRect(wx, wy, 16, 16);
              }
            }
          }
        });

        // Green Checkerboard Perspective Plane (Image 4)
        const checkH = 60;
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(0, groundY - checkH, width, checkH);

        ctx.fillStyle = '#16a34a';
        for (let cx = -roadOffset * 2; cx < width; cx += 40) {
          ctx.fillRect(cx, groundY - checkH, 20, checkH);
        }

        // Foreground Orange/Brown Brick Ledge (Image 4)
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(0, groundY, width, height - groundY);

        ctx.strokeStyle = '#9a3412';
        ctx.lineWidth = 3;
        for (let by = groundY; by < height; by += 24) {
          ctx.beginPath();
          ctx.moveTo(0, by);
          ctx.lineTo(width, by);
          ctx.stroke();

          const shift = (by / 24) % 2 === 0 ? 0 : 25;
          for (let bx = -roadOffset + shift; bx < width; bx += 50) {
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(bx, by + 24);
            ctx.stroke();
          }
        }

        // Center Banner: STAGE 3 // 8BIT (Image 4)
        if (localCoins < 18) {
          ctx.save();
          ctx.textAlign = 'center';
          ctx.font = '900 64px "JetBrains Mono", monospace';
          ctx.fillStyle = '#000000';
          ctx.fillText('STAGE 3', width / 2 + 4, height * 0.32 + 4);
          ctx.fillStyle = '#ffffff';
          ctx.fillText('STAGE 3', width / 2, height * 0.32);

          ctx.font = '900 36px "JetBrains Mono", monospace';
          ctx.fillStyle = '#fde047';
          ctx.fillText('8BIT', width / 2, height * 0.4);
          ctx.restore();
        }
      }

      // LEVEL 4: "1-5 Y2K CG" (Exact from Image 5!)
      else if (localLevel === 4) {
        // Deep purple cosmos nebula
        const spaceGrad = ctx.createLinearGradient(0, 0, 0, height);
        spaceGrad.addColorStop(0, '#0f0728');
        spaceGrad.addColorStop(0.5, '#2e1065');
        spaceGrad.addColorStop(1, '#09041a');
        ctx.fillStyle = spaceGrad;
        ctx.fillRect(0, 0, width, height);

        // 3D Earth planet in upper right (Image 5)
        const planetX = width * 0.78;
        const planetY = height * 0.25;
        const earthGrad = ctx.createRadialGradient(planetX - 25, planetY - 25, 10, planetX, planetY, 70);
        earthGrad.addColorStop(0, '#38bdf8');
        earthGrad.addColorStop(0.5, '#22c55e');
        earthGrad.addColorStop(0.85, '#1e3a8a');
        earthGrad.addColorStop(1, '#09041a');
        ctx.fillStyle = earthGrad;
        ctx.beginPath();
        ctx.arc(planetX, planetY, 70, 0, Math.PI * 2);
        ctx.fill();

        // Rainbow aura ring
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(planetX, planetY, 82, 0, Math.PI * 2);
        ctx.stroke();

        // Purple wireframe perspective grid
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 1.5;
        for (let x = -roadOffset * 2; x < width; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, groundY);
          ctx.lineTo(x - 120, height);
          ctx.stroke();
        }
        for (let y = groundY; y < height; y += 30) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        // Glowing RAINBOW Highway Strip with dashed white lines (Image 5)
        const rainbowGrad = ctx.createLinearGradient(0, groundY, 0, groundY + 35);
        rainbowGrad.addColorStop(0, '#ef4444');
        rainbowGrad.addColorStop(0.2, '#f97316');
        rainbowGrad.addColorStop(0.4, '#eab308');
        rainbowGrad.addColorStop(0.6, '#22c55e');
        rainbowGrad.addColorStop(0.8, '#3b82f6');
        rainbowGrad.addColorStop(1, '#a855f7');
        ctx.fillStyle = rainbowGrad;
        ctx.fillRect(0, groundY, width, 35);

        // Dashed white road line
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.setLineDash([20, 15]);
        ctx.beginPath();
        ctx.moveTo(-roadOffset, groundY + 17);
        ctx.lineTo(width, groundY + 17);
        ctx.stroke();
        ctx.setLineDash([]);

        // Center Title: STAGE 5 // Y2K CG (Image 5)
        if (localCoins < 30) {
          ctx.save();
          ctx.textAlign = 'center';
          ctx.font = '900 68px "JetBrains Mono", monospace';
          ctx.fillStyle = '#000000';
          ctx.fillText('STAGE 5', width / 2 + 4, height * 0.32 + 4);
          ctx.fillStyle = '#ffffff';
          ctx.fillText('STAGE 5', width / 2, height * 0.32);

          ctx.font = '900 36px "JetBrains Mono", monospace';
          ctx.fillStyle = '#fde047';
          ctx.fillText('Y2K CG', width / 2, height * 0.4);
          ctx.restore();
        }

        // Bottom raytrace telemetry (Image 5)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(
          'RENDERING... RAYTRACE 640x480 |||| CHROME.MAT ✦ BEST VIEWED AT 800x600 ✦ 174 BPM',
          width / 2,
          height - 25
        );
      }

      // Draw Coins & Obstacles
      gameItems.forEach((item) => {
        if (!item.collected && item.isCoin) {
          ctx.save();
          ctx.translate(item.x, item.y);
          const spin = Math.cos(player.runFrame * 2.5);
          ctx.scale(spin, 1);

          ctx.fillStyle = localLevel === 2 ? '#4ade80' : localLevel === 4 ? '#fef08a' : '#f59e0b';
          ctx.beginPath();
          ctx.arc(0, 0, item.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2.5;
          ctx.stroke();

          ctx.fillStyle = '#000000';
          ctx.font = 'bold 16px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('F', 0, 0);
          ctx.restore();
        } else if (!item.collected && !item.isCoin) {
          // Obstacle: Translucent holographic cube in Y2K or red block in others
          ctx.save();
          ctx.translate(item.x, item.y);
          if (localLevel === 4) {
            ctx.fillStyle = 'rgba(232, 121, 249, 0.45)';
            ctx.strokeStyle = '#f472b6';
            ctx.lineWidth = 2.5;
            ctx.fillRect(-18, -25, 36, 45);
            ctx.strokeRect(-18, -25, 36, 45);
          } else {
            ctx.fillStyle = '#dc2626';
            ctx.fillRect(-14, -20, 28, 40);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2.5;
            ctx.strokeRect(-14, -20, 28, 40);
          }
          ctx.restore();
        }
      });

      // Draw Exact Image 2 Mascot Character!
      const renderMode =
        localLevel === 2 ? 'ASCII' : localLevel === 3 ? '8BIT' : localLevel === 4 ? 'CHROME' : 'NORMAL';

      drawMascot2D(
        ctx,
        player.x,
        player.y,
        1.1,
        player.runFrame,
        player.isGrounded,
        player.rotationAngle,
        player.expression,
        renderMode
      );
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(streamTimer);
      sound.stopBGM();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleCanvasClick);
      delete window.__advanceToBee;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none flex flex-col justify-between">
      {/* Top Header Strip */}
      <div
        className={`w-full z-20 flex items-center justify-between px-6 py-2 border-b-2 border-black transition-colors duration-500 ${
          currentLevel === 1
            ? 'bg-[#f2ede4] text-black'
            : currentLevel === 2
            ? 'bg-[#020d06] text-[#4ade80] border-[#4ade80]/40'
            : currentLevel === 3
            ? 'bg-[#4338ca] text-white border-black'
            : 'bg-[#1e1035] text-white border-purple-500/50'
        }`}
      >
        <div className="flex items-center gap-8">
          <div className="px-3 py-1 rounded-xl bg-black text-white font-black text-lg tracking-tight font-display select-none">
            Celestius
          </div>

          <div className="flex items-center gap-6 font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
            <div>
              <span className="opacity-60">STAGE </span>
              <span>{currentLevel}/8</span>
            </div>

            <div className="text-amber-400 font-extrabold">
              <span className="opacity-60">WORLD </span>
              <span>
                {currentLevel === 1 && '1-1 TOON'}
                {currentLevel === 2 && '1-2 ASCII'}
                {currentLevel === 3 && '1-3 8BIT'}
                {currentLevel === 4 && '1-5 Y2K CG'}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span>COIN x{String(coins).padStart(3, '0')}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs font-bold">
          <div className="px-3 py-1 bg-black/40 border border-white/20 rounded text-amber-300">
            174 BPM ▶ BAR 58
          </div>

          <button
            onClick={() => {
              const muted = sound.toggleMute();
              setSoundOn(!muted);
            }}
            className="px-3 py-1 bg-white border border-black rounded text-black flex items-center gap-1"
          >
            {soundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span>{soundOn ? 'SOUND ON' : 'MUTED'}</span>
          </button>

          <button
            onClick={() => window.__advanceToBee && window.__advanceToBee()}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#dc2626] text-white font-mono font-bold text-xs uppercase shadow hover:bg-[#b91c1c] transition-colors"
          >
            <span>ADVANCE TO BEE STORY</span>
            <FastForward size={14} />
          </button>
        </div>
      </div>

      {/* Main Game Canvas */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />

        {/* Level 1 "Space / click to jump" Prompt Banner */}
        {currentLevel === 1 && coins < 2 && !isGameOver && (
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 pointer-events-none text-center">
            <div className="text-5xl md:text-7xl font-black text-black font-display drop-shadow-[4px_4px_0px_#ef4444]">
              READY?
            </div>
            <div className="mt-4 px-6 py-2.5 rounded-xl bg-[#eae5db] border-2 border-black text-black font-mono font-bold text-sm shadow-md inline-block">
              Space / click to jump (Backflips unlocked!)
            </div>
          </div>
        )}

        {/* Tempting Game Over / Replay Modal (User Request: "make the loss more attempting to play again") */}
        {isGameOver && (
          <div className="absolute inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
            <div className="max-w-md w-full bg-[#18181b] border-4 border-[#dc2626] rounded-3xl p-8 text-center text-white shadow-[0_0_50px_rgba(220,38,38,0.5)] transform animate-bounce-once">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                OUCH! DON'T GIVE UP
              </div>

              <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-2">
                CRASHED!
              </h3>
              <p className="text-slate-300 font-mono text-xs mb-6">
                The rhythm was blazing at 174 BPM. Time to reclaim your run!
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-left bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">COINS COLLECTED</div>
                  <div className="text-2xl font-black text-amber-400">{coins}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">HIGHEST STREAK</div>
                  <div className="text-2xl font-black text-cyan-400">{highScore}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => restartRun.current && restartRun.current()}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-black text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(245,195,68,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} />
                  <span>TRY AGAIN [PRESS SPACE]</span>
                </button>

                <button
                  onClick={() => window.__advanceToBee && window.__advanceToBee()}
                  className="w-full py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-slate-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>ADVANCE TO BEE STORY</span>
                  <FastForward size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
