import Counter from "./Counter";

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-28 px-6 border-b border-blue-900/40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-16">
          Measurable Business Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              <Counter target={40} suffix="%+" />
            </h3>
            <p className="text-gray-500 text-sm">
              Operational Cost Reduction
            </p>
          </div>

          <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              <Counter target={3} suffix="x" />
            </h3>
            <p className="text-gray-500 text-sm">
              Faster Decision Making
            </p>
          </div>

          <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              <Counter target={99.9} suffix="%" />
            </h3>
            <p className="text-gray-500 text-sm">
              Platform Uptime
            </p>
          </div>

          <div className="p-8 bg-[#0b1220] border border-blue-900/40 rounded-2xl">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">
              <Counter target={60} suffix="%+" />
            </h3>
            <p className="text-gray-500 text-sm">
              Customer Satisfaction Increase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
