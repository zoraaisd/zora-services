import React from "react";
import { Link } from "react-router-dom";
import FloatingLines from "../FloatingLines";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
      <style>{`
        @keyframes heroRise {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            text-shadow:
              0 0 18px rgba(125, 211, 252, 0.26),
              0 0 34px rgba(199, 210, 254, 0.14);
          }
          50% {
            text-shadow:
              0 0 28px rgba(125, 211, 252, 0.42),
              0 0 54px rgba(199, 210, 254, 0.22);
          }
        }
      `}</style>

      {/* ✅ FULLSCREEN ANIMATION LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full will-change-transform">
          <FloatingLines
            linesGradient={["#FFB3FB", "#BFD1FF", "#FFB3FB"]}
            enabledWaves={["top", "bottom"]}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>

        {/* soft overlay */}
        <div className="absolute inset-0 bg-[#140a28]/40 pointer-events-none" />
      </div>

      <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
        <div
          className="w-[980px] h-[540px] blur-[150px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(42,237,243,0.14), transparent 65%)",
          }}
        />
      </div>

      {/* ✅ CONTENT */}
      <div className="relative z-20 px-6 max-w-6xl mx-auto">
        {/* ✅ HEADING */}
        <h1
          className="
            hero-heading mx-auto
            max-w-[90vw] sm:max-w-[18ch]
            text-[1.95rem] sm:text-5xl md:text-6xl lg:text-7xl
            mt-20 sm:mt-10 md:mt-12
            leading-[1.5] sm:leading-[1.08] md:leading-[1.04]
            font-serif font-semibold text-center tracking-tight
            text-slate-100
            transition-all ease-in-out
            sm:hover:scale-[1.02] sm:hover:brightness-110
            will-change-transform
          "
          style={{
            animation: "heroRise 700ms ease-out, heroGlow 2.8s ease-in-out infinite",
            transitionDuration: "400ms",
          }}
        >
          Redefining Intelligence
        </h1>

        <p className="mt-8 text-white/80 text-xl max-w-4xl mx-auto leading-relaxed">
          Zora Global AI engineers intelligent digital ecosystems that merge
          artificial intelligence, cloud infrastructure, and enterprise strategy
          into one seamless transformation platform.
        </p>

        {/* ✅ BUTTON WITH WHITE OUTER SURROUND */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <Link
            to="/services"
            className="relative px-7 py-3 rounded-2xl font-semibold group overflow-hidden"
          >
            {/* glow */}
            <span
              className="absolute inset-0 blur-lg opacity-60 group-hover:opacity-95 transition"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(99,102,241,0.9), rgba(147,51,234,0.9))",
              }}
            />

            {/* gradient button */}
            <span
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6 0%, #6366f1 55%, #9333ea 100%)",
              }}
            />

            {/* text */}
            <span className="relative z-10 text-white">Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
