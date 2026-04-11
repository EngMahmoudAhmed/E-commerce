import { ShoppingBag, Truck, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

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

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  return (
    <section className="bg- py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Our Store
          </h2>
          <p className="mt-4 text-lg">
            We are an eCommerce platform dedicated to delivering quality,
            convenience, and trust to our customers.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 cursor-pointer gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: "#ccc" }}
                className="rounded-2xl border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
