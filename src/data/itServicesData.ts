// src/data/itServicesData.ts

export type ServiceItem = {
  slug: string; // ✅ added
  title: string;
  description: string;
  features: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  desc: string;
  items: ServiceItem[];
};

export const IT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "website-web-application-services",
    title: "Website & Web Application Services",
    desc: "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
    items: [
      {
        slug: "website-design-development",
        title: "Website Design & Development",
        description: "Modern, responsive, and SEO-optimized websites built for growth.",
        features: [
          "UI/UX Design",
          "Responsive Development",
          "SEO-Friendly Architecture",
          "Performance Optimization",
          "CMS Integration",
        ],
      },
      {
        slug: "web-application-development",
        title: "Web Application Development",
        description: "Secure and scalable web applications for business operations.",
        features: [
          "Custom Web App Development",
          "API Integration",
          "Authentication & Authorization",
          "Scalable Architecture",
          "Performance Optimization",
        ],
      },
      {
        slug: "ecommerce-platform-development",
        title: "E-Commerce Platform Development",
        description: "Conversion-focused and secure e-commerce platforms.",
        features: [
          "Custom Storefront Development",
          "Payment Gateway Integration",
          "Order & Inventory Management",
          "Security & Compliance",
          "Performance Optimization",
        ],
      },
      {
        slug: "saas-application-development",
        title: "SaaS Application Development",
        description: "Cloud-native SaaS platforms engineered for scale.",
        features: [
          "Multi-Tenant Architecture",
          "Subscription & Billing Systems",
          "Cloud-Native Design",
          "Security & Compliance",
          "CI/CD Pipelines",
        ],
      },
    ],
  },

  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "High-performance mobile applications for Android, iOS, and cross-platform environments.",
    items: [
      {
        slug: "android-app-development",
        title: "Android App Development",
        description: "Scalable Android applications with superior performance.",
        features: [
          "Native Android Development",
          "API Integration",
          "Performance Optimization",
          "Play Store Deployment",
          "App Security",
        ],
      },
      {
        slug: "ios-app-development",
        title: "iOS App Development",
        description: "Premium iOS applications for Apple devices.",
        features: [
          "Native iOS Development",
          "App Store Deployment",
          "Performance Optimization",
          "Security Best Practices",
          "API Integration",
        ],
      },
      {
        slug: "cross-platform-app-development",
        title: "Cross-Platform App Development",
        description: "Single codebase apps for iOS and Android.",
        features: [
          "Cross-Platform Architecture",
          "Reusable Components",
          "API Integration",
          "Performance Optimization",
          "App Store Deployment",
        ],
      },
    ],
  },

  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    desc: "Intelligent systems that automate processes and enable data-driven decisions.",
    items: [
      {
        slug: "chatbot-development",
        title: "Chatbot Development",
        description: "Conversational AI for customer engagement.",
        features: [
          "Natural Language Processing",
          "Omnichannel Deployment",
          "CRM Integration",
          "Analytics & Insights",
          "Custom Training",
        ],
      },
      {
        slug: "workflow-automation-rpa",
        title: "Workflow Automation & RPA",
        description: "Automated workflows for operational efficiency.",
        features: [
          "Process Automation",
          "Bot Development",
          "System Integration",
          "Monitoring & Optimization",
          "Compliance Handling",
        ],
      },
      {
        slug: "recommendation-engine-development",
        title: "Recommendation Engine Development",
        description: "Personalized recommendation systems.",
        features: [
          "Data Modeling",
          "Behavioral Analysis",
          "Algorithm Design",
          "Real-Time Processing",
          "Scalable Deployment",
        ],
      },
      {
        slug: "machine-learning-solutions",
        title: "Machine Learning Solutions",
        description: "Predictive and intelligent ML systems.",
        features: [
          "Predictive Modeling",
          "Model Training",
          "Data Engineering",
          "Deployment & Monitoring",
          "Optimization",
        ],
      },
      {
        slug: "computer-vision-solutions",
        title: "Computer Vision Solutions",
        description: "Visual intelligence for automation.",
        features: [
          "Image Recognition",
          "Object Detection",
          "Video Analytics",
          "Model Training",
          "Edge Deployment",
        ],
      },
      {
        slug: "aiot-solutions",
        title: "AIoT Solutions",
        description: "AI-powered IoT intelligence.",
        features: [
          "IoT Integration",
          "AI Analytics",
          "Real-Time Monitoring",
          "Edge Computing",
          "Scalable Architecture",
        ],
      },
    ],
  },

  {
    slug: "custom-enterprise-software",
    title: "Custom Enterprise Software",
    desc: "Enterprise-grade software solutions built for complex business needs.",
    items: [
      {
        slug: "custom-software-development",
        title: "Custom Software Development",
        description: "Tailored enterprise software solutions.",
        features: [
          "Requirement Analysis",
          "Custom Architecture",
          "Enterprise Integration",
          "Security Implementation",
          "Scalable Development",
        ],
      },
      {
        slug: "crm-systems",
        title: "CRM Systems",
        description: "Customer relationship management platforms.",
        features: [
          "Customer Data Management",
          "Sales Automation",
          "Reporting & Analytics",
          "Integration",
          "Customization",
        ],
      },
      {
        slug: "it-staff-augmentation",
        title: "IT Staff Augmentation",
        description: "Flexible access to skilled IT professionals.",
        features: [
          "Dedicated Development Teams",
          "Frontend & Backend Developers",
          "Full-Stack Engineers",
          "Mobile App Developers",
          "Cloud & DevOps Engineers",
        ],
      },
      {
        slug: "erp-systems",
        title: "ERP Systems",
        description: "Integrated enterprise resource planning systems.",
        features: [
          "Finance Management",
          "Supply Chain",
          "Reporting",
          "System Integration",
          "Security",
        ],
      },
      {
        slug: "hrms-platforms",
        title: "HRMS Platforms",
        description: "Human resource management systems.",
        features: [
          "Employee Management",
          "Payroll Processing",
          "Performance Tracking",
          "Compliance",
          "Reporting",
        ],
      },
      {
        slug: "inventory-asset-management-systems",
        title: "Inventory & Asset Management Systems",
        description: "Track and manage enterprise assets.",
        features: [
          "Asset Tracking",
          "Inventory Control",
          "Reporting",
          "Integration",
          "Scalability",
        ],
      },
    ],
  },

  {
    slug: "cloud-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable, and cost-optimized cloud solutions.",
    items: [
      {
        slug: "cloud-migration",
        title: "Cloud Migration",
        description: "Seamless migration to the cloud.",
        features: [
          "Assessment & Planning",
          "Data Migration",
          "Application Migration",
          "Security Configuration",
          "Post-Migration Support",
        ],
      },
      {
        slug: "cloud-architecture-setup",
        title: "Cloud Architecture Setup",
        description: "Robust cloud architecture design.",
        features: [
          "Architecture Design",
          "Security & Governance",
          "Scalability Planning",
          "Cost Optimization",
          "Monitoring",
        ],
      },
      {
        slug: "application-integrations",
        title: "Application Integrations",
        description: "Seamless system integrations.",
        features: [
          "API Integration",
          "Middleware Development",
          "Data Synchronization",
          "Security",
          "Monitoring",
        ],
      },
      {
        slug: "infrastructure-optimization",
        title: "Infrastructure Optimization",
        description: "Optimize infrastructure performance and cost.",
        features: [
          "Performance Tuning",
          "Cost Optimization",
          "Monitoring",
          "Security Enhancements",
          "Scalability",
        ],
      },
      {
        slug: "unified-communications-ucaas",
        title: "Unified Communications (UCaaS)",
        description: "Cloud-based communication platforms.",
        features: [
          "VoIP Solutions",
          "Video Conferencing",
          "Collaboration Tools",
          "Security",
          "Scalability",
        ],
      },
    ],
  },

  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security strategies to protect digital assets.",
    items: [
      {
        slug: "security-audits",
        title: "Security Audits",
        description: "Comprehensive security assessments.",
        features: [
          "Security Assessment",
          "Compliance Review",
          "Risk Analysis",
          "Reporting",
          "Recommendations",
        ],
      },
      {
        slug: "vulnerability-assessment",
        title: "Vulnerability Assessment",
        description: "Identify and mitigate vulnerabilities.",
        features: [
          "Vulnerability Scanning",
          "Penetration Testing",
          "Risk Analysis",
          "Reporting",
          "Mitigation Planning",
        ],
      },
      {
        slug: "threat-monitoring",
        title: "Threat Monitoring",
        description: "24/7 threat detection and response.",
        features: [
          "SOC Monitoring",
          "Incident Response",
          "Log Analysis",
          "Threat Intelligence",
          "Reporting",
        ],
      },
      {
        slug: "data-protection-compliance",
        title: "Data Protection & Compliance",
        description: "Protect sensitive data and ensure compliance.",
        features: [
          "Data Encryption",
          "Access Control",
          "Compliance Management",
          "Monitoring",
          "Audit Support",
        ],
      },
    ],
  },
];
