// src/components/services/ServicesHero.tsx
import React from "react";
import ColorBends from "../ColorBends";

const ServicesHero: React.FC = () => {
  return (
    <section
      className="
        relative left-1/2 w-screen -translate-x-1/2
        min-h-[50svh] sm:min-h-[85svh] md:min-h-[100svh]
        overflow-hidden
        -mt-20
      "
    >
      <div className="absolute inset-0 z-0">
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={["#ab0d8e", "#3b38cc", "#113e97"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-[#020010]/35" />

      {/* ✅ reduced top & bottom padding for mobile + removed extra min-h on inner wrapper */}
      <div className="relative z-10 flex items-center justify-center px-9 md:pt-48 pt-48 pb-12 sm:pt-14 sm:pb-12 md:pt-20 md:pb-0">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4 sm:mb-7 text-white">
            Advanced Service Architecture
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg md:text-xl leading-relaxed">
            Enterprise-grade solutions engineered for high-performance,
            scalable, and secure digital ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;