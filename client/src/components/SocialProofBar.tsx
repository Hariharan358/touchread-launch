import { motion } from "framer-motion";

const items = [
  "Built for Accessibility",
  "Designed for Independence",
  "Edge AI Powered",
  "Bluetooth Enabled",
];

const SocialProofBar = () => (
  <section className="relative border-y border-foreground/6 overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 md:gap-16 px-6 py-8 lg:justify-between lg:px-8">
      {items.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofBar;
