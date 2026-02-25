import { motion } from "framer-motion";
import heroDevice from "@/assets/hero-device.png";

const specs = [
  { label: "Braille Display", desc: "Dynamic tactile output" },
  { label: "Tactile Keypad", desc: "Intuitive input system" },
  { label: "Rechargeable", desc: "12hr battery life" },
  { label: "Edge AI", desc: "On-device processing" },
  { label: "Bluetooth 5.0", desc: "Seamless connectivity" },
];

const ShowcaseSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Product Showcase
        </p>
        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Engineered to <span className="gradient-text">perfection</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto mt-16 max-w-md"
      >
        <div className="rounded-[2rem] bg-[hsl(36,40%,94%)] border border-[hsl(36,25%,88%)] p-10 shadow-[0_20px_60px_hsl(30,10%,12%,0.06)]">
          <img
            src={heroDevice}
            alt="TouchRead device showcase"
            className="w-full animate-float"
          />
        </div>
      </motion.div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {specs.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
            className="text-center"
          >
            <span className="text-sm font-bold text-foreground block font-display">{s.label}</span>
            <span className="text-[11px] text-muted-foreground">{s.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
