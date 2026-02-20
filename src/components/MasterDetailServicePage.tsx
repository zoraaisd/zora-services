// src/components/MasterDetailServicePage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { ServiceCategory } from "../data/itServicesData";

type Props = {
  category: ServiceCategory;
  backTo: string;
};

const MasterDetailServicePage: React.FC<Props> = ({ category, backTo }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(
    () => category.items[activeIndex],
    [category.items, activeIndex]
  );

  return (
    <section className="relative min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Unique Zora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-56 -left-56 w-[720px] h-[720px] bg-purple-700/25 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute -bottom-56 -right-56 w-[720px] h-[720px] bg-blue-700/25 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to={backTo}
            className="inline-flex items-center text-purple-300 hover:text-purple-200 transition mb-6"
          >
            ← Back to IT Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {category.title}
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl text-lg">
            {category.desc}
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left list */}
          <div className="lg:col-span-4 space-y-4">
            {category.items.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={item.slug}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600/25 to-blue-600/15 border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span
                      className={`text-sm ${
                        isActive ? "text-purple-200" : "text-gray-500"
                      }`}
                    >
                      View
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right detail */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* Top banner */}
              <div className="h-48 md:h-56 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_45%)]" />
                <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-sm text-gray-300 tracking-widest uppercase">
                    Zora Global AI
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    {active.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {active.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {active.features.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 rounded-full text-sm
                      bg-purple-600/15 border border-purple-400/30
                      text-purple-100"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {/* ✅ NOW GOES TO RESPECTIVE SERVICE PAGE */}
                  <Link
                    to={`/services/it/${category.slug}/${active.slug}`}
                    className="px-7 py-3 rounded-2xl font-semibold
                    bg-purple-600 hover:bg-purple-700 transition
                    shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                  >
                    View Service
                  </Link>

                  <Link
                    to={backTo}
                    className="px-7 py-3 rounded-2xl font-semibold
                    bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Back to IT Services
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-5">
              Click any item on the left to view its details instantly — no page
              reload.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterDetailServicePage;
