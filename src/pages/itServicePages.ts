import ItWebsiteWebApplicationServicesWebsiteDesignDevelopment from "./services/it/website-web-application-services/WebsiteDesignDevelopment";
import ItWebsiteWebApplicationServicesWebApplicationDevelopment from "./services/it/website-web-application-services/WebApplicationDevelopment";
import ItWebsiteWebApplicationServicesEcommercePlatformDevelopment from "./services/it/website-web-application-services/EcommercePlatformDevelopment";
import ItWebsiteWebApplicationServicesSaasApplicationDevelopment from "./services/it/website-web-application-services/SaasApplicationDevelopment";
import ItMobileApplicationDevelopmentAndroidAppDevelopment from "./services/it/mobile-application-development/AndroidAppDevelopment";
import ItMobileApplicationDevelopmentIosAppDevelopment from "./services/it/mobile-application-development/IosAppDevelopment";
import ItMobileApplicationDevelopmentCrossPlatformAppDevelopment from "./services/it/mobile-application-development/CrossPlatformAppDevelopment";
import ItAiAutomationSolutionsChatbotDevelopment from "./services/it/ai-automation-solutions/ChatbotDevelopment";
import ItAiAutomationSolutionsWorkflowAutomationRpa from "./services/it/ai-automation-solutions/WorkflowAutomationRpa";
import ItAiAutomationSolutionsRecommendationEngineDevelopment from "./services/it/ai-automation-solutions/RecommendationEngineDevelopment";
import ItAiAutomationSolutionsMachineLearningSolutions from "./services/it/ai-automation-solutions/MachineLearningSolutions";
import ItAiAutomationSolutionsComputerVisionSolutions from "./services/it/ai-automation-solutions/ComputerVisionSolutions";
import ItAiAutomationSolutionsAiotSolutions from "./services/it/ai-automation-solutions/AiotSolutions";
import ItCustomEnterpriseSoftwareCustomEnterpriseSoftwareDevelopment from "./services/it/custom-enterprise-software/CustomEnterpriseSoftwareDevelopment";
import ItCustomEnterpriseSoftwareCrmServices from "./services/it/custom-enterprise-software/CrmServices";
import ItCustomEnterpriseSoftwareItStaffAugmentation from "./services/it/custom-enterprise-software/ItStaffAugmentation";
import ItCloudInfrastructureServicesCloudMigrationServices from "./services/it/cloud-infrastructure-services/CloudMigrationServices";
import ItCloudInfrastructureServicesApplicationIntegrations from "./services/it/cloud-infrastructure-services/ApplicationIntegrations";
import ItCybersecuritySolutionsSecurityAudits from "./services/it/cybersecurity-solutions/SecurityAudits";
import ItCybersecuritySolutionsVulnerabilityAssessment from "./services/it/cybersecurity-solutions/VulnerabilityAssessment";
import ItCybersecuritySolutionsThreatMonitoring from "./services/it/cybersecurity-solutions/ThreatMonitoring";
import ItCybersecuritySolutionsDataProtectionCompliance from "./services/it/cybersecurity-solutions/DataProtectionCompliance";

export const IT_SERVICE_PAGES = {
  "website-web-application-services/website-design-development": ItWebsiteWebApplicationServicesWebsiteDesignDevelopment,
  "website-web-application-services/web-application-development": ItWebsiteWebApplicationServicesWebApplicationDevelopment,
  "website-web-application-services/ecommerce-platform-development": ItWebsiteWebApplicationServicesEcommercePlatformDevelopment,
  "website-web-application-services/saas-application-development": ItWebsiteWebApplicationServicesSaasApplicationDevelopment,
  "mobile-application-development/android-app-development": ItMobileApplicationDevelopmentAndroidAppDevelopment,
  "mobile-application-development/ios-app-development": ItMobileApplicationDevelopmentIosAppDevelopment,
  "mobile-application-development/cross-platform-app-development": ItMobileApplicationDevelopmentCrossPlatformAppDevelopment,
  "ai-automation-solutions/chatbot-development": ItAiAutomationSolutionsChatbotDevelopment,
  "ai-automation-solutions/workflow-automation-rpa": ItAiAutomationSolutionsWorkflowAutomationRpa,
  "ai-automation-solutions/recommendation-engine-development": ItAiAutomationSolutionsRecommendationEngineDevelopment,
  "ai-automation-solutions/machine-learning-solutions": ItAiAutomationSolutionsMachineLearningSolutions,
  "ai-automation-solutions/computer-vision-solutions": ItAiAutomationSolutionsComputerVisionSolutions,
  "ai-automation-solutions/aiot-solutions": ItAiAutomationSolutionsAiotSolutions,
  "custom-enterprise-software/custom-enterprise-software-development": ItCustomEnterpriseSoftwareCustomEnterpriseSoftwareDevelopment,
  "custom-enterprise-software/crm-services": ItCustomEnterpriseSoftwareCrmServices,
  "custom-enterprise-software/it-staff-augmentation": ItCustomEnterpriseSoftwareItStaffAugmentation,
  "cloud-infrastructure-services/cloud-migration-services": ItCloudInfrastructureServicesCloudMigrationServices,
  "cloud-infrastructure-services/application-integrations": ItCloudInfrastructureServicesApplicationIntegrations,
  "cybersecurity-solutions/security-audits": ItCybersecuritySolutionsSecurityAudits,
  "cybersecurity-solutions/vulnerability-assessment": ItCybersecuritySolutionsVulnerabilityAssessment,
  "cybersecurity-solutions/threat-monitoring": ItCybersecuritySolutionsThreatMonitoring,
  "cybersecurity-solutions/data-protection-compliance": ItCybersecuritySolutionsDataProtectionCompliance,
} as const;
