import { motion } from "framer-motion";
import { MonitorOff, EyeOff, DollarSign } from "lucide-react";

const problems = [
  {
    icon: MonitorOff,
    title: "Digital Exclusion",
    description: "Over 2 billion digital interfaces remain inaccessible to visually impaired users worldwide.",
  },
  {
    icon: EyeOff,
    title: "Lack of Privacy",
    description: "Screen readers broadcast sensitive content out loud, stripping away personal privacy.",
  },
  {
    icon: DollarSign,
    title: "Prohibitive Costs",
    description: "Traditional Braille displays cost $3,000–$15,000, putting them out of reach for most.",
  },
];

const ProblemSection = () => (
  <section className="section-padding hero-gradient">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Problem</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          A World That Isn't Built for Everyone
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="feature-card group"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
              <p.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-primary">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
