import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  "slug": "branding-creative-services",
  "title": "Branding & Creative Services"
};
const item = {
  "slug": "creative-assets-marketing-design",
  "title": "Creative Assets & Marketing Design",
  "shortDesc": "High-quality creative assets for marketing, branding, UI visuals, and multimedia designs."
};
const heroImage = "/non-it-hero/creative-assets-marketing-design.png";
const content: any = {
  "heroTitle": "Creative Assets Services",
  "heroSubtitle": "Zora Global AI delivers high-quality creative assets that help brands communicate visually, maintain consistency, and stand out across digital platforms.",
  "primaryCta": "Create Visual Impact",
  "secondaryCta": "Talk to Us",
  "topBlocks": [
    {
      "title": "Brand & Marketing Creatives",
      "desc": "Logos, banners, ads, social media creatives, and promotional visuals designed to enhance recognition and engagement."
    },
    {
      "title": "UI & Digital Assets",
      "desc": "Icons, UI elements, illustrations, and interface graphics optimized for web and mobile applications."
    },
    {
      "title": "Multimedia Assets",
      "desc": "Motion graphics, presentation assets, and creative visuals that bring digital experiences to life."
    }
  ],
  "overview": "Our creative assets services provide businesses with scalable visual resources including brand graphics, marketing creatives, digital illustrations, UI assets, and multimedia designs tailored to your brand identity.",
  "deliverTitle": "Our Creative Process",
  "deliverySteps": [
    {
      "title": "Discovery — Brand & Requirement Analysis",
      "desc": "We understand your brand identity, target audience, and creative objectives before designing visual assets."
    },
    {
      "title": "Design — Creative Asset Production",
      "desc": "Our designers craft high-quality creative assets following brand guidelines and visual best practices."
    },
    {
      "title": "Delivery — Review & Optimization",
      "desc": "We refine designs based on feedback and deliver ready-to-use creative assets."
    }
  ],
  "whyChooseTitle": "Why Our Creative Assets",
  "whyChoose": [
    {
      "title": "Brand-consistent output",
      "desc": "Assets aligned with your identity and campaign goals."
    },
    {
      "title": "Scalable library",
      "desc": "Designs you can reuse across channels and teams."
    },
    {
      "title": "Fast turnaround",
      "desc": "A structured process for efficient delivery."
    }
  ],
  "contactTitle": "Request Creative Assets",
  "contactSubtitle": "Need professional creative assets for your brand or campaigns? Let’s design visuals that elevate your business.",
  "messageLabel": "Tell us about your creative requirements...",
  "submitLabel": "Request Creative Assets"
};

const NonItBrandingCreativeServicesCreativeAssetsMarketingDesign: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Submitted (frontend demo). Connect backend/API later.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-blue-700/16 blur-[180px] rounded-full top-[-280px] left-[-280px]" />
        <div className="absolute w-[900px] h-[900px] bg-purple-700/16 blur-[180px] rounded-full bottom-[-320px] right-[-320px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* HERO */}
      <div className="pt-28 pb-16 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-6">
            <Link to="/services" className="hover:text-purple-300 transition">
              Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/services/non-it"
              className="hover:text-purple-300 transition"
            >
              Non-IT Services
            </Link>
            <span className="mx-2">/</span>
            <Link
              to={
                "/services/non-it/" +
                category.slug
              }
              className="hover:text-purple-300 transition"
            >
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{item.title}</span>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl">
            {/* ✅ IMAGE BANNER */}
            <div className="relative h-56 md:h-72">
              <img
                src={heroImage}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/non-it-hero/default.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/25 via-[#050816]/55 to-[#050816]/95" />
            </div>

            <div className="relative px-8 py-12 md:px-14 md:py-14">
              <div className="relative text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  {content?.heroTitle ?? item.title}
                </h1>
                <p className="text-gray-300 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
                  {content?.heroSubtitle ??
                    item.shortDesc ??
                    "High-impact delivery with clarity, discipline, and measurable outcomes."}
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/book-appointment"
                    className="px-8 py-4 rounded-2xl font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                  >
                    {content?.primaryCta ?? "Get Started"}
                  </Link>
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    {content?.secondaryCta ?? "Talk to Us"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick blocks */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {(content?.topBlocks ?? []).map((b: { title: string; desc: string }) => (
              <div
                key={b.title}
                className="p-7 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold text-blue-300">{b.title}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Overview */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
              Overview
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-lg">
              {content?.overview ??
                "We deliver structured services with measurable business outcomes and operational clarity."}
            </p>
          </div>

          {/* How we deliver */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
              {content?.deliverTitle ?? "How We Deliver"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.deliverySteps ?? []).map((s: { title: string; desc: string }, idx: number) => (
                <div
                  key={s.title}
                  className="p-7 rounded-2xl bg-[#0b1220] border border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="mt-5 font-bold text-gray-100">{s.title}</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Framework (optional) */}
          {(content?.frameworkTitle ||
            content?.beforePoints ||
            content?.afterPoints) && (
            <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
                {content?.frameworkTitle ?? "Framework"}
              </h2>
              {content?.frameworkSubtitle && (
                <p className="text-gray-400 mt-3">{content.frameworkSubtitle}</p>
              )}

              <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-7">
                  <h3 className="text-lg font-bold text-red-300">Before</h3>
                  <ul className="mt-4 space-y-3 text-gray-300">
                    {(content?.beforePoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-red-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(59,130,246,0.25),rgba(168,85,247,0.20))] border border-white/10 p-7 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest text-gray-200/80">
                      Transformation
                    </div>
                    <div className="mt-2 text-xl font-bold">
                      Strategy • Technology • Operations
                    </div>
                    <div className="text-gray-200/80 mt-2">
                      Governance + measurable KPIs
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#0b1220] border border-white/10 p-7">
                  <h3 className="text-lg font-bold text-green-300">After</h3>
                  <ul className="mt-4 space-y-3 text-gray-300">
                    {(content?.afterPoints ?? []).map((p: string) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-green-300">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Why choose us */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-300">
              {content?.whyChooseTitle ?? "Why Choose Us"}
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {(content?.whyChoose ?? []).map((w: { title: string; desc: string }) => (
                <div
                  key={w.title}
                  className="p-7 rounded-2xl bg-[#0b1220] border border-white/10"
                >
                  <h3 className="text-lg font-bold text-purple-200">
                    {w.title}
                  </h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="rounded-3xl bg-white/5 border border-white/10 p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
              {content?.contactTitle ?? "Tell us about your project"}
            </h2>
            <p className="text-gray-400 mt-3">
              {content?.contactSubtitle ??
                "Share your requirements and our team will reach out."}
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="text-sm text-gray-300">Your name*</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-1">
                <label className="text-sm text-gray-300">Your email*</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-300">
                  {content?.messageLabel ?? "Tell us about your requirements..."}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={5}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-[#0b1220] border border-white/10 outline-none focus:border-purple-400"
                />
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
                >
                  {content?.submitLabel ?? "Submit"}
                </button>

                <Link
                  to={
                    "/services/non-it/" +
                    category.slug
                  }
                  className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition font-semibold"
                >
                  Back to {category.title}
                </Link>
              </div>
            </form>

            <p className="text-gray-500 text-sm mt-6">
              Explore our complete range of Non-IT Services for business growth
              and operations excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonItBrandingCreativeServicesCreativeAssetsMarketingDesign;
