import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ NEW: navbar ref for measuring height
  const navRef = useRef<HTMLElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // ✅ IMPORTANT: useLayoutEffect so height is set BEFORE paint
  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setVar = () => {
      const h = Math.ceil(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="bg-[#0b0618] text-white border-b border-white/10 fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            closeAll();
            scrollTop();
          }}
        >
          <img
            src="/logo.png"
            alt="ZoraGlobalAI"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-purple-400 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-purple-400 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            About
          </Link>

          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className="hover:text-purple-400 transition"
                onClick={() => {
                  setDropdownOpen(false);
                  scrollTop();
                }}
              >
                Services
              </Link>

              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className="hover:text-purple-400 transition"
                aria-label="Toggle services menu"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a40] rounded-xl shadow-lg border border-white/10 overflow-hidden">
                <Link
                  to="/services/it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  IT Services
                </Link>
                <Link
                  to="/services/non-it"
                  className="block px-4 py-3 hover:bg-purple-600/20 transition"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          {/* ✅ UPDATED: Products opens external site */}
          <a
            href="https://www.zoraai.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Products
          </a>

          <Link
            to="/contact"
            className="hover:text-purple-400 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Book Appointment
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden"
          onClick={() => {
            setDropdownOpen(false);
            setMobileDropdownOpen(false);
            setMenuOpen((v) => !v);
          }}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a40] px-6 py-6 space-y-4 border-t border-white/10">
          <Link
            to="/"
            className="block hover:text-purple-400"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block hover:text-purple-400"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            About
          </Link>

          {/* ✅ FIX: In mobile, "Services" must navigate to /services (previously it was only a button) */}
          <div>
            <div className="flex items-center justify-between w-full">
              <Link
                to="/services"
                className="block hover:text-purple-400"
                onClick={() => {
                  closeAll();
                  scrollTop();
                }}
              >
                Services
              </Link>

              <button
                type="button"
                onClick={() => setMobileDropdownOpen((v) => !v)}
                className="p-1 hover:text-purple-400 transition"
                aria-label="Toggle services submenu"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-3 space-y-2">
                <Link
                  to="/services/it"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  IT Services
                </Link>
                <Link
                  to="/services/non-it"
                  className="block hover:text-purple-400"
                  onClick={() => {
                    closeAll();
                    scrollTop();
                  }}
                >
                  Non-IT Services
                </Link>
              </div>
            )}
          </div>

          {/* ✅ UPDATED: Products opens external site */}
          <a
            href="https://www.zoraai.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-purple-400"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Products
          </a>

          <Link
            to="/contact"
            className="block hover:text-purple-400"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Contact Us
          </Link>

          <Link
            to="/book-appointment"
            className="block bg-purple-600 px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition"
            onClick={() => {
              closeAll();
              scrollTop();
            }}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;