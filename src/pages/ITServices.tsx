import React from "react";
import { useNavigate } from "react-router-dom";
import { IT_SERVICE_CATEGORIES } from "../data/itServicesData";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-32 pb-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-800/30 blur-[180px] rounded-full top-[-250px] left-[-250px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-blue-700/30 blur-[160px] rounded-full bottom-[-250px] right-[-250px] animate-pulse" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Future-Grade
            </span>
            <br />
            IT Engineering
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Select a category to explore detailed capabilities with an interactive master–detail layout.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-[1px]" />

          {IT_SERVICE_CATEGORIES.map((cat, index) => (
            <div
              key={cat.slug}
              className={`relative mb-24 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_25px_rgba(139,92,246,0.9)] animate-pulse" />

              <div className="w-full md:w-[45%] relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-700/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)] group-hover:shadow-[0_0_80px_rgba(139,92,246,0.6)] transition-all duration-500 hover:scale-[1.02]">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {cat.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {cat.desc}
                  </p>

                  <button
                    onClick={() => navigate(`/services/it/${cat.slug}`)}
                    className="inline-flex items-center mt-8 font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text hover:opacity-90 transition"
                  >
                    View more <span className="ml-2">→</span>
                  </button>

                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Built for Enterprise Delivery
          </h2>
          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Click any category to explore sub-services on the same page — fast, clean, and professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
