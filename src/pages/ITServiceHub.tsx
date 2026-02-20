import React from "react";
import { useNavigate } from "react-router-dom";

const ITServices: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website & Web Application Services",
      desc: "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
      slug: "website-web-application-services",
    },
    {
      title: "Mobile Application Development",
      desc: "High-performance mobile applications for Android, iOS, and cross-platform environments.",
      slug: "mobile-application-development",
    },
    {
      title: "AI & Automation Solutions",
      desc: "Intelligent systems that automate processes and enable data-driven decisions.",
      slug: "ai-automation-solutions",
    },
    {
      title: "Custom Enterprise Software",
      desc: "Enterprise-grade software solutions built for complex business needs.",
      slug: "custom-enterprise-software",
    },
    {
      title: "Cloud & Infrastructure Services",
      desc: "Secure, scalable, and cost-optimized cloud solutions.",
      slug: "cloud-infrastructure-services",
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Comprehensive security strategies to protect digital assets.",
      slug: "cybersecurity-solutions",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-32 pb-32 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-800/30 blur-[180px] rounded-full top-[-250px] left-[-250px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-blue-700/30 blur-[160px] rounded-full bottom-[-250px] right-[-250px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,0,255,0.15),_transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Future-Grade
            </span>
            <br />
            IT Engineering
          </h1>
          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A fully immersive digital architecture experience designed for
            scale, intelligence, and enterprise-level precision.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-[1px]" />

          {services.map((service, index) => (
            <div
              key={index}
              className={`relative mb-32 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_25px_rgba(139,92,246,0.9)] animate-pulse" />

              <div className="w-[45%] relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-700/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)] group-hover:shadow-[0_0_80px_rgba(139,92,246,0.6)] transition-all duration-500 hover:scale-105">
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {service.desc}
                  </p>

                  {/* ✅ View more navigates */}
                  <button
                    onClick={() => navigate(`/services/it/${service.slug}`)}
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

        <div className="mt-40 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Architecture Beyond Innovation
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We design intelligent digital ecosystems that evolve, adapt, and
            scale with tomorrow’s technology demands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
