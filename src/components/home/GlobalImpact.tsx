// src/components/home/GlobalImpact.tsx
import React from "react";

const GlobalImpact: React.FC = () => {
  const impactMetrics = [
    { id: 1, number: "120+", label: "Clients Worldwide", icon: "👥" },
    { id: 2, number: "3+", label: "Years of Innovation", icon: "🏛️" },
    { id: 3, number: "80+", label: "Projects Successfully Delivered", icon: "📘" },
    { id: 4, number: "25+", label: "Global Strategic Collaborations", icon: "🌐" },
  ];

  const valuePoints = [
    "Enterprise-grade architecture designed for scalability, resilience, and security.",
    "AI-powered automation and analytics that improve operational efficiency and accelerate growth.",
    "Cloud-native and future-ready platforms enabling global collaboration and digital expansion.",
  ];

  return (
    <section
      className="
        relative bg-[#020010] text-white overflow-hidden isolate
        mt-0
        pt-2 sm:pt-4 md:pt-6
        pb-20 sm:pb-24 md:pb-28
      "
    >
      {/* ================= BACKGROUND (CLIPPED + SAFE) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(67,56,202,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.3),transparent_50%)]" />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-indigo-700/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-purple-800/30 rounded-full blur-[140px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ✅ LABEL */}
        <div className="mb-10 lg:mb-12 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-indigo-900/40 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
            Our Global Impact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Intelligent Digital Transformation
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              Zora Global Technologies Pvt Ltd delivers AI-driven software,
              enterprise platforms, and scalable digital transformation solutions
              powered by intelligent automation frameworks enabling rapid enterprise
              innovation.
            </p>

            <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed font-semibold">
              Zora Global AI Technologies provides{" "}
              <span className="text-white font-extrabold">48+ services</span> within{" "}
              <span className="text-white font-extrabold">48 hours</span> using{" "}
              <span className="text-white font-extrabold">AI automation</span>.
            </p>

            <div className="mt-7 space-y-4">
              {valuePoints.map((text, idx) => (
                <p key={idx} className="text-gray-300 text-base leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col gap-6">
            {/* ✅ More Manovate-like spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {impactMetrics.map((metric) => (
                <div key={metric.id} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition" />

                  {/* ✅ BOX SIZE ADJUSTED LIKE IMAGE (TALLER + AIRY) */}
                  <div
                    className="
                      relative bg-white/95 text-slate-900 border border-white/60
                      rounded-2xl
                      p-7 sm:p-8
                      min-h-[220px] sm:min-h-[240px]
                      flex flex-col
                      shadow-[0_12px_35px_rgba(0,0,0,0.3)]
                    "
                  >
                    {/* ✅ Bigger icon box */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/15 flex items-center justify-center text-2xl">
                      {metric.icon}
                    </div>

                    {/* ✅ Number placement like image */}
                    <p className="mt-7 text-4xl font-black text-slate-900 leading-none">
                      {metric.number}
                    </p>

                    {/* ✅ Label spacing like image */}
                    <h3 className="mt-3 text-base font-medium text-slate-600 leading-snug">
                      {metric.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* GRAPH CARD (kept same design, just spacing consistent) */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition" />

              <div className="relative bg-white/95 text-slate-900 border border-white/60 rounded-xl p-5 sm:p-6 shadow-[0_12px_35px_rgba(0,0,0,0.3)] overflow-hidden">
                <h3 className="text-base sm:text-lg font-extrabold">
                  Average Client Growth
                </h3>

                <div className="mt-3 inline-flex px-4 py-1.5 rounded-xl font-black text-white text-lg bg-gradient-to-b from-blue-600 to-blue-700">
                  3×
                </div>

                <div className="relative mt-5">
                  <svg className="w-full h-[95px] sm:h-[110px]" viewBox="0 0 640 240" fill="none">
                    <defs>
                      <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M70 165 L165 140 L255 155 L355 115 L455 130 L565 60 L565 220 L70 220 Z"
                      fill="url(#areaFill)"
                    />
                    <path
                      d="M70 165 L165 140 L255 155 L355 115 L455 130 L565 60"
                      stroke="#2563eb"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="mt-3 text-slate-600 text-xs sm:text-sm">
                    Typical outcomes within{" "}
                    <span className="font-semibold text-slate-900">12–18 months</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;