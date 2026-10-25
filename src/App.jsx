import React, { useState } from 'react';
import HeartCursor from './components/cursor/HeartCursor';
import RedPosterScene from './components/part1/RedPosterScene';
import RunnerGame from './components/part1/RunnerGame';
import BeeScrollExperience from './components/part2/BeeScrollExperience';

export default function App() {
  // State machine: 'MONITOR' -> 'GAME' -> 'BEE_STORY'
  const [stage, setStage] = useState('MONITOR');
  const [flash, setFlash] = useState(false);

  // Transition from CRT Monitor Breakout to Runner Game
  const handleMonitorComplete = () => {
    setFlash(true);
    setTimeout(() => {
      setStage('GAME');
      setFlash(false);
    }, 600);
  };

  // Transition from Runner Game to Bee Story
  const handleGameComplete = () => {
    setFlash(true);
    setTimeout(() => {
      setStage('BEE_STORY');
      setFlash(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  // Reset to opening monitor
  const handleReplay = () => {
    setFlash(true);
    setTimeout(() => {
      setStage('MONITOR');
      setFlash(false);
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-[#dc2626] text-slate-100 font-body selection:bg-amber-400 selection:text-black overflow-hidden">
      {/* Reference 3: Heart-Shaped Cursor with Luminous Glowing Trail */}
      <HeartCursor />

      {/* Cinematic White/Gold Flash Overlay for Continuous Transitions */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-r from-amber-200 via-white to-amber-100 pointer-events-none transition-opacity duration-700 ${
          flash ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* =========================================================================
          PART 1 — INTRO, MONITOR BREAKING, AND GAME (Reference 1)
      ========================================================================= */}
      {stage === 'MONITOR' && (
        <RedPosterScene onComplete={handleMonitorComplete} />
      )}

      {stage === 'GAME' && (
        <RunnerGame onComplete={handleGameComplete} />
      )}

      {/* =========================================================================
          PART 2 — BEE STORY FROM THE GAME TO THE END (Reference 4: Reli WebGL)
      ========================================================================= */}
      {stage === 'BEE_STORY' && (
        <BeeScrollExperience onReplay={handleReplay} />
      )}
    </div>
  );
}
