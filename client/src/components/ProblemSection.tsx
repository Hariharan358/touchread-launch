import { motion } from "framer-motion";
import { MonitorOff, EyeOff, DollarSign } from "lucide-react";

const problems = [
  {
    icon: MonitorOff,
    title: "Digital Exclusion",
    description: "Over 2 billion digital interfaces remain inaccessible to visually impaired users worldwide.",
    borderColor: "bg-rose-400",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: EyeOff,
    title: "Lack of Privacy",
    description: "Screen readers broadcast sensitive content out loud, stripping away personal privacy.",
    borderColor: "bg-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: DollarSign,
    title: "Prohibitive Costs",
    description: "Traditional Braille displays cost $3,000–$15,000, putting them out of reach for most.",
    borderColor: "bg-purple-400",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

const ProblemSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="orb orb-rose w-[400px] h-[400px] top-[20%] right-[-5%] animate-float-slow" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/30 bg-rose-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose-500">
          The Problem
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          A World That Isn't Built
          <br />
          <span className="gradient-text italic">for Everyone</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="group"
          >
            <div className="glass-card-strong p-7 h-full transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]">
              <div className={`absolute inset-x-0 top-0 h-[2px] ${p.borderColor} rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${p.iconBg} ${p.iconColor} transition-all duration-500 group-hover:scale-110`}>
                <p.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-foreground font-display">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
