import { motion } from "framer-motion";
import { Smartphone, Zap, Move, Moon, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Smartphone Freedom",
    desc: "Navigate your phone from your pocket. Control apps, text, and browse without touching the screen.",
  },
  {
    icon: Zap,
    title: "Instant Typing",
    desc: "Unique Braille-based input that allows you to type faster than any traditional screen reader.",
  },
  {
    icon: Move,
    title: "Ultra Portable",
    desc: "Smaller than a smartphone and lighter than a set of keys. Take your independence anywhere.",
  },
  {
    icon: Moon,
    title: "Long Life",
    desc: "Intelligent battery management giving you up to a full month of use on a single charge.",
  },
  {
    icon: Heart,
    title: "Made for Users",
    desc: "Developed in collaboration with hundreds of blind individuals to ensure the perfect tactile feel.",
  },
  {
    icon: Globe,
    title: "Global Support",
    desc: "Used by thousands of people in over 30 countries. Supporting multiple languages and layouts.",
  },
];

const FeaturesGrid = () => (
  <section id="features" className="section-light relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="badge-hable mb-6">Capabilities</span>
          <h2 className="text-4xl font-black text-black sm:text-5xl lg:text-6xl">
            Design that <br />
            <span className="text-primary-foreground bg-primary px-2">empowers.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg text-gray-500 font-medium">
          Complexity is the enemy of accessibility. We build tools that are powerful on the inside, yet incredibly simple on the outside.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="product-card group"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-500 group-hover:bg-primary group-hover:rotate-6">
              <f.icon size={32} className="text-black transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-black text-black mb-4">{f.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
