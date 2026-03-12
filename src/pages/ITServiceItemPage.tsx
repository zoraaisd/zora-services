import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { IT_SERVICE_PAGES } from "./itServicePages";

const ITServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const Page = IT_SERVICE_PAGES[key as keyof typeof IT_SERVICE_PAGES];

  if (!Page) {
    return <Navigate to="/services/it" replace />;
  }

  return <Page />;
};

export default ITServiceItemPage;
