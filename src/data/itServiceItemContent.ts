// src/data/itServiceItemContent.ts

type Block = { title: string; desc: string };
type Step = { title: string; desc: string };

type PageContent = {
  heroTitle: string;
  heroSubtitle: string;
  primaryCta?: string;
  secondaryCta?: string;

  topBlocks: Block[];
  overview: string;
  deliverySteps: Step[];
  whyChoose: Block[];

  contactTitle?: string;
  contactSubtitle?: string;
  messageLabel?: string;
  submitLabel?: string;
};

export const IT_SERVICE_ITEM_CONTENT: Record<
  string,
  Record<string, PageContent>
> = {
  "website-web-application-services": {
    "website-design-development": {
      heroTitle: "Web Development Solutions",
      heroSubtitle:
        "We build modern, scalable, and high-performing websites and web platforms — secure, responsive, and engineered for growth.",
      primaryCta: "Get Started",
      secondaryCta: "Talk to Us",
      topBlocks: [
        {
          title: "Frontend Development",
          desc: "Responsive, interactive UI with React and modern component systems built for performance.",
        },
        {
          title: "Backend & API Development",
          desc: "Secure APIs, clean architecture, and scalable databases designed for enterprise stability.",
        },
        {
          title: "Full-Stack Web Applications",
          desc: "End-to-end delivery combining UI, backend, cloud deployment, and DevOps best practices.",
        },
      ],
      overview:
        "Our web development services empower businesses with fast, reliable, and scalable digital solutions. From high-impact marketing sites to enterprise web apps, we build platforms that drive engagement, conversions, and long-term growth.",
      deliverySteps: [
        {
          title: "Planning",
          desc: "We align goals, user journeys, and architecture decisions to choose the right tech stack.",
        },
        {
          title: "Development",
          desc: "UI/UX + full-stack implementation using clean, maintainable engineering standards.",
        },
        {
          title: "Launch",
          desc: "Secure deployment, SEO checks, monitoring, and continuous optimization for measurable results.",
        },
      ],
      whyChoose: [
        {
          title: "Modern Web Expertise",
          desc: "Strong engineering in modern frameworks and scalable web architecture.",
        },
        {
          title: "Performance & Security Focus",
          desc: "Fast-loading, SEO-ready builds with security-first engineering practices.",
        },
        {
          title: "Business-Driven Delivery",
          desc: "We build solutions aligned to business outcomes and measurable impact.",
        },
      ],
      contactTitle: "Build Your Web Platform",
      contactSubtitle:
        "Ready to build or scale your web product? Tell us what you need and we’ll reach out.",
      messageLabel: "Tell us about your web project...",
      submitLabel: "Submit Project",
    },

    "web-application-development": {
      heroTitle: "Web Application Services",
      heroSubtitle:
        "High-performance websites and scalable web applications designed to strengthen digital presence and support long-term business growth.",
      primaryCta: "Get Started",
      topBlocks: [
        {
          title: "Brand & Strategy Planning",
          desc: "We define structure, messaging, and experience aligned with your market and business goals.",
        },
        {
          title: "Design & Development",
          desc: "Responsive UI/UX with scalable architecture and clean performance-first implementation.",
        },
        {
          title: "Launch & Optimization",
          desc: "SEO checks, testing, and improvements to ensure measurable results after launch.",
        },
      ],
      overview:
        "We design and build web applications that are secure, scalable, and built for real operations. From portals and dashboards to full customer platforms, we deliver maintainable systems with strong UX and production-ready stability.",
      deliverySteps: [
        {
          title: "Discovery & Research",
          desc: "We study goals, competitors, and user behavior to define the right flows and architecture.",
        },
        {
          title: "Strategy & Execution",
          desc: "We build visibility and authority through performance-focused engineering and UX clarity.",
        },
        {
          title: "Growth & Optimization",
          desc: "Continuous improvements for speed, SEO, conversion, and long-term product evolution.",
        },
      ],
      whyChoose: [
        {
          title: "Technical Excellence",
          desc: "Modern frameworks, clean code practices, and scalable architecture.",
        },
        {
          title: "User-Centered Design",
          desc: "Accessible, consistent, and conversion-focused experiences across devices.",
        },
        {
          title: "SEO & Performance",
          desc: "Optimized structure, fast load times, and measurement-ready builds.",
        },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your project and our team will reach out.",
      submitLabel: "Submit Project",
    },

    "ecommerce-platform-development": {
      heroTitle: "E-Commerce Platform Development",
      heroSubtitle:
        "Conversion-driven, secure e-commerce platforms built for scale — payments, inventory, and performance engineered in.",
      primaryCta: "Get Started",
      topBlocks: [
        {
          title: "Storefront Experience",
          desc: "Fast category/search flows, product pages, cart and checkout optimized for conversion.",
        },
        {
          title: "Payments & Security",
          desc: "Secure payment gateway integration, fraud controls, and compliance-ready architecture.",
        },
        {
          title: "Orders & Inventory",
          desc: "Reliable order processing, inventory sync, and admin dashboards for operations.",
        },
      ],
      overview:
        "We build scalable e-commerce platforms that support growth without breaking performance. From custom storefronts to integrated operations, we deliver secure shopping experiences with strong admin control and analytics-ready tracking.",
      deliverySteps: [
        {
          title: "Plan",
          desc: "We define catalog structure, checkout flow, roles, and operational requirements.",
        },
        {
          title: "Build",
          desc: "Storefront + backend + payment + inventory modules delivered with scalable architecture.",
        },
        {
          title: "Launch",
          desc: "Testing, monitoring, performance optimization, and post-launch support.",
        },
      ],
      whyChoose: [
        {
          title: "Conversion Focus",
          desc: "Checkout UX, performance, and funnel tracking designed to improve sales outcomes.",
        },
        {
          title: "Secure Commerce",
          desc: "Security-first builds with best-practice hardening and validation.",
        },
        {
          title: "Operational Ready",
          desc: "Inventory, orders, admin controls, and integrations built for real business workflows.",
        },
      ],
      contactTitle: "Build Your E-Commerce Platform",
      contactSubtitle: "Tell us what you’re building — we’ll help you launch and scale.",
      submitLabel: "Submit Project",
    },

    "saas-application-development": {
      heroTitle: "SaaS Product Development",
      heroSubtitle:
        "Secure, scalable, high-performance SaaS platforms — from idea to launch and beyond, engineered for subscription growth.",
      primaryCta: "Get Started",
      topBlocks: [
        {
          title: "Custom SaaS Architecture",
          desc: "Multi-tenant SaaS architecture optimized for performance, scaling, and isolation.",
        },
        {
          title: "Cloud & DevOps Enablement",
          desc: "Cloud-native deployment with CI/CD, monitoring, and automated scaling.",
        },
        {
          title: "Subscription & Billing Systems",
          desc: "Subscription plans, invoicing, access control, and secure billing integration.",
        },
      ],
      overview:
        "Our SaaS development services help startups and enterprises build subscription-based platforms using modern cloud technologies. We focus on scalability, security, and a premium user experience that supports long-term retention and revenue.",
      deliverySteps: [
        {
          title: "Discovery",
          desc: "Product strategy, roadmap, user roles, and SaaS requirements definition.",
        },
        {
          title: "Development",
          desc: "Agile delivery using modern frameworks, APIs, and cloud services.",
        },
        {
          title: "Launch & Scale",
          desc: "Secure deployment, performance tuning, monitoring, and continuous improvements.",
        },
      ],
      whyChoose: [
        {
          title: "SaaS Product Expertise",
          desc: "From MVP to enterprise-scale platforms, we build with product thinking.",
        },
        {
          title: "Scalable & Secure by Design",
          desc: "Performance, security, and scalability built into architecture from day one.",
        },
        {
          title: "Long-Term Partnership",
          desc: "Optimization, feature expansion, and ongoing support as you grow.",
        },
      ],
      contactTitle: "Build Your SaaS Product",
      contactSubtitle: "Ready to launch or scale your SaaS platform? Talk to our experts.",
      messageLabel: "Tell us about your SaaS product...",
      submitLabel: "Submit Project",
    },
  },

  "mobile-application-development": {
    "android-app-development": {
      heroTitle: "Android App Development Services",
      heroSubtitle:
        "Secure, scalable, high-performance Android applications tailored to your business — built for smooth experiences across devices.",
      primaryCta: "Build Android App",
      topBlocks: [
        {
          title: "Custom Android App Development",
          desc: "Tailor-made apps built with modern Android practices to match business goals.",
        },
        {
          title: "Android UI/UX Design",
          desc: "Intuitive interfaces aligned with Material Design and accessibility standards.",
        },
        {
          title: "API & Backend Integration",
          desc: "Secure integration with APIs, backend systems, and cloud services.",
        },
      ],
      overview:
        "Our Android app development services help businesses design, develop, and deploy powerful mobile applications with a strong focus on performance, security, maintainability, and Play Store readiness.",
      deliverySteps: [
        { title: "Planning", desc: "Strategy, requirements, user journeys, and architecture planning." },
        { title: "Development", desc: "Engineering with secure coding and performance optimization." },
        { title: "Launch", desc: "Testing, compliance checks, and successful Play Store deployment." },
      ],
      whyChoose: [
        { title: "Android Expertise", desc: "Skilled developers using modern Android toolchains and patterns." },
        { title: "Scalable & Secure", desc: "Apps engineered for growth, privacy, and reliability." },
        { title: "End-to-End Delivery", desc: "From planning to Play Store launch and post-release iteration." },
      ],
      contactTitle: "Start Your Android App Project",
      contactSubtitle: "Tell us your Android requirements and we’ll connect with you.",
      messageLabel: "Tell us about your Android app requirements...",
      submitLabel: "Request Android Consultation",
    },

    "ios-app-development": {
      heroTitle: "iOS App Development Services",
      heroSubtitle:
        "Premium iOS applications for iPhone and iPad using Apple-native best practices — smooth UX, strong security, scalable foundations.",
      primaryCta: "Build iOS App",
      topBlocks: [
        { title: "Custom iOS App Development", desc: "Native iOS apps tailored to business goals and Apple standards." },
        { title: "iOS UI/UX Design", desc: "Elegant interfaces aligned with Apple Human Interface Guidelines." },
        { title: "Apple Ecosystem Integration", desc: "Secure integration with APIs, iCloud, and Apple services." },
      ],
      overview:
        "Our iOS development services help businesses design, build, and launch high-quality mobile applications for the Apple ecosystem with performance, security, usability, and App Store compliance.",
      deliverySteps: [
        { title: "Planning", desc: "Define goals, user journeys, and iOS-optimized architecture." },
        { title: "Development", desc: "Secure and scalable development using Apple-first best practices." },
        { title: "Launch", desc: "QA testing, App Store submission, and post-launch optimization." },
      ],
      whyChoose: [
        { title: "Apple Expertise", desc: "Strong experience with iOS standards, UX, and compliance." },
        { title: "Secure & Scalable", desc: "Built for performance, security, and long-term growth." },
        { title: "End-to-End Delivery", desc: "From concept to App Store release with structured delivery." },
      ],
      contactTitle: "Start Your iOS App Project",
      contactSubtitle: "Share your iOS requirements and we’ll reach out.",
      messageLabel: "Tell us about your iOS app requirements...",
      submitLabel: "Request iOS Consultation",
    },

    "cross-platform-app-development": {
      heroTitle: "Cross-Platform App Development Services",
      heroSubtitle:
        "High-performance apps for iOS and Android using a single codebase — faster delivery, lower cost, consistent experience.",
      primaryCta: "Build Your App",
      topBlocks: [
        { title: "Single Codebase Delivery", desc: "Build once, deploy across platforms with reusable components." },
        { title: "Native-Like Performance", desc: "Optimized UI and smooth performance with platform polish." },
        { title: "Scalable & Secure Architecture", desc: "Robust foundations designed for growth and integrations." },
      ],
      overview:
        "Our cross-platform services help businesses launch feature-rich mobile apps faster using a unified development approach. We focus on maintainability, security, and performance across devices.",
      deliverySteps: [
        { title: "Planning", desc: "Define goals, users, and platform requirements to choose the right strategy." },
        { title: "Development", desc: "Build, test, and optimize shared logic with platform enhancements." },
        { title: "Launch & Scale", desc: "Publish apps, monitor performance, and improve continuously." },
      ],
      whyChoose: [
        { title: "Cost-Effective", desc: "Reduced development and maintenance cost with unified delivery." },
        { title: "Faster Time-to-Market", desc: "Launch on iOS and Android together." },
        { title: "Scalable Mobile Solutions", desc: "Apps designed to evolve as your business grows." },
      ],
      contactTitle: "Start Your Cross-Platform App",
      contactSubtitle: "Tell us about your app idea and we’ll connect with you.",
      messageLabel: "Tell us about your app idea...",
      submitLabel: "Request Consultation",
    },
  },

  "ai-automation-solutions": {
    "chatbot-development": {
      heroTitle: "AI Chatbot Services",
      heroSubtitle:
        "AI-powered chatbots that automate conversations, enhance customer engagement, and provide instant support across channels.",
      primaryCta: "Build a Chatbot",
      topBlocks: [
        { title: "Customer Support Chatbots", desc: "24/7 FAQ automation, ticket assistance, and real-time support." },
        { title: "Sales & Lead Chatbots", desc: "Lead qualification, meeting scheduling, and conversion support." },
        { title: "Enterprise Internal Chatbots", desc: "HR/IT onboarding, knowledge search, and productivity bots." },
      ],
      overview:
        "We build business-ready conversational AI for websites, mobile apps, and internal platforms — with NLP, analytics, integrations, and continuous improvement.",
      deliverySteps: [
        { title: "Discovery", desc: "Define use cases, user intents, and conversation flows." },
        { title: "Development", desc: "Build and train models for accurate responses and control." },
        { title: "Deployment", desc: "Integrate across platforms and optimize using real usage data." },
      ],
      whyChoose: [
        { title: "Practical AI", desc: "Bots designed for business workflows — not just demos." },
        { title: "Integration Ready", desc: "CRM/helpdesk integration and omnichannel deployment." },
        { title: "Continuous Improvement", desc: "Analytics-led tuning for better outcomes over time." },
      ],
      contactTitle: "Start Your Chatbot Project",
      contactSubtitle: "Share your chatbot needs and we’ll reach out.",
      messageLabel: "Tell us about your chatbot requirements...",
      submitLabel: "Submit Project",
    },

    "workflow-automation-rpa": {
      heroTitle: "Workflow Automation Solutions",
      heroSubtitle:
        "Automate repetitive processes using intelligent workflows — improve speed, accuracy, and business agility.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Business Process Automation", desc: "Automate workflows across finance, HR, operations, and support." },
        { title: "System & Tool Integration", desc: "Connect CRMs, ERPs, databases, and third-party tools securely." },
        { title: "Intelligent Automation", desc: "Rule engines + AI logic to automate complex decisions." },
      ],
      overview:
        "We streamline operations by connecting systems, data, and teams through secure automation. The result: reduced cost, fewer errors, and faster execution.",
      deliverySteps: [
        { title: "Discovery", desc: "Process analysis and opportunity identification aligned to business goals." },
        { title: "Design & Build", desc: "Workflow design, integrations, approvals, triggers, and exception handling." },
        { title: "Deploy & Scale", desc: "Production deployment with monitoring, optimization, and scalability planning." },
      ],
      whyChoose: [
        { title: "Automation Expertise", desc: "Deep integration and workflow engineering experience." },
        { title: "Scalable & Secure", desc: "Enterprise-grade automation with security at the core." },
        { title: "Business-First Results", desc: "Focused on measurable efficiency and faster execution." },
      ],
      contactTitle: "Automate Your Workflows",
      contactSubtitle: "Tell us what you want to automate and we’ll reach out.",
      messageLabel: "Tell us about your automation needs...",
      submitLabel: "Submit Project",
    },

    "recommendation-engine-development": {
      heroTitle: "AI Recommendation Systems",
      heroSubtitle:
        "Personalized recommendations that increase engagement, conversions, and retention using machine learning and behavioral insights.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Product Recommendations", desc: "Personalize products based on behavior, purchases, and preferences." },
        { title: "Content Recommendations", desc: "Recommendations for video, learning, articles, and media platforms." },
        { title: "Customer Personalization", desc: "Segmentation + real-time personalization models for better experiences." },
      ],
      overview:
        "We design collaborative filtering, content-based, and hybrid systems with real-time delivery and analytics-led improvements.",
      deliverySteps: [
        { title: "Discovery", desc: "Use case and data analysis to define the right approach." },
        { title: "Model Development", desc: "Build recommendation models and validate quality metrics." },
        { title: "Deployment", desc: "Integrate into production and continuously optimize performance." },
      ],
      whyChoose: [
        { title: "ML Expertise", desc: "Strong experience in data science and recommendation strategies." },
        { title: "Real-Time Systems", desc: "Built for scale with low-latency personalization." },
        { title: "Business Impact", desc: "Optimized for measurable outcomes like retention and conversions." },
      ],
      contactTitle: "Talk to Our AI Experts",
      contactSubtitle: "Tell us about your recommendation system needs.",
      messageLabel: "Tell us about your recommendation system...",
      submitLabel: "Submit Project",
    },

    "machine-learning-solutions": {
      heroTitle: "AI & Machine Learning Solutions",
      heroSubtitle:
        "Automation, predictive analytics, and personalization — production-ready ML systems engineered for scale and security.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "AI Automation", desc: "Reduce manual effort and improve accuracy using ML-driven automation." },
        { title: "Predictive Analytics", desc: "Forecast trends and improve decisions using real-time ML models." },
        { title: "Personalized Experiences", desc: "Adaptive systems that personalize content, offers, and user journeys." },
      ],
      overview:
        "We design ML solutions that are measurable, reliable, and maintainable — with structured training, evaluation, deployment, monitoring, and continuous improvement.",
      deliverySteps: [
        { title: "AI Discovery & Data Strategy", desc: "Align objectives, data sources, and success metrics." },
        { title: "Model Development & Training", desc: "Build and train models with strong evaluation and security." },
        { title: "Deployment & Optimization", desc: "Deploy, monitor drift, and continuously improve quality." },
      ],
      whyChoose: [
        { title: "AI Expertise", desc: "Deep ML engineering and data strategy for complex business use cases." },
        { title: "Scalable & Secure", desc: "Enterprise-grade data protection, monitoring, and performance." },
        { title: "Business-Driven Strategy", desc: "Focused on automation, accuracy, and measurable ROI." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your ML project and we’ll get back to you.",
      submitLabel: "Submit Project",
    },

    "computer-vision-solutions": {
      heroTitle: "Computer Vision Solutions",
      heroSubtitle:
        "Image and video intelligence with deep learning — detection, inspection, analytics, and automation built for real deployment.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Image Recognition", desc: "Classify objects, faces, and scenes using deep learning models." },
        { title: "Video Analytics", desc: "Real-time insights, tracking, behavior detection, and monitoring." },
        { title: "Visual Inspection", desc: "Detect defects and anomalies for manufacturing and industrial workflows." },
      ],
      overview:
        "We build computer vision systems for real environments — with robust data pipelines, training workflows, deployment strategies, and continuous optimization.",
      deliverySteps: [
        { title: "Discovery", desc: "Define use cases, data strategy, and model approach." },
        { title: "Model Development", desc: "Train and validate deep learning models for high accuracy." },
        { title: "Deployment", desc: "Deploy to production with monitoring and iterative improvements." },
      ],
      whyChoose: [
        { title: "Vision Expertise", desc: "Strong experience across deep learning and visual intelligence." },
        { title: "Production Ready", desc: "Secure, scalable solutions for real-world deployment." },
        { title: "Industry Use Cases", desc: "Applications across healthcare, manufacturing, retail, and security." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us your computer vision requirements.",
      messageLabel: "Tell us about your computer vision requirements...",
      submitLabel: "Submit Project",
    },

    "aiot-solutions": {
      heroTitle: "AIoT Development Solutions",
      heroSubtitle:
        "AI + IoT integrated systems — real-time insights, automation, and predictive intelligence across connected devices.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Device & Sensor Integration", desc: "Connect sensors, gateways, and devices to capture real-time data." },
        { title: "Edge AI & Analytics", desc: "Low-latency AI at the edge for fast decisions and reduced cloud load." },
        { title: "Predictive Automation", desc: "Predictive maintenance, anomaly detection, and automated actions." },
      ],
      overview:
        "We build secure AIoT ecosystems combining edge computing, cloud platforms, and AI models for scalable and reliable connected operations.",
      deliverySteps: [
        { title: "Discovery & Architecture", desc: "Define the AIoT strategy, device ecosystem, and data flows." },
        { title: "Development", desc: "Build IoT platform, data pipelines, and edge AI model workflows." },
        { title: "Deployment & Scale", desc: "Deploy, monitor, update models, and optimize performance continuously." },
      ],
      whyChoose: [
        { title: "AIoT Expertise", desc: "Deep expertise in edge AI, IoT platforms, and real-time analytics." },
        { title: "Secure & Scalable", desc: "Enterprise-grade architectures designed for reliability and growth." },
        { title: "Industry Focus", desc: "Use cases across manufacturing, logistics, healthcare, energy, and smart cities." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your AIoT requirements.",
      messageLabel: "Tell us about your AIoT requirements...",
      submitLabel: "Submit Project",
    },
  },

  "cybersecurity-solutions": {
    "security-audits": {
      heroTitle: "Cyber Security Audit Services",
      heroSubtitle:
        "Comprehensive security audits to identify vulnerabilities, assess risks, and strengthen enterprise security across apps, networks, and cloud.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Information & Network Audits", desc: "Assess access controls, configurations, policies, and exposure." },
        { title: "Vulnerability & Pen Testing", desc: "Realistic testing to uncover exploitable weaknesses." },
        { title: "Compliance & Risk", desc: "Audit readiness aligned to common standards and regulations." },
      ],
      overview:
        "We evaluate your organization’s security posture using structured audits, testing, and risk analysis — resulting in clear findings and actionable remediation.",
      deliverySteps: [
        { title: "Assessment", desc: "Review systems, policies, configurations, and threat exposure." },
        { title: "Testing", desc: "Run vulnerability scans and penetration-style validation." },
        { title: "Reporting", desc: "Deliver clear reports with remediation priorities and guidance." },
      ],
      whyChoose: [
        { title: "Audit Expertise", desc: "Experienced professionals delivering enterprise-grade assessments." },
        { title: "Compliance Driven", desc: "Approach aligned to common standards and audit expectations." },
        { title: "Actionable Insights", desc: "Clear, prioritized fixes that reduce risk quickly." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your security audit needs.",
      messageLabel: "Tell us about your security audit needs...",
      submitLabel: "Submit Project",
    },

    "vulnerability-assessment": {
      heroTitle: "Vulnerability Assessment Services",
      heroSubtitle:
        "Identify security weaknesses before attackers do — structured scanning, validation, and remediation planning for real risk reduction.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Vulnerability Scanning", desc: "Automated scanning across apps, servers, and cloud resources." },
        { title: "Risk Validation", desc: "Confirm findings, prioritize severity, and reduce false positives." },
        { title: "Fix Planning", desc: "Clear remediation guidance with timelines and technical actions." },
      ],
      overview:
        "We perform vulnerability assessments that go beyond tool output. Our process validates risks, prioritizes what matters, and provides practical remediation guidance to strengthen your security posture.",
      deliverySteps: [
        { title: "Discovery", desc: "Scope targets, environments, and business-critical assets." },
        { title: "Assessment", desc: "Scan, validate, and classify vulnerabilities by severity and exposure." },
        { title: "Remediation Support", desc: "Provide fixes, retesting strategy, and improvement roadmap." },
      ],
      whyChoose: [
        { title: "Practical Security", desc: "Focused on real-world risk reduction, not just reports." },
        { title: "Clear Prioritization", desc: "Fix what matters first with severity and business impact mapping." },
        { title: "Continuous Improvement", desc: "Retesting and guidance to maintain long-term security hygiene." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your vulnerability assessment needs.",
      messageLabel: "Tell us about your security needs...",
      submitLabel: "Submit Project",
    },

    "threat-monitoring": {
      heroTitle: "Threat Monitoring Services",
      heroSubtitle:
        "Always-on monitoring to protect networks, endpoints, and cloud workloads using real-time detection and rapid response workflows.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Network & Endpoint Monitoring", desc: "Detect malware, anomalies, and suspicious activity in real time." },
        { title: "Threat Intelligence", desc: "Identify known and emerging threats using analytics and intel sources." },
        { title: "Response & Mitigation", desc: "Rapid containment and mitigation to reduce business impact." },
      ],
      overview:
        "Our threat monitoring services provide continuous protection using detection pipelines, intelligence, and response playbooks — helping prevent incidents before they escalate.",
      deliverySteps: [
        { title: "Monitoring", desc: "24/7 visibility across endpoints, networks, and cloud workloads." },
        { title: "Detection", desc: "Analyze signals, correlate events, and identify threats early." },
        { title: "Response", desc: "Contain threats quickly and implement mitigation actions." },
      ],
      whyChoose: [
        { title: "Advanced Monitoring", desc: "Strong experience with detection, analysis, and response workflows." },
        { title: "Proactive Security", desc: "Early detection to reduce incident severity and downtime." },
        { title: "Business Protection", desc: "Designed to protect data, continuity, and operations." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your monitoring needs.",
      messageLabel: "Tell us about your threat monitoring needs...",
      submitLabel: "Submit Project",
    },

    "data-protection-compliance": {
      heroTitle: "Data Protection & Compliance Services",
      heroSubtitle:
        "Safeguard sensitive data and strengthen compliance readiness with encryption, controls, assessments, and continuous governance.",
      primaryCta: "Get Started",
      topBlocks: [
        { title: "Data Privacy & Protection", desc: "Encryption, access controls, and secure handling practices." },
        { title: "Compliance Readiness", desc: "Assessments and controls aligned to common compliance frameworks." },
        { title: "Testing & Risk", desc: "Testing and risk management to reduce exposure and improve posture." },
      ],
      overview:
        "We help organizations protect customer data, enterprise systems, and digital assets while improving compliance readiness using structured assessment, implementation, and monitoring.",
      deliverySteps: [
        { title: "Assessment", desc: "Gap analysis across systems, policies, and data handling flows." },
        { title: "Implementation", desc: "Deploy controls and operational practices to reduce risk." },
        { title: "Monitoring", desc: "Ongoing governance, testing, and compliance management." },
      ],
      whyChoose: [
        { title: "Security + Compliance Expertise", desc: "Practical controls with a compliance-friendly approach." },
        { title: "Standards Aligned", desc: "Built around common security and privacy expectations." },
        { title: "Risk Reduction", desc: "Reduce risk and increase trust with customers and stakeholders." },
      ],
      contactTitle: "Contact Zora Global AI",
      contactSubtitle: "Tell us about your data protection needs.",
      messageLabel: "Tell us about your data protection needs...",
      submitLabel: "Submit Project",
    },
  },
  /* =========================================================
   CUSTOM ENTERPRISE SOFTWARE (ADDED CONTENT)
========================================================= */

"custom-enterprise-software": {
  "custom-enterprise-software-development": {
    heroTitle: "Custom Enterprise Software Development",
    heroSubtitle:
      "Scalable CRM, ERP, HRMS, and internal enterprise systems engineered for performance, security, and long-term business growth.",
    primaryCta: "Get Started",
    topBlocks: [
      {
        title: "Enterprise CRM & Business Applications",
        desc: "Centralize customer data, automate workflows, and improve operational visibility with custom-built CRM systems.",
      },
      {
        title: "ERP & Process Automation",
        desc: "Finance, inventory, supply chain, and operational ERP solutions built using agile engineering practices.",
      },
      {
        title: "HRMS & Internal Systems",
        desc: "Secure HRMS platforms supporting payroll, compliance, employee management, and performance tracking.",
      },
    ],
    overview:
      "Our enterprise software solutions help organizations streamline operations, automate workflows, and improve decision-making through scalable and secure custom-built systems.",
    deliverySteps: [
      { title: "Requirements Analysis", desc: "Business analysis, architecture planning, and technology selection." },
      { title: "Design & Development", desc: "Modern architecture with secure coding and agile delivery." },
      { title: "Testing & Deployment", desc: "Quality assurance, monitoring, and lifecycle optimization." },
    ],
    whyChoose: [
      { title: "Enterprise Expertise", desc: "Proven enterprise SDLC and scalable architectures." },
      { title: "Secure & Scalable", desc: "Compliance-ready systems built for long-term growth." },
      { title: "Business-Driven Development", desc: "Solutions aligned with operational efficiency and ROI." },
    ],
    contactTitle: "Discuss Your Enterprise Software",
    contactSubtitle: "Tell us about your enterprise requirements and our experts will connect with you.",
    messageLabel: "Tell us about your project...",
    submitLabel: "Submit Project",
  },

  "crm-services": {
    heroTitle: "CRM Services",
    heroSubtitle:
      "Centralized CRM solutions that improve customer engagement, sales pipelines, and data-driven decision-making.",
    primaryCta: "Build Your CRM",
    topBlocks: [
      { title: "Sales CRM", desc: "Lead management, forecasting, and deal tracking systems." },
      { title: "Marketing Automation", desc: "Campaign automation and personalized customer journeys." },
      { title: "Customer Support CRM", desc: "Centralized ticketing and interaction tracking." },
    ],
    overview:
      "Our CRM platforms help businesses manage relationships, automate workflows, and improve customer experiences through scalable CRM systems.",
    deliverySteps: [
      { title: "Discovery", desc: "Analyze workflows and define CRM strategy." },
      { title: "Configuration", desc: "Customize modules, dashboards, and integrations." },
      { title: "Optimization", desc: "Deploy, train users, and continuously improve adoption." },
    ],
    whyChoose: [
      { title: "Tailored CRM", desc: "Designed around real business workflows." },
      { title: "Workflow Automation", desc: "Improve efficiency across departments." },
      { title: "Customer-Centric", desc: "Enhance engagement and long-term loyalty." },
    ],
    contactTitle: "Start Your CRM Project",
    contactSubtitle: "Talk to our CRM experts today.",
    messageLabel: "Tell us about your CRM requirements...",
    submitLabel: "Request CRM Consultation",
  },

  "it-staff-augmentation": {
    heroTitle: "IT Staff Augmentation Services",
    heroSubtitle:
      "Scale development teams quickly with experienced engineers across web, mobile, cloud, and enterprise projects.",
    primaryCta: "Get Started",
    topBlocks: [
      { title: "Software Developers", desc: "Frontend, backend, and full-stack engineers." },
      { title: "Mobile Teams", desc: "Android, iOS, and cross-platform experts." },
      { title: "Specialized Talent", desc: "DevOps, AI specialists, QA automation, and cloud engineers." },
    ],
    overview:
      "Our staff augmentation model enables rapid onboarding of vetted developers who integrate seamlessly with your internal teams.",
    deliverySteps: [
      { title: "Planning", desc: "Assess project scope and required skills." },
      { title: "Onboarding", desc: "Rapid hiring and developer integration." },
      { title: "Delivery", desc: "Agile collaboration and scalable team growth." },
    ],
    whyChoose: [
      { title: "Top Talent", desc: "Access experienced engineers quickly." },
      { title: "Flexible Engagement", desc: "Scale teams based on project needs." },
      { title: "Faster Delivery", desc: "Accelerate timelines without compromising quality." },
    ],
    contactTitle: "Hire Dedicated Developers",
    contactSubtitle: "Scale your team with our augmentation services.",
    messageLabel: "Tell us about your staffing needs...",
    submitLabel: "Submit Project",
  },
},

/* =========================================================
   CLOUD & INFRASTRUCTURE SERVICES (ADDED CONTENT)
========================================================= */

"cloud-infrastructure-services": {
  "cloud-migration-services": {
    heroTitle: "Cloud Migration Services",
    heroSubtitle:
      "Secure migration of applications, infrastructure, and data to modern cloud environments.",
    primaryCta: "Start Your Migration",
    topBlocks: [
      { title: "Application Migration", desc: "Rehost, refactor, or re-architect applications." },
      { title: "Data Migration", desc: "Secure database migration with validation and backups." },
      { title: "Infrastructure Modernization", desc: "Move on-premise workloads to scalable cloud platforms." },
    ],
    overview:
      "We help organizations modernize legacy systems and adopt cloud-native architectures across AWS, Azure, and Google Cloud.",
    deliverySteps: [
      { title: "Assessment", desc: "Define migration strategy and readiness." },
      { title: "Migration", desc: "Secure execution with minimal downtime." },
      { title: "Optimization", desc: "Performance and cost optimization." },
    ],
    whyChoose: [
      { title: "Multi-Cloud Expertise", desc: "AWS, Azure, and Google Cloud specialists." },
      { title: "Secure Migration", desc: "Best practices for compliance and continuity." },
      { title: "Business Alignment", desc: "Strategies aligned with growth goals." },
    ],
    contactTitle: "Start Your Cloud Journey",
    contactSubtitle: "Talk to our cloud experts today.",
    messageLabel: "Tell us about your migration needs...",
    submitLabel: "Submit Inquiry",
  },

  "application-integrations": {
    heroTitle: "Application Integrations",
    heroSubtitle:
      "Connect enterprise systems and applications for seamless data flow and automation.",
    primaryCta: "Get Started",
    topBlocks: [
      { title: "API Integrations", desc: "Secure API and third-party integrations." },
      { title: "Enterprise Integration", desc: "Connect ERP, CRM, and business platforms." },
      { title: "Process Automation", desc: "Automate workflows through synchronized data." },
    ],
    overview:
      "We unify enterprise systems into a connected ecosystem enabling real-time data exchange and operational efficiency.",
    deliverySteps: [
      { title: "Assessment", desc: "Design optimal integration architecture." },
      { title: "Integration", desc: "Implement APIs and synchronization workflows." },
      { title: "Optimization", desc: "Monitoring and continuous improvement." },
    ],
    whyChoose: [
      { title: "Integration Expertise", desc: "Deep enterprise system experience." },
      { title: "Secure & Scalable", desc: "Built for growth and compliance." },
      { title: "Operational Efficiency", desc: "Reduce manual work and errors." },
    ],
    contactTitle: "Connect Your Systems",
    contactSubtitle: "Talk to our integration specialists.",
    messageLabel: "Tell us about your integration needs...",
    submitLabel: "Submit Project",
  },
},
};
