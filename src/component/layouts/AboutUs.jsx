import { ShoppingBag, Truck, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Wide Product Selection",
    description:
      "We offer a carefully curated selection of high-quality products to meet your everyday needs.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Fast & Reliable Shipping",
    description:
      "Quick delivery with trusted logistics partners, right to your doorstep.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Secure Payments",
    description:
      "Your transactions are protected with industry-standard security measures.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Customer First",
    description:
      "Our support team is always ready to help and ensure your satisfaction.",
    icon: Users,
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Our Store
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are an eCommerce platform dedicated to delivering quality,
            convenience, and trust to our customers.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
