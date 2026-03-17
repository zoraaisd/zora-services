import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import ScrollToTop from "./components/ScrollToTop";

/* ================= MAIN PAGES ================= */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";
import BookAppointment from "./pages/BookAppointment";

/* ================= BLOG ================= */
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

/* ================= IT SERVICES ================= */
import ITServices from "./pages/ITServices";
import ITServiceCategoryPage from "./pages/ITServiceCategoryPage";
import ITServiceItemPage from "./pages/ITServiceItemPage";

/* ================= NON-IT SERVICES ================= */
import NonITServices from "./pages/NonITServices";
import NonITServiceCategoryPage from "./pages/NonITServiceCategoryPage";
import NonITServiceItemPage from "./pages/NonITServiceItemPage";

const App: React.FC = () => {
  return (
    <Router>

      <ScrollToTop />

      <div className="bg-[#0b0618] text-white min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          <Routes>

            {/* ---------- MAIN PAGES ---------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ---------- BLOG ---------- */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* ---------- IT SERVICES ---------- */}
            <Route path="/services/it" element={<ITServices />} />
            <Route
              path="/services/it/:categorySlug"
              element={<ITServiceCategoryPage />}
            />
            <Route
              path="/services/it/:categorySlug/:itemSlug"
              element={<ITServiceItemPage />}
            />

            {/* ---------- NON-IT SERVICES ---------- */}
            <Route path="/services/non-it" element={<NonITServices />} />
            <Route
              path="/services/non-it/:categorySlug"
              element={<NonITServiceCategoryPage />}
            />
            <Route
              path="/services/non-it/:categorySlug/:itemSlug"
              element={<NonITServiceItemPage />}
            />

            {/* ---------- OTHER ---------- */}
            <Route path="/book-appointment" element={<BookAppointment />} />

          </Routes>
        </main>

        {/* FOOTER + GLOBAL COMPONENTS */}
        <Footer />
        <CookieNotice />

      </div>
    </Router>
  );
};

export default App;