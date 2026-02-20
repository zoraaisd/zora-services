import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

type Service = {
  title: string;
  desc: string;
  slug: string;
  overview: string;
  deliverables: string[];
  process: { title: string; desc: string }[];
  techStack: string[];
};

const SERVICES: Service[] = [
  {
    title: "Website & Web Application Services",
    desc: "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
    slug: "website-web-application-services",
    overview:
      "We build modern websites and web applications that are fast, secure, and scalable. From landing pages to enterprise dashboards, we deliver clean UI/UX and production-ready deployments.",
    deliverables: [
      "Responsive websites (SEO + performance optimized)",
      "Web applications (dashboards, portals, admin panels)",
      "API integration (REST/GraphQL, third-party services)",
      "Authentication (JWT, role-based access, secure sessions)",
      "Security best practices (OWASP, validation, sanitization)",
      "Deployment & maintenance (monitoring, updates, support)",
    ],
    process: [
      { title: "Discover", desc: "Requirements, user flows, and success metrics." },
      { title: "Design", desc: "UI/UX, wireframes, and a consistent component system." },
      { title: "Build", desc: "Frontend + backend implementation with clean architecture." },
      { title: "Launch", desc: "Testing, deployment, analytics, and monitoring setup." },
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Spring Boot", "MySQL", "Vercel/AWS"],
  },
  {
    title: "Mobile Application Development",
    desc: "High-performance mobile applications for Android, iOS, and cross-platform environments.",
    slug: "mobile-application-development",
    overview:
      "We build mobile apps that look premium, feel smooth, and scale with your business — from MVP to enterprise.",
    deliverables: [
      "Android & iOS apps",
      "Cross-platform apps (if needed)",
      "API integration + offline-first flows",
      "Push notifications + analytics",
      "App deployment support",
    ],
    process: [
      { title: "Plan", desc: "User stories, scope, roadmap." },
      { title: "Prototype", desc: "UI/UX prototype + validations." },
      { title: "Develop", desc: "Build features with testing + performance tuning." },
      { title: "Release", desc: "Store deployment + monitoring + iteration." },
    ],
    techStack: ["React Native/Flutter", "Firebase", "Spring Boot APIs", "MySQL"],
  },
  {
    title: "AI & Automation Solutions",
    desc: "Intelligent systems that automate processes and enable data-driven decisions.",
    slug: "ai-automation-solutions",
    overview:
      "We implement AI automation to reduce manual work, improve accuracy, and speed up decisions with measurable ROI.",
    deliverables: [
      "Automation workflows & intelligent routing",
      "Document processing (extraction/classification)",
      "Chatbots & support automation",
      "Prediction/recommendation modules",
    ],
    process: [
      { title: "Use-case", desc: "Pick high-value automation opportunities." },
      { title: "Data", desc: "Prepare data + define evaluation metrics." },
      { title: "Model", desc: "Train/integrate models + validate quality." },
      { title: "Operate", desc: "Deploy, monitor, and continuously improve." },
    ],
    techStack: ["Python", "LLMs", "Vector DB", "FastAPI", "Cloud deployment"],
  },
  {
    title: "Custom Enterprise Software",
    desc: "Enterprise-grade software solutions built for complex business needs.",
    slug: "custom-enterprise-software",
    overview:
      "We build enterprise systems with modular architecture, role-based access, auditability, and high maintainability.",
    deliverables: [
      "Enterprise portals & internal tools",
      "Workflow/approval systems",
      "Integrations with existing software",
      "Role-based access + audit logs",
    ],
    process: [
      { title: "Architecture", desc: "Design scalable structure and security model." },
      { title: "Build", desc: "Develop with CI/CD and testing." },
      { title: "Integrate", desc: "Connect with systems and data sources." },
      { title: "Scale", desc: "Optimize performance, monitoring, feature growth." },
    ],
    techStack: ["Spring Boot", "React", "MySQL", "Docker", "CI/CD"],
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable, and cost-optimized cloud solutions.",
    slug: "cloud-infrastructure-services",
    overview:
      "We modernize infrastructure using cloud-native practices, automation, security controls, and cost optimization.",
    deliverables: [
      "Cloud migration planning & execution",
      "CI/CD pipelines and DevOps automation",
      "Containerization (Docker/Kubernetes)",
      "Monitoring, logging, and alerting setup",
      "Cost optimization and scaling strategies",
    ],
    process: [
      { title: "Assess", desc: "Audit current infra and define target architecture." },
      { title: "Migrate", desc: "Move workloads safely with rollback strategies." },
      { title: "Automate", desc: "IaC + CI/CD + deployment automation." },
      { title: "Optimize", desc: "Security, performance tuning, cost controls." },
    ],
    techStack: ["AWS/Azure/GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security strategies to protect digital assets.",
    slug: "cybersecurity-solutions",
    overview:
      "We strengthen your security posture with audits, secure architecture, and practical protection controls.",
    deliverables: [
      "Security audits + hardening",
      "Authentication/authorization design",
      "Vulnerability management",
      "Logging/monitoring and incident readiness",
    ],
    process: [
      { title: "Audit", desc: "Identify risks and priority fixes." },
      { title: "Fix", desc: "Implement secure controls and best practices." },
      { title: "Validate", desc: "Test, verify, and document improvements." },
      { title: "Monitor", desc: "Ongoing alerts and maintenance." },
    ],
    techStack: ["OWASP", "IAM", "WAF basics", "Secure DevOps"],
  },
];

const ITServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Service not found</h1>
          <p className="text-gray-400 mb-8">
            This service link is invalid. Please go back to IT Services.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              Go Back
            </button>
            <Link
              to="/services/it"
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              Back to IT Services
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden pt-32 pb-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-purple-800/25 blur-[180px] rounded-full top-[-250px] left-[-250px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-blue-700/25 blur-[160px] rounded-full bottom-[-250px] right-[-250px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <Link to="/services" className="hover:text-purple-300 transition">
            Services
          </Link>
          <span className="mx-2">/</span>
          <Link to="/services/it" className="hover:text-purple-300 transition">
            IT Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">{service.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {service.title}
        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-3xl">{service.desc}</p>

        {/* Overview */}
        <div className="mt-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{service.overview}</p>
        </div>

        {/* Deliverables + Tech */}
        <div className="mt-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">
              What we deliver
            </h2>
            <ul className="space-y-3 text-gray-300">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-[#0b1220] border border-white/10 text-sm text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-blue-300 mb-6">How we work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0b1220] border border-white/10"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-100">{step.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/book-appointment"
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            Book Appointment
          </Link>

          <Link
            to="/services/it"
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition font-semibold"
          >
            Back to IT Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ITServiceDetail;
