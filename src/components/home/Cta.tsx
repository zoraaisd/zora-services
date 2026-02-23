import React from "react";
import { Link } from "react-router-dom";

const Cta: React.FC = () => {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden isolate border-b border-blue-900/40">
      {/* ✅ Background Image (save as: public/backgrounds/cta-bg.png) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/cta-bg.png')",
        }}
      />

      {/* ✅ Light dark overlay (keeps image visible, not dull) */}
      <div className="absolute inset-0 z-[1] bg-[#020010]/45" />

      {/* ✅ Highlight boost (brings back glow from image) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      {/* ✅ Brand color tint overlay (your colors: #7d4596 and #2aedf3) */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 25%, rgba(125,69,150,0.45), transparent 58%)," +
            "radial-gradient(circle at 80% 55%, rgba(42,237,243,0.32), transparent 60%)," +
            "linear-gradient(to bottom, rgba(2,0,16,0.10), rgba(2,0,16,0.55))",
        }}
      />

      {/* ✅ Slight depth (very small blur) */}
      <div className="absolute inset-0 z-[4] pointer-events-none backdrop-blur-[0.6px]" />

      {/* ✅ Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-300 mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          Ready to Build Your Competitive Edge?
        </h2>

        <p className="text-gray-200/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tailored to your data. Enterprise-grade security. Measurable ROI from
          day one.
        </p>

        <Link
          to="/services"
          className="
            inline-flex items-center justify-center
            px-12 md:px-14 py-5 md:py-6
            bg-blue-700
            rounded-2xl
            font-bold
            text-white
            shadow-[0_0_40px_rgba(37,99,235,0.55)]
            hover:bg-blue-600
            hover:shadow-[0_0_70px_rgba(37,99,235,0.85)]
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          Explore Our Solutions
        </Link>
      </div>
    </section>
  );
};

export default Cta;