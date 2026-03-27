export const NON_IT_SERVICE_PAGE_LOADERS = {
  "business-strategy-consulting/business-process-optimisation": () =>
    import("../pages/services/non-it/business-strategy-consulting/BusinessProcessOptimisation"),
  "business-strategy-consulting/operational-efficiency-consulting": () =>
    import("../pages/services/non-it/business-strategy-consulting/OperationalEfficiencyConsulting"),
  "business-strategy-consulting/digital-transformation-consulting": () =>
    import("../pages/services/non-it/business-strategy-consulting/DigitalTransformationConsulting"),
  "staff-augmentation-workforce-solutions/non-it-staff-augmentation": () =>
    import("../pages/services/non-it/staff-augmentation-workforce-solutions/NonItStaffAugmentation"),
  "branding-creative-services/brand-identity-positioning": () =>
    import("../pages/services/non-it/branding-creative-services/BrandIdentityPositioning"),
  "branding-creative-services/ui-ux-creative-design": () =>
    import("../pages/services/non-it/branding-creative-services/UiUxCreativeDesign"),
  "branding-creative-services/creative-assets-marketing-design": () =>
    import("../pages/services/non-it/branding-creative-services/CreativeAssetsMarketingDesign"),
  "branding-creative-services/website-corporate-content": () =>
    import("../pages/services/non-it/branding-creative-services/WebsiteCorporateContent"),
  "branding-creative-services/content-management-support": () =>
    import("../pages/services/non-it/branding-creative-services/ContentManagementSupport"),
  "accounting-financial-operations/accounting-management": () =>
    import("../pages/services/non-it/accounting-financial-operations/AccountingManagement"),
  "accounting-financial-operations/bookkeeping-ledger-handling": () =>
    import("../pages/services/non-it/accounting-financial-operations/BookkeepingLedgerHandling"),
  "accounting-financial-operations/financial-reporting": () =>
    import("../pages/services/non-it/accounting-financial-operations/FinancialReporting"),
  "accounting-financial-operations/financial-operations-support": () =>
    import("../pages/services/non-it/accounting-financial-operations/FinancialOperationsSupport"),
  "digital-marketing-services/seo-content-growth": () =>
    import("../pages/services/non-it/digital-marketing-services/SeoContentGrowth"),
  "digital-marketing-services/performance-marketing": () =>
    import("../pages/services/non-it/digital-marketing-services/PerformanceMarketing"),
  "digital-marketing-services/social-media-branding": () =>
    import("../pages/services/non-it/digital-marketing-services/SocialMediaBranding"),
  "digital-marketing-services/lead-generation-campaigns": () =>
    import("../pages/services/non-it/digital-marketing-services/LeadGenerationCampaigns"),
} as const;

export type NonITServicePageKey = keyof typeof NON_IT_SERVICE_PAGE_LOADERS;
export type NonITServicePageLoader = (typeof NON_IT_SERVICE_PAGE_LOADERS)[NonITServicePageKey];
