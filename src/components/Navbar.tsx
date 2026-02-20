import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0b0618] text-white border-b border-white/10 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
            Zora
          </span>
          <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
            Global
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">

          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-purple-400 transition">
            About
          </Link>

          {/* Services with Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className="hover:text-purple-400 transition"
                onClick={() => setDropdownOpen(false)}
              >
                Services
              </Link>

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-purple-400 transition"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a40] rounded-xl shadow-lg border border-white/10">
                <Link
                  to="/services/it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  IT Services
                </Link>

                <Link
                  to="/services/non-it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          <Link to="/products" className="hover:text-purple-400 transition">
            Products
          </Link>

          <Link
            to="/book-appointment"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a40] px-6 py-6 space-y-4 border-t border-white/10">

          <Link
            to="/"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <div>
            <Link
              to="/services"
              className="block hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>

            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center gap-2 mt-2 hover:text-purple-400"
            >
              More Options
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/services/it"
                  className="block hover:text-purple-400"
                  onClick={() => setMenuOpen(false)}
                >
                  IT Services
                </Link>

                <Link
                  to="/services/non-it"
                  className="block hover:text-purple-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/products"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            to="/book-appointment"
            className="block bg-purple-600 px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
