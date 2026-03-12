import NonItBusinessStrategyConsultingBusinessProcessOptimisation from "./services/non-it/business-strategy-consulting/BusinessProcessOptimisation";
import NonItBusinessStrategyConsultingOperationalEfficiencyConsulting from "./services/non-it/business-strategy-consulting/OperationalEfficiencyConsulting";
import NonItBusinessStrategyConsultingDigitalTransformationConsulting from "./services/non-it/business-strategy-consulting/DigitalTransformationConsulting";
import NonItStaffAugmentationWorkforceSolutionsNonItStaffAugmentation from "./services/non-it/staff-augmentation-workforce-solutions/NonItStaffAugmentation";
import NonItBrandingCreativeServicesBrandIdentityPositioning from "./services/non-it/branding-creative-services/BrandIdentityPositioning";
import NonItBrandingCreativeServicesUiUxCreativeDesign from "./services/non-it/branding-creative-services/UiUxCreativeDesign";
import NonItBrandingCreativeServicesCreativeAssetsMarketingDesign from "./services/non-it/branding-creative-services/CreativeAssetsMarketingDesign";
import NonItBrandingCreativeServicesWebsiteCorporateContent from "./services/non-it/branding-creative-services/WebsiteCorporateContent";
import NonItBrandingCreativeServicesContentManagementSupport from "./services/non-it/branding-creative-services/ContentManagementSupport";
import NonItAccountingFinancialOperationsAccountingManagement from "./services/non-it/accounting-financial-operations/AccountingManagement";
import NonItAccountingFinancialOperationsBookkeepingLedgerHandling from "./services/non-it/accounting-financial-operations/BookkeepingLedgerHandling";
import NonItAccountingFinancialOperationsFinancialReporting from "./services/non-it/accounting-financial-operations/FinancialReporting";
import NonItAccountingFinancialOperationsFinancialOperationsSupport from "./services/non-it/accounting-financial-operations/FinancialOperationsSupport";
import NonItDigitalMarketingServicesSeoContentGrowth from "./services/non-it/digital-marketing-services/SeoContentGrowth";
import NonItDigitalMarketingServicesPerformanceMarketing from "./services/non-it/digital-marketing-services/PerformanceMarketing";
import NonItDigitalMarketingServicesSocialMediaBranding from "./services/non-it/digital-marketing-services/SocialMediaBranding";
import NonItDigitalMarketingServicesLeadGenerationCampaigns from "./services/non-it/digital-marketing-services/LeadGenerationCampaigns";

export const NON_IT_SERVICE_PAGES = {
  "business-strategy-consulting/business-process-optimisation": NonItBusinessStrategyConsultingBusinessProcessOptimisation,
  "business-strategy-consulting/operational-efficiency-consulting": NonItBusinessStrategyConsultingOperationalEfficiencyConsulting,
  "business-strategy-consulting/digital-transformation-consulting": NonItBusinessStrategyConsultingDigitalTransformationConsulting,
  "staff-augmentation-workforce-solutions/non-it-staff-augmentation": NonItStaffAugmentationWorkforceSolutionsNonItStaffAugmentation,
  "branding-creative-services/brand-identity-positioning": NonItBrandingCreativeServicesBrandIdentityPositioning,
  "branding-creative-services/ui-ux-creative-design": NonItBrandingCreativeServicesUiUxCreativeDesign,
  "branding-creative-services/creative-assets-marketing-design": NonItBrandingCreativeServicesCreativeAssetsMarketingDesign,
  "branding-creative-services/website-corporate-content": NonItBrandingCreativeServicesWebsiteCorporateContent,
  "branding-creative-services/content-management-support": NonItBrandingCreativeServicesContentManagementSupport,
  "accounting-financial-operations/accounting-management": NonItAccountingFinancialOperationsAccountingManagement,
  "accounting-financial-operations/bookkeeping-ledger-handling": NonItAccountingFinancialOperationsBookkeepingLedgerHandling,
  "accounting-financial-operations/financial-reporting": NonItAccountingFinancialOperationsFinancialReporting,
  "accounting-financial-operations/financial-operations-support": NonItAccountingFinancialOperationsFinancialOperationsSupport,
  "digital-marketing-services/seo-content-growth": NonItDigitalMarketingServicesSeoContentGrowth,
  "digital-marketing-services/performance-marketing": NonItDigitalMarketingServicesPerformanceMarketing,
  "digital-marketing-services/social-media-branding": NonItDigitalMarketingServicesSocialMediaBranding,
  "digital-marketing-services/lead-generation-campaigns": NonItDigitalMarketingServicesLeadGenerationCampaigns,
} as const;
