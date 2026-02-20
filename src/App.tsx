// src/App.tsx  (ONLY the Non-IT routes + imports you must add/replace)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CookieNotice from "./components/CookieNotice";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import ITServices from "./pages/ITServices";
import ITServiceCategoryPage from "./pages/ITServiceCategoryPage";
import ITServiceItemPage from "./pages/ITServiceItemPage";

import NonITServices from "./pages/NonITServices";
import NonITServiceCategoryPage from "./pages/NonITServiceCategoryPage"; // ✅ ADD
import NonITServiceItemPage from "./pages/NonITServiceItemPage"; // ✅ ADD

import Products from "./pages/Products";
import BookAppointment from "./pages/BookAppointment";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#0b0618] text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            {/* IT */}
            <Route path="/services/it" element={<ITServices />} />
            <Route path="/services/it/:categorySlug" element={<ITServiceCategoryPage />} />
            <Route path="/services/it/:categorySlug/:itemSlug" element={<ITServiceItemPage />} />

            {/* ✅ NON-IT (SAME FLOW AS IT) */}
            <Route path="/services/non-it" element={<NonITServices />} />
            <Route path="/services/non-it/:categorySlug" element={<NonITServiceCategoryPage />} />
            <Route path="/services/non-it/:categorySlug/:itemSlug" element={<NonITServiceItemPage />} />

            <Route path="/products" element={<Products />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
        <CookieNotice />
      </div>
    </Router>
  );
};

export default App;
