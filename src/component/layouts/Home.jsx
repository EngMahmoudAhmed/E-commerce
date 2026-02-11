import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Truck,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

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

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Shop Smarter.
              <span className="block">Live Better.</span>
            </h1>
            <p className="mt-6 max-w-lg">
              Discover high-quality products at unbeatable prices, delivered
              straight to your door.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold border border-white/30 hover:bg-white/10">
                <Link to="/products">Shop Now</Link>
                <ShoppingCart className="h-5 w-5" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 hover:bg-white/10">
                <Link to="/products">Explore</Link>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block">
            <div className="h-80 w-full rounded-3xl backdrop-blur"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
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
              <div
                key={index}
                className="flex h-40 items-center justify-center rounded-2xl font-semibold shadow-sm hover:shadow-md transition cursor-pointer"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Shopping?</h2>
        <p className="mt-4 text-gray-600">
          Join thousands of happy customers today.
        </p>
        <button className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700">
          <Link to="/products">Browse Products</Link>
        </button>
      </section>
    </main>
  );
};

export default Home;
