export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Modern React Apps
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              This Home component is built using React and Tailwind CSS only.
              Clean, responsive, and scalable.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Features
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature title="React Components" />
            <Feature title="Tailwind Styling" />
            <Feature title="Responsive Layout" />
          </div>
        </div>
      </section>

    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">
        Built using modern React best practices and utility-first Tailwind CSS.
      </p>
    </div>
  );
}
