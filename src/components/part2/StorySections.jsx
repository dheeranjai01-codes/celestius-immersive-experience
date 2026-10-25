import React from 'react';
import KineticHeading from '../typography/KineticHeading';
import DistortionImageCard from './DistortionImageCard';
import { cardImages } from '../../utils/cardImages';
import { ArrowDown, Sparkles, Feather, Eye, Compass, Hexagon, Heart } from 'lucide-react';

export default function StorySections({ onReplay }) {
  return (
    <div className="relative z-10 w-full text-slate-100">
      {/* =========================================================================
          HERO & CHAPTER I: THE EMERGENCE
          "Websites where filmed things become 3D you can touch. Scroll-driven, under glass"
      ========================================================================= */}
      <section
        id="section-emergence"
        className="min-h-screen relative flex flex-col justify-center items-center px-6 md:px-16 py-32"
      >
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles size={14} />
            <span>CHAPTER I // THE EMERGENCE UNDER GLASS</span>
          </div>

          <KineticHeading
            text="WHERE FILMED BEINGS EMERGE"
            tag="h2"
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase"
            accentIndices={[6, 7, 8, 9, 10, 11]}
          />

          <p className="mt-8 text-lg md:text-2xl font-light text-slate-300 max-w-2xl leading-relaxed">
            "You send footage or captured assets. I extract, optimize, and make them interactive in the browser. <span className="text-amber-400 font-medium">That is what the bee is.</span>"
          </p>

          <div className="mt-14 w-full max-w-xl">
            {/* The Glass Image Frame from which the 3D Bee lifts off */}
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-xl shadow-[0_30px_100px_rgba(245,195,68,0.2)]">
              <DistortionImageCard
                imageSrc={cardImages.emergence}
                chapter="01 // SPECIMEN NO. 26"
                title="Lifting Beyond the Flat Plane"
                subtitle="Captured as high-speed macro optics, reconstructed into an interactive spatial being."
                aspect="aspect-[16/10]"
                tags={['WebGL', 'Three.js', 'Chitin PBR']}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 text-[11px] font-mono text-amber-300 flex items-center gap-2 backdrop-blur-md shadow-xl whitespace-nowrap">
                <ArrowDown size={14} className="animate-bounce text-amber-400" />
                <span>SCROLL TO WITNESS THE FLIGHT PATH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER II: MACRO COSMOS
          Depth, layered perspective, and the sacred geometry of pollination
      ========================================================================= */}
      <section
        id="section-cosmos"
        className="min-h-screen relative flex items-center px-6 md:px-16 py-32"
      >
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
              <Hexagon size={13} />
              <span>CHAPTER II // MACRO COSMOS</span>
            </div>

            <KineticHeading
              text="HEXAGONAL ARCHITECTURE"
              tag="h2"
              className="text-3xl md:text-6xl font-black text-white leading-tight uppercase"
              accentIndices={[0, 1, 2, 3]}
            />

            <p className="text-slate-300 font-body text-base md:text-lg leading-relaxed">
              Every curve of a wing and honeycomb cell carries biological efficiency perfected over 100 million years. In the browser, this manifests as lightweight geometry, customized vertex deformation, and 60fps micro-motion.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                <div className="text-2xl font-display font-black text-amber-400">240 Hz</div>
                <div className="text-xs font-mono text-slate-400 mt-1">Wing Beat Frequency</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md">
                <div className="text-2xl font-display font-black text-cyan-400">0.02 MB</div>
                <div className="text-xs font-mono text-slate-400 mt-1">Procedural Memory Footprint</div>
              </div>
            </div>
          </div>

          {/* Right Column Layered Cards */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <DistortionImageCard
                imageSrc={cardImages.cosmos}
                chapter="02 // PRISMATIC FIELD"
                title="Sacred Tessellation"
                subtitle="Cellular precision translated into real-time WebGL spatial depth."
                aspect="aspect-[4/5]"
                tags={['Geometry', 'Optics']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER III: THE NECTAR FORGE
          Solar gold, liquid amber transformations, and dynamic energy synthesis
      ========================================================================= */}
      <section
        id="section-nectar"
        className="min-h-screen relative flex items-center px-6 md:px-16 py-32"
      >
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image Card */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <DistortionImageCard
                imageSrc={cardImages.nectar}
                chapter="03 // TRANSMUTATION"
                title="Liquid Amber Luminescence"
                subtitle="The alchemy of solar photons captured inside viscous golden matter."
                aspect="aspect-[4/5]"
                tags={['Fluid Shaders', 'Subsurface']}
              />
            </div>
          </div>

          {/* Right Column Editorial */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Feather size={13} />
              <span>CHAPTER III // THE NECTAR FORGE</span>
            </div>

            <KineticHeading
              text="ALCHYMIA SOLIS"
              tag="h2"
              className="text-3xl md:text-6xl font-black text-white leading-tight uppercase"
              accentIndices={[0, 8]}
            />

            <p className="text-slate-300 font-body text-base md:text-lg leading-relaxed">
              As the visitor navigates downward, the golden pollen trail thickens into streams of liquid light. Light refracts through the bee's translucent wings, throwing caustic ripples onto the surrounding editorial planes.
            </p>

            <blockquote className="p-5 rounded-2xl bg-amber-500/5 border-l-4 border-amber-400 text-amber-200/90 italic font-body text-sm leading-relaxed">
              "Under glass, motion is not merely decoration. It is the language through which the viewer touches the digital fabric."
            </blockquote>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER IV: QUANTUM SYMBIOSIS
          Interconnectedness between the digital visitor and the spatial creature
      ========================================================================= */}
      <section
        id="section-symbiosis"
        className="min-h-screen relative flex flex-col justify-center items-center px-6 md:px-16 py-32"
      >
        <div className="max-w-5xl w-full mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Eye size={14} />
            <span>CHAPTER IV // CHOREOGRAPHED DYNAMICS</span>
          </div>

          <KineticHeading
            text="SYMBIOSIS UNDER GLASS"
            tag="h2"
            className="text-4xl md:text-7xl font-black text-white leading-tight uppercase"
            accentIndices={[0, 9]}
          />

          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Every millimeter of scroll wheel travel translates directly into aerodynamic wing pitch, camera focal length shifts, and particle drift.
          </p>

          {/* Layered Triad of Cards showcasing depth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-xl hover:border-amber-400/40 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-mono font-bold mb-4">
                01
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Kinetic Tracking</h4>
              <p className="text-xs text-slate-400 font-body leading-relaxed">
                Bezier trajectories continuously calculated to follow the viewport center without snapping or jitter.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-xl hover:border-cyan-400/40 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 font-mono font-bold mb-4">
                02
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Iridescent Optics</h4>
              <p className="text-xs text-slate-400 font-body leading-relaxed">
                Thin-film physical wing shaders reacting in real-time to dual studio light sources and amber bounce.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-xl hover:border-fuchsia-400/40 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-fuchsia-400/10 flex items-center justify-center text-fuchsia-400 font-mono font-bold mb-4">
                03
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Golden Dispersion</h4>
              <p className="text-xs text-slate-400 font-body leading-relaxed">
                Over 350 persistent ambient pollen points responding to fluid turbulence and scroll acceleration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CHAPTER V: CELESTIAL HIVE & GRAND FINALE FOOTER
          The bee settles gracefully onto the glowing pedestal
      ========================================================================= */}
      <section
        id="section-hive"
        className="min-h-screen relative flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 border-t border-slate-800/80 bg-gradient-to-b from-[#03050a] via-[#050914] to-[#020306]"
      >
        <div className="max-w-4xl w-full mx-auto text-center space-y-6 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <Compass size={14} />
            <span>FINALE // RESTING PLACE</span>
          </div>

          <KineticHeading
            text="THE CELESTIAL HIVE"
            tag="h2"
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase"
            accentIndices={[4, 14]}
          />

          <p className="text-slate-300 text-base md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            The flight path converges. Here, the specimen rests atop the glowing basin, its wings settling into gentle organic stillness.
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onReplay}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-display font-black text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(245,195,68,0.4)] transition-all transform hover:scale-105 active:scale-95"
            >
              REPLAY FULL EXPERIENCE
            </button>
            <a
              href="#section-emergence"
              className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-slate-200 font-display font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all"
            >
              RETURN TO EMERGENCE
            </a>
          </div>
        </div>

        {/* Polished Editorial Footer */}
        <div className="max-w-6xl w-full mx-auto mt-28 pt-10 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white font-bold tracking-wider">CELESTIUS IMMERSIVE ENGINE</span>
            <span>// 2026 EDITION</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-amber-400 transition-colors cursor-pointer">THREE.JS</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">GSAP SCROLLTRIGGER</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">REACT 18</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">WEBGL SHADERS</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span>Crafted with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500" />
            <span>for WebGL Storytelling</span>
          </div>
        </div>
      </section>
    </div>
  );
}
