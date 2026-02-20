import React from "react";
import { useParams, Navigate } from "react-router-dom";
import MasterDetailServicePage from "../components/MasterDetailServicePage";
import { IT_SERVICE_CATEGORIES } from "../data/itServicesData";

const ITServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();

  const category = IT_SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/services/it" replace />;
  }

  return <MasterDetailServicePage category={category} backTo="/services/it" />;
};

export default ITServiceCategoryPage;
