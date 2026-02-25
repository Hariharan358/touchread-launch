import { motion } from "framer-motion";

const manifestoItems = [
  { label: "expensive hardware", strike: true },
  { label: "audible screen readers", strike: true },
  { label: "zero privacy", strike: true },
  { label: "digital barriers", strike: true },
  { label: "complex interfaces", strike: true },
  { label: "social exclusion", strike: true },
];

const ProblemSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-10">
            The Accessibility Manifesto
          </p>
          <h2 className="text-4xl font-display text-foreground leading-[1.2] mb-8">
            In a world that speaks its data out loud, the right to a private digital life is often lost.
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Current assistive tools either cost as much as a car or strip away your privacy in public spaces.
            True independence shouldn't have a $15,000 price tag.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(18,76%,62%)] mb-10">
            We're ending:
          </p>
          <div className="space-y-4">
            {manifestoItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="text-3xl font-display text-foreground manifesto-strike"
              >
                {item.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
