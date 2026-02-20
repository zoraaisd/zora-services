// src/data/nonItServicesData.ts
export type NonITServiceItem = {
  title: string;
  slug: string;
  shortDesc: string;
  tags: string[];
};

export type NonITServiceCategory = {
  title: string;
  slug: string;
  desc: string;
  items: NonITServiceItem[];
};

export const NON_IT_SERVICE_CATEGORIES: NonITServiceCategory[] = [
  {
    title: "Business & Strategy Consulting",
    slug: "business-strategy-consulting",
    desc: "Strategic advisory to optimize operations, boost efficiency, and drive sustainable growth.",
    items: [
      {
        title: "Business Process Optimisation",
        slug: "business-process-optimisation",
        shortDesc:
          "Streamline workflows, remove bottlenecks, and improve cycle time with measurable outcomes.",
        tags: ["Process Mapping", "Workflow Automation", "Lean", "ERP Optimisation"],
      },
      {
        title: "Operational Efficiency Consulting",
        slug: "operational-efficiency-consulting",
        shortDesc:
          "Improve productivity, resource utilization, and operational visibility across teams.",
        tags: ["KPI Design", "Resource Optimisation", "Risk Reduction", "Benchmarking"],
      },
      {
        title: "Digital Transformation Consulting",
        slug: "digital-transformation-consulting",
        shortDesc:
          "Plan and execute digital change initiatives across people, process, and technology.",
        tags: ["Roadmapping", "Technology Assessment", "Change Management", "Digitisation"],
      },
    ],
  },
  {
    title: "Branding & Creative Services",
    slug: "branding-creative-services",
    desc: "Brand identity systems and creative execution that elevate market presence.",
    items: [
      {
        title: "Brand Identity & Positioning",
        slug: "brand-identity-positioning",
        shortDesc:
          "Define brand voice, tone, and visual system for consistent recognition and trust.",
        tags: ["Brand Strategy", "Logo System", "Guidelines", "Messaging"],
      },
      {
        title: "UI/UX & Creative Design",
        slug: "ui-ux-creative-design",
        shortDesc:
          "Modern UI/UX design for websites, apps, and product experiences.",
        tags: ["User Research", "Wireframes", "Prototypes", "Design Systems"],
      },
      {
        title: "Content & Presentation Studio",
        slug: "content-presentation-studio",
        shortDesc:
          "High-impact content, decks, and marketing assets built for conversion and clarity.",
        tags: ["Pitch Decks", "Case Studies", "Copywriting", "Visual Storytelling"],
      },
    ],
  },
  {
    title: "Accounting & Financial Operations",
    slug: "accounting-financial-operations",
    desc: "Reliable financial operations support to improve accuracy, compliance, and reporting.",
    items: [
      {
        title: "Bookkeeping & Monthly Close",
        slug: "bookkeeping-monthly-close",
        shortDesc:
          "Clean books, structured close process, and consistent monthly reporting.",
        tags: ["Ledger", "Reconciliation", "Close Process", "Reporting"],
      },
      {
        title: "Payroll & Compliance Support",
        slug: "payroll-compliance-support",
        shortDesc:
          "Support payroll operations with compliance readiness and process discipline.",
        tags: ["Payroll Ops", "Compliance", "Documentation", "Controls"],
      },
      {
        title: "Financial Planning & Analysis",
        slug: "financial-planning-analysis",
        shortDesc:
          "Budgeting, forecasting, and KPI dashboards to guide smarter decisions.",
        tags: ["Budgeting", "Forecasting", "Dashboards", "KPIs"],
      },
    ],
  },
  {
    title: "Digital Marketing Services",
    slug: "digital-marketing-services",
    desc: "Performance-driven marketing systems engineered for growth and measurable ROI.",
    items: [
      {
        title: "SEO & Content Growth",
        slug: "seo-content-growth",
        shortDesc:
          "Technical SEO + content strategy to grow organic visibility and qualified leads.",
        tags: ["Technical SEO", "Content Strategy", "On-page", "Analytics"],
      },
      {
        title: "Performance Marketing",
        slug: "performance-marketing",
        shortDesc:
          "Paid ads and funnel optimization for lead generation and conversion improvements.",
        tags: ["Google Ads", "Meta Ads", "Landing Pages", "Conversion"],
      },
      {
        title: "Social Media & Branding",
        slug: "social-media-branding",
        shortDesc:
          "Consistent social presence with campaign planning and creative execution.",
        tags: ["Content Calendar", "Creative", "Community", "Campaigns"],
      },
    ],
  },
];
