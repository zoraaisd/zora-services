import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Home: React.FC = () => {

  /* Cursor Glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* Cookie Notice */
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("zora-cookie");
    if (!consent) setShowCookie(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("zora-cookie", "accepted");
    setShowCookie(false);
  };

  /* ================= IMPROVED COUNTER ================= */
  const Counter = ({
    target,
    suffix = "",
  }: {
    target: number;
    suffix?: string;
  }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      // let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const value = progress * target;
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isInView, target]);

    return (
      <span ref={ref}>
        {Number.isInteger(target)
          ? Math.floor(count)
          : count.toFixed(1)}
        {suffix}
      </span>
    );
  };

  return (
    <section className="relative bg-[#010409] text-white overflow-hidden">

      {/* Ultra Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#010409] via-[#050b14] to-[#010409] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.06),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,64,175,0.05),transparent_40%)] pointer-events-none" />

      {/* Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-[600px] h-[600px] bg-blue-600/10 blur-[250px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 border-b border-blue-900/40">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black leading-tight tracking-tight"
          >
            Bespoke AI.
            <br />
            <span className="text-blue-500">
              Unfair Advantage.
            </span>
          </motion.h1>

          <p className="mt-8 text-xl text-gray-500 max-w-3xl leading-relaxed">
            Enterprise AI solutions tailored to your unique business challenges.
            Purpose-built. Secure by design. Scalable from day one.
          </p>

          <div className="mt-12">
            <Link
              to="/book-appointment"
              className="px-14 py-6 bg-blue-600 rounded-2xl font-semibold text-lg
              shadow-[0_0_40px_rgba(37,99,235,0.6)]
              hover:shadow-[0_0_70px_rgba(37,99,235,0.9)]
              hover:scale-105 transition-all duration-300"
            >
              Start Strategic Discussion
            </Link>
          </div>
        </section>

        {/* ================= ENTERPRISE DIFFERENTIATORS ================= */}
        <section className="py-28 px-6 border-b border-blue-900/40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-16">
              Why Enterprise Leaders Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Board-Level AI Strategy",
                  desc: "We align artificial intelligence initiatives with executive business outcomes and measurable ROI."
                },
                {
                  title: "Security-First Architecture",
                  desc: "Built with enterprise-grade compliance, data encryption, and infrastructure resilience."
                },
                {
                  title: "Scalable AI Infrastructure",
                  desc: "Cloud-native, modular systems designed for long-term digital growth."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#0b1220] border border-blue-900/40
                  hover:border-blue-700 hover:bg-[#0e1626]
                  transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TRUSTED BY ================= */}
        <section className="py-24 px-6 border-b border-blue-900/40">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-16">
              Trusted By Forward-Thinking Enterprises
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
              {[
                "Global Finance",
                "Healthcare Leaders",
                "Manufacturing Giants",
                "Retail Innovators",
                "Tech Enterprises"
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-6 px-4 border border-blue-900/40 rounded-2xl
                  bg-[#0b1220] hover:bg-[#0e1626]
                  transition-all duration-300"
                >
                  <p className="text-blue-300 font-semibold text-sm tracking-widest">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="py-28 px-6 border-b border-blue-900/40">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-20">
              Industries We Transform
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                "Banking & Financial Services",
                "Healthcare & Life Sciences",
                "Manufacturing & Supply Chain",
                "Retail & E-Commerce",
                "Telecommunications",
                "Enterprise SaaS"
              ].map((industry, i) => (
                <div
                  key={i}
                  className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-3xl
                  hover:bg-[#0e1626]
                  transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    {industry}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    AI-powered transformation delivering measurable operational advantage.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= AI FRAMEWORK ================= */}
        <section className="py-28 px-6 border-b border-blue-900/40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-20">
              The Zora Global AI Framework
            </h2>

            <div className="grid md:grid-cols-4 gap-10">
              {[
                "Discover & Align",
                "Architect & Secure",
                "Deploy & Integrate",
                "Scale & Optimize"
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative p-10 bg-[#0b1220] border border-blue-900/40 rounded-3xl"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-blue-400">
                    {step}
                  </h3>
                  <p className="text-gray-500 text-sm mt-4">
                    Enterprise AI lifecycle designed for measurable ROI and compliance.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= IMPACT METRICS ================= */}
        <section className="py-28 px-6 border-b border-blue-900/40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-500 mb-16">
              Measurable Business Impact
            </h2>

            <div className="grid md:grid-cols-4 gap-10">

              <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  <Counter target={40} suffix="%+" />
                </h3>
                <p className="text-gray-500 text-sm">
                  Operational Cost Reduction
                </p>
              </div>

              <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  <Counter target={3} suffix="x" />
                </h3>
                <p className="text-gray-500 text-sm">
                  Faster Decision Making
                </p>
              </div>

              <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  <Counter target={99.9} suffix="%" />
                </h3>
                <p className="text-gray-500 text-sm">
                  Platform Uptime
                </p>
              </div>

              <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  <Counter target={60} suffix="%+" />
                </h3>
                <p className="text-gray-500 text-sm">
                  Customer Satisfaction Increase
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-28 px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">
            Ready to Build Your Competitive Edge?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Tailored to your data. Enterprise-grade security.
            Measurable ROI from day one.
          </p>

          <Link
            to="/services"
            className="px-14 py-6 bg-blue-700 rounded-2xl font-bold
            hover:bg-blue-600 transition-all duration-300"
          >
            Explore Our Solutions
          </Link>
        </section>

      </div>

      {/* ================= COOKIE NOTICE ================= */}
      {showCookie && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
          <div className="bg-[#0b1220] border border-blue-900/40 rounded-3xl px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm md:text-base">
              We use cookies to enhance your experience and analyse platform performance.
            </p>
            <button
              onClick={acceptCookies}
              className="px-6 py-3 bg-blue-700 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Allow All
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Home;
