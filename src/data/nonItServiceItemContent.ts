// src/data/nonItServiceItemContent.ts
export type NonITTopBlock = { title: string; desc: string };
export type NonITStep = { title: string; desc: string };
export type NonITWhy = { title: string; desc: string };

export type NonITServiceItemContent = {
  heroTitle: string;
  heroSubtitle: string;
  primaryCta?: string;
  secondaryCta?: string;

  topBlocks: NonITTopBlock[];

  overview: string;

  deliverTitle?: string;
  deliverySteps: NonITStep[];

  whyChooseTitle?: string;
  whyChoose: NonITWhy[];

  // Optional “framework / comparison” section
  frameworkTitle?: string;
  frameworkSubtitle?: string;
  beforePoints?: string[];
  afterPoints?: string[];

  contactTitle?: string;
  contactSubtitle?: string;
  messageLabel?: string;
  submitLabel?: string;
};

export const NON_IT_SERVICE_ITEM_CONTENT: Record<
  string,
  Record<string, NonITServiceItemContent>
> = {
  "business-strategy-consulting": {
    "business-process-optimisation": {
      heroTitle: "Business Process Optimisation",
      heroSubtitle:
        "Design lean workflows, automate repetitive steps, and build operational clarity with measurable improvements.",
      primaryCta: "Book a Consultation",
      secondaryCta: "Talk to Us",

      topBlocks: [
        {
          title: "ERP Optimisation",
          desc: "Refine ERP workflows, reduce manual work, and improve data accuracy across departments.",
        },
        {
          title: "Workflow Automation",
          desc: "Automate approvals, notifications, and reporting for faster cycle time and fewer errors.",
        },
        {
          title: "Process Improvement",
          desc: "Identify bottlenecks and redesign processes using lean principles and data-driven decisions.",
        },
      ],

      overview:
        "We analyze how work actually flows today (people, tools, handoffs), then redesign your processes for speed, quality, and scalability. The outcome is a practical, documented process blueprint, automation plan, and measurable KPIs.",

      deliverTitle: "Our Delivery Methodology",
      deliverySteps: [
        {
          title: "Discover & Map",
          desc: "Stakeholder interviews + process mapping to capture real workflows and pain points.",
        },
        {
          title: "Diagnose Bottlenecks",
          desc: "Pinpoint constraints (handoffs, approvals, rework) and quantify their cost and time impact.",
        },
        {
          title: "Redesign & Standardize",
          desc: "Create a future-state workflow with clear roles, SLAs, controls, and documentation.",
        },
        {
          title: "Automate & Integrate",
          desc: "Implement tools/automation (forms, workflows, ERP enhancements) with minimal disruption.",
        },
        {
          title: "Measure & Improve",
          desc: "Define KPIs and dashboards; run continuous improvement cycles with owners assigned.",
        },
      ],

      whyChooseTitle: "Why ZoraGlobalAI for Process Optimisation",
      whyChoose: [
        {
          title: "Outcome-first",
          desc: "We tie process changes to measurable KPIs (cycle time, cost, errors, compliance).",
        },
        {
          title: "Practical implementation",
          desc: "Not just slides — we deliver playbooks, templates, and working automations.",
        },
        {
          title: "Cross-functional alignment",
          desc: "We help teams adopt the new process with roles, checklists, and governance.",
        },
      ],

      frameworkTitle: "Framework Comparison",
      frameworkSubtitle:
        "Choose the right approach based on speed, complexity, and change impact.",
      beforePoints: [
        "Manual operations and limited visibility",
        "Disconnected tools and repeated data entry",
        "High rework, slow approvals, and unclear ownership",
      ],
      afterPoints: [
        "Streamlined workflows with clear ownership",
        "Automation + integrated systems for accuracy",
        "Dashboards and KPIs for continuous improvements",
      ],

      contactTitle: "Start Optimising Your Operations",
      contactSubtitle:
        "Tell us about your workflows and goals — we’ll propose a clear improvement plan.",
      messageLabel: "Describe your process challenges...",
      submitLabel: "Submit Request",
    },

    "operational-efficiency-consulting": {
      heroTitle: "Operational Efficiency Consulting",
      heroSubtitle:
        "Improve productivity and resource utilization through assessments, KPI systems, and execution-ready recommendations.",
      primaryCta: "Get an Assessment",
      secondaryCta: "Contact Team",
      topBlocks: [
        { title: "Operational Assessment", desc: "Identify efficiency gaps and quantify improvement opportunities." },
        { title: "KPI Framework", desc: "Design KPIs, SLAs, and reporting loops that teams can own." },
        { title: "Risk Reduction", desc: "Add controls and governance to reduce operational surprises." },
      ],
      overview:
        "We help you increase throughput without increasing chaos — by establishing clarity in processes, metrics, and ownership.",
      deliverySteps: [
        { title: "Baseline & Data Collection", desc: "Capture current performance, volumes, and workflow structure." },
        { title: "KPI & SLA Design", desc: "Define measurable targets and how to track them consistently." },
        { title: "Optimisation Roadmap", desc: "Prioritize improvements by impact and effort with timelines." },
        { title: "Execution Support", desc: "Support change rollout with templates, dashboards, and training." },
        { title: "Performance Review", desc: "Track impact and iterate improvements every cycle." },
      ],
      whyChoose: [
        { title: "Clarity + Control", desc: "We standardize operations with controls that don’t slow you down." },
        { title: "Speed to impact", desc: "Quick wins first, then deeper changes with governance." },
        { title: "Executive visibility", desc: "Dashboards and reporting for decision-making." },
      ],
      contactTitle: "Improve Operational Performance",
      contactSubtitle: "Share your operations goals and we’ll recommend a KPI-driven approach.",
      messageLabel: "What are you trying to improve (time, cost, quality, compliance)?",
      submitLabel: "Request Consultation",
    },

    "digital-transformation-consulting": {
      heroTitle: "Digital Transformation Consulting",
      heroSubtitle:
        "Align strategy, technology, and operations to modernize how your business runs and scales.",
      primaryCta: "Build a Roadmap",
      secondaryCta: "Talk to Us",
      topBlocks: [
        { title: "Digital Strategy Roadmapping", desc: "A clear transformation roadmap with priorities and milestones." },
        { title: "Technology Assessment", desc: "Evaluate tools, systems, and data readiness." },
        { title: "Change Management", desc: "Adoption-focused rollout with governance and communication." },
      ],
      overview:
        "We guide digital change initiatives end-to-end: assess maturity, define priorities, and implement transformation programs that teams can adopt.",
      deliverySteps: [
        { title: "Assess", desc: "Evaluate processes, systems, and digital maturity to find opportunities." },
        { title: "Plan", desc: "Create a practical roadmap tied to business outcomes and KPIs." },
        { title: "Design", desc: "Design target-state architecture, workflows, and governance." },
        { title: "Implement", desc: "Execute changes using agile rollout and risk-aware delivery." },
        { title: "Scale", desc: "Standardize, document, and expand transformation across teams." },
      ],
      whyChoose: [
        { title: "Balanced approach", desc: "We align people, processes, and technology — not just tools." },
        { title: "Enterprise-ready", desc: "Security, governance, and scalability built in." },
        { title: "Measurable outcomes", desc: "KPIs for visibility and accountability." },
      ],
      frameworkTitle: "Digital Transformation Framework",
      frameworkSubtitle: "Aligning strategy, technology, and operations for sustainable growth.",
      beforePoints: [
        "Legacy systems and disconnected processes",
        "Manual operations and limited visibility",
        "Slow innovation and high costs",
      ],
      afterPoints: [
        "Integrated digital operations",
        "Improved agility and scalability",
        "Data-driven decisions",
      ],
      contactTitle: "Start Your Digital Transformation",
      contactSubtitle: "Tell us about your transformation goals — we’ll guide the next steps.",
      messageLabel: "Tell us about your transformation goals...",
      submitLabel: "Submit",
    },
  },

  // For other categories, you can add content later.
  // The pages will still work even if content is missing (it will use safe defaults).
};
