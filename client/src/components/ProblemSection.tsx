import { motion } from "framer-motion";

const problems = [
  {
    title: "Digital Exclusion",
    description: "Over 2 billion digital interfaces remain inaccessible to visually impaired users worldwide.",
  },
  {
    title: "Lack of Privacy",
    description: "Screen readers broadcast sensitive content out loud, stripping away personal privacy.",
  },
  {
    title: "Prohibitive Costs",
    description: "Traditional Braille displays cost $3,000 to $15,000, putting them out of reach for most.",
  },
];

const ProblemSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          The Problem
        </p>
        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          A world that isn't built
          <br />
          <span className="gradient-text">for everyone</span>
        </h2>
      </motion.div>

      <div className="grid gap-0 divide-y divide-foreground/8">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
          >
            <h3 className="text-2xl md:text-3xl font-display text-foreground md:w-72 shrink-0">{p.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground font-light">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
