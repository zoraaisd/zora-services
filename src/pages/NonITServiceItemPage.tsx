import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_PAGES } from "./nonItServicePages";

const NonITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const Page = NON_IT_SERVICE_PAGES[key as keyof typeof NON_IT_SERVICE_PAGES];

  if (!Page) {
    return <Navigate to="/services/non-it" replace />;
  }

  return <Page />;
};

export default NonITServiceItemPage;
