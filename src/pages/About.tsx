import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#140a28] text-white overflow-hidden">

      {/* ================= BACKGROUND SYSTEM ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(109,40,217,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(91,33,182,0.25),transparent_40%)]"></div>

      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-purple-800/20 blur-[180px] rounded-full animate-[spin_40s_linear_infinite]"></div>

      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        {/* ================= HERO ================= */}
        <div className="text-center mb-28">
          <h1 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Redefining Intelligence
          </h1>

          <p className="mt-8 text-purple-200 text-xl max-w-4xl mx-auto leading-relaxed">
            Zora Global AI engineers intelligent digital ecosystems that merge 
            artificial intelligence, cloud infrastructure, and enterprise strategy 
            into one seamless transformation platform.
          </p>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <Link
              to="/services"
              className="relative px-10 py-4 rounded-2xl font-semibold group overflow-hidden"
            >
              <span className="absolute inset-0 bg-purple-700 blur-lg opacity-70 group-hover:opacity-100 transition"></span>
              <span className="absolute inset-0 bg-purple-700 rounded-2xl"></span>
              <span className="relative z-10">Explore Services</span>
            </Link>
          </div>
        </div>

        {/* ================= FLOATING GLASS PANEL ================= */}
        <div className="relative mb-36">

          <div className="absolute -inset-1 bg-purple-800 rounded-[40px] blur-2xl opacity-30"></div>

          <div className="relative bg-[#1b1033] backdrop-blur-3xl border border-purple-700/30 rounded-[40px] p-16 shadow-[0_0_60px_rgba(124,58,237,0.25)]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="space-y-6">
                <h2 className="text-5xl font-bold">
                  Who We <span className="text-purple-400">Are</span>
                </h2>

                <p className="text-purple-200 text-lg leading-relaxed">
                  We are architects of intelligent systems. Our team blends
                  machine learning engineering, advanced analytics, and cloud
                  modernization to empower enterprises with scalable,
                  secure, and future-ready digital solutions.
                </p>

                <p className="text-purple-200 leading-relaxed">
                  Every platform we build is engineered for resilience,
                  performance, and measurable impact.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  "AI & Machine Learning Systems",
                  "Enterprise Automation Architecture",
                  "Cloud-Native Infrastructure",
                  "Strategic Digital Consulting"
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                    <div className="relative bg-[#21123f] backdrop-blur-xl border border-purple-700/30 p-6 rounded-2xl transform group-hover:scale-105 transition duration-500">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ================= PREMIUM STATS WALL ================= */}
        <div className="relative mb-40">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: "150+", label: "Enterprise Clients" },
              { number: "400+", label: "AI Projects Delivered" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "24/7", label: "Global Operations" },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-purple-700 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-[#1b1033] backdrop-blur-2xl border border-purple-700/30 rounded-3xl p-10 text-center transform group-hover:-translate-y-2 transition duration-500">
                  <h3 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-purple-300 mt-4">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="mt-40 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Our <span className="text-purple-400">Story</span>
          </h2>

          <p className="text-purple-200 text-lg leading-relaxed">
            Zora Global AI was founded with a clear mission — to engineer
            intelligent systems that go beyond surface-level automation.
            We recognized that enterprises needed structured AI architecture,
            not fragmented tools.
          </p>

          <p className="text-purple-200 mt-6 leading-relaxed">
            From our earliest engagements, we focused on disciplined engineering,
            long-term scalability, and strategic alignment with executive vision.
          </p>
        </div>

        {/* ================= OUR CULTURE ================= */}
        <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-purple-400">Culture</span>
            </h2>

            <p className="text-purple-200 leading-relaxed">
              We operate with technical rigor, architectural clarity,
              and a bias toward measurable execution. Innovation at
              Zora Global is intentional — driven by research, discipline,
              and accountability.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Deep Technical Ownership",
              "Executive-Level Thinking",
              "Long-Term Partnerships",
              "Responsible AI Governance"
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-[#21123f] backdrop-blur-xl border border-purple-700/30 p-6 rounded-2xl">
                  {item}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= LONG TERM VISION ================= */}
        <div className="mt-40 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            Building for the <span className="text-purple-400">Next Decade</span>
          </h2>

          <p className="text-purple-200 text-lg leading-relaxed">
            Our long-term focus is on adaptive AI ecosystems capable of evolving
            alongside technological advancements, regulatory shifts,
            and enterprise complexity. We design systems that are future-ready
            by architecture — not by trend.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
