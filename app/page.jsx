export default function Home() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-[var(--font-space-grotesk)]">
            One Platform.
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Every Startup Solution.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From idea to investor under one roof. Build, launch, and scale your startup with all the tools you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              Start Building
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)]">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Idea Validation',
                description: 'Test and validate your startup idea with real market data and feedback.',
              },
              {
                title: 'Business Planning',
                description: 'Create comprehensive business plans with AI-powered insights.',
              },
              {
                title: 'Funding Tools',
                description: 'Connect with investors and manage your funding rounds seamlessly.',
              },
              {
                title: 'Team Building',
                description: 'Find co-founders and build your dream team efficiently.',
              },
              {
                title: 'Legal Setup',
                description: 'Handle incorporation, contracts, and compliance with ease.',
              },
              {
                title: 'Growth Analytics',
                description: 'Track metrics and optimize your growth strategies.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[var(--font-space-grotesk)]">
            Built for Every Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold mb-4">Early Stage</h3>
              <p className="text-gray-600 mb-6">
                Perfect for founders just starting out. Get the tools to validate, plan, and launch your startup.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Market research and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Business model canvas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>MVP development guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold mb-4">Growth Stage</h3>
              <p className="text-gray-600 mb-6">
                Scale your startup with advanced tools for funding, team building, and growth optimization.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Investor network access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Hiring and team management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[var(--font-space-grotesk)]">
            Why Startup Builder?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We understand the challenges of building a startup. That's why we've created a comprehensive platform that brings together all the tools, resources, and connections you need to succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">$500M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-space-grotesk)]">
            Ready to Build Your Startup?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of founders who are turning their ideas into successful businesses.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
}
