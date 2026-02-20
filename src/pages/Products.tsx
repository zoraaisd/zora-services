import React from "react";

const Products: React.FC = () => {
  return (
    <section className="bg-[#0b0618] text-white pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-purple-500">Innovative Products</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We build intelligent, scalable, and enterprise-ready digital
            products that help businesses automate, optimize, and grow.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Product 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              AI Automation Platform
            </h3>
            <p className="text-gray-400 mb-4">
              A powerful AI-driven system that automates workflows,
              improves efficiency, and reduces operational costs.
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              Learn More →
            </button>
          </div>

          {/* Product 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Cloud Management Suite
            </h3>
            <p className="text-gray-400 mb-4">
              Centralized cloud monitoring, security, and performance
              optimization for enterprise environments.
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              Learn More →
            </button>
          </div>

          {/* Product 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Business Intelligence Dashboard
            </h3>
            <p className="text-gray-400 mb-4">
              Real-time analytics and reporting tools that provide
              actionable insights for strategic decision-making.
            </p>
            <button className="text-purple-400 hover:text-purple-300 font-medium">
              Learn More →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
