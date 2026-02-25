// src/components/home/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LightRays from "../LightRays";

const Hero: React.FC = () => {
  return (
    <section
  className="
    relative w-full overflow-hidden isolate box-border
    h-[80svh] sm:h-[92svh] md:h-[100svh]
    pt-0 sm:pt-[var(--nav-h,0px)]
  "
>
      {/* Border line WITHOUT adding height (prevents 1px overflow scroll) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-blue-900/40" />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#d40de3"
          raysSpeed={2.2}
          lightSpread={2.3}
          rayLength={5.0}
          pulsating
          fadeDistance={2.2}
          saturation={1.7}
          followMouse
          mouseInfluence={0.25}
          noiseAmount={0.18}
          distortion={0.1}
        />
      </div>

      {/* ✅ CONTENT WRAPPER */}
      <div
        className="
          relative z-10 w-full
          h-[calc(100svh-var(--nav-h,0px))] md:h-[calc(100svh-var(--nav-h,0px))]
          flex items-center justify-center
          px-0
        "
      >
        <div className="max-w-7xl mx-auto px-6 text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-black tracking-tight leading-tight
              text-4xl sm:text-6xl md:text-7xl
            "
          >
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Built On Trust. Driven By Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg"
          >
            Designed with reliability at the core and flexibility for the future,
            our technology evolves alongside your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10"
          >
            <Link
              to="/book-appointment"
              className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 font-semibold shadow-lg hover:scale-105 transition"
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