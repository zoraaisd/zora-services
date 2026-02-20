import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0618] text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Zora Global AI
          </h2>
          <p className="text-sm text-gray-400">
            Empowering enterprises with AI-driven solutions,
            cloud transformation, and strategic consulting.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-purple-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-purple-400 transition">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/it"
                className="hover:text-purple-400 transition"
              >
                IT Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/non-it"
                className="hover:text-purple-400 transition"
              >
                Non-IT Services
              </Link>
            </li>
            <li>
              <Link
                to="/book-appointment"
                className="hover:text-purple-400 transition"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm text-gray-400">
            Email: info@zoraglobal.ai
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zora Global AI Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
