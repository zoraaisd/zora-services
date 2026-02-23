// src/components/home/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LightRays from "../LightRays";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden border-b border-blue-900/40 isolate">
      {/* ✅ Animated background layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#d40de3"
            raysSpeed={2.2}          // ✅ increased (was too subtle)
            lightSpread={2.3}
            rayLength={5.0}
            pulsating={true}         // ✅ ON (adds visible motion)
            fadeDistance={2.2}
            saturation={1.7}
            followMouse={true}       // ✅ ON (test + interactive motion)
            mouseInfluence={0.25}
            noiseAmount={0.18}       // ✅ small noise = organic movement
            distortion={0.10}        // ✅ slight distortion = alive effect
          />
        </div>
      </div>

      {/* ✅ Softer overlay so motion stays visible */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#020010]/25 via-[#020010]/20 to-[#020010]/45" />

      {/* ✅ Static glows */}
      <div className="pointer-events-none absolute -top-28 left-8 w-[420px] h-[420px] bg-purple-600/15 blur-[70px] rounded-full z-[1]" />
      <div className="pointer-events-none absolute -bottom-32 right-10 w-[520px] h-[520px] bg-blue-600/12 blur-[80px] rounded-full z-[1]" />

      {/* ✅ Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-24">
        <div className="max-w-5xl text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              font-black tracking-tight text-white leading-[0.95]
              text-[clamp(2.6rem,6vw,6.2rem)]
            "
          >
            Built on Trust.
            <br />
            <span className="text-blue-500">Driven by Intelligence.</span>
            <br />
            Unfair Advantage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-7 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Designed with reliability at the core and flexibility for the
            future, our technology evolves alongside your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex justify-center"
          >
            <Link
              to="/book-appointment"
              className="
                inline-flex items-center justify-center
                px-10 md:px-14 py-4 md:py-5
                bg-blue-600 rounded-2xl
                font-semibold text-base md:text-lg text-white
                shadow-[0_0_40px_rgba(37,99,235,0.6)]
                hover:shadow-[0_0_70px_rgba(37,99,235,0.9)]
                hover:scale-105
                transition-all duration-300
              "
            >
              Start Strategic Discussion
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;