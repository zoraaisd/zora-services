import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#020010] text-white overflow-hidden">

      {/* ===== ULTRA DARK BACKGROUND SYSTEM ===== */}

      {/* Deep Gradient Core */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(67,56,202,0.5),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.45),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(37,99,235,0.4),transparent_45%)]"></div>

      {/* Strong Glow Layers */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-700/40 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-800/40 rounded-full blur-[200px]"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        {/* ===== HERO ===== */}
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Advanced Service Architecture
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade solutions engineered for high-performance,
            scalable, and secure digital ecosystems.
          </p>
        </div>

        {/* ===== IT SERVICES (DARK NEON GLASS) ===== */}
        <div className="relative mb-40 group">

          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[50px] blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

          <div className="relative bg-[#0a041f]/80 backdrop-blur-3xl border border-indigo-700/40 rounded-[50px] p-16 shadow-[0_0_80px_rgba(79,70,229,0.5)]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div>
                <h2 className="text-5xl font-bold mb-8 text-indigo-400">
                  IT Services
                </h2>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  High-performance AI systems, enterprise cloud architecture,
                  DevOps automation, advanced cybersecurity, and scalable
                  distributed platforms.
                </p>

                <ul className="space-y-4 text-gray-300">
                  <li>◆ Artificial Intelligence Engineering</li>
                  <li>◆ Cloud-Native Architecture</li>
                  <li>◆ DevSecOps Automation</li>
                  <li>◆ Enterprise Software Systems</li>
                </ul>

                <Link
                  to="/services/it"
                  className="inline-block mt-10 px-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(79,70,229,0.8)]"
                >
                  Explore IT Services
                </Link>
              </div>

              <div className="h-[380px] rounded-3xl bg-gradient-to-br from-indigo-800/40 to-blue-900/40 border border-indigo-600/30 backdrop-blur-2xl shadow-inner flex items-center justify-center text-indigo-300 text-xl font-semibold">
                Intelligent Technology Ecosystem
              </div>

            </div>
          </div>
        </div>

        {/* ===== NON IT SERVICES (DEEP PURPLE NEON) ===== */}
        <div className="relative group">

          <div className="absolute -inset-1 bg-gradient-to-r from-purple-700 to-blue-700 rounded-[50px] blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

          <div className="relative bg-[#0a041f]/80 backdrop-blur-3xl border border-purple-700/40 rounded-[50px] p-16 shadow-[0_0_80px_rgba(124,58,237,0.5)]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="h-[380px] rounded-3xl bg-gradient-to-br from-purple-800/40 to-blue-900/40 border border-purple-600/30 backdrop-blur-2xl shadow-inner flex items-center justify-center text-purple-300 text-xl font-semibold">
                Strategic Business Excellence
              </div>

              <div>
                <h2 className="text-5xl font-bold mb-8 text-purple-400">
                  Non-IT Services
                </h2>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Executive consulting, HR transformation, financial advisory,
                  and operational excellence frameworks for sustainable growth.
                </p>

                <ul className="space-y-4 text-gray-300">
                  <li>◆ Strategic Consulting</li>
                  <li>◆ HR & Talent Systems</li>
                  <li>◆ Financial Advisory</li>
                  <li>◆ Operational Optimization</li>
                </ul>

                <Link
                  to="/services/non-it"
                  className="inline-block mt-10 px-12 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-700 to-blue-700 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(124,58,237,0.8)]"
                >
                  Explore Non-IT Services
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
