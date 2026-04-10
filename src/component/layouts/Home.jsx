
import { Link } from "react-router-dom";
import { ShoppingCart, Truck, ShieldCheck, BadgeCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Fast Delivery",
    desc: "Quick and reliable shipping for all orders.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Secure Payments",
    desc: "Your payment information is fully protected.",
  },
  {
    icon: <BadgeCheck className="h-7 w-7" />,
    title: "Premium Quality",
    desc: "Carefully selected products you can trust.",
  },
];

const categories = ["Electronics", "Fashion", "Home & Living", "Beauty"];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="z-10"
          >
            <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
              Shop Smarter.
              <span className="block text-4xl sm:text-6xl mt-2 text-yellow-300">
                Live Better.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-white/90 text-lg">
              Discover high-quality products at unbeatable prices, delivered straight to your door.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold border border-white/30 bg-white/10 hover:bg-white/20 text-white shadow-lg"
                >
                  Shop Now <ShoppingCart className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 bg-white/10 hover:bg-white/20 text-white shadow-lg"
                >
                  Explore <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="h-80 w-80 rounded-3xl bg-white/10 flex items-center justify-center shadow-2xl relative">
              <Sparkles className="absolute top-4 right-4 text-yellow-300 animate-pulse" size={32} />
              <ShoppingCart className="h-32 w-32 text-white/80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn}
              className="rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition bg-white dark:bg-gray-900"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-amber-50">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Shop by Category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "#ede9fe" }}
                className="flex h-40 items-center justify-center rounded-2xl font-semibold shadow-sm hover:shadow-md transition cursor-pointer bg-white dark:bg-gray-900 text-indigo-700 dark:text-indigo-300 text-xl"
              >
                {cat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-bold"
        >
          Ready to Start Shopping?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-gray-600"
        >
          Join thousands of happy customers today.
        </motion.p>
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700 shadow-lg"
          >
            Browse Products
          </motion.button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
