import { motion } from "framer-motion";
import { Zap, MessageSquare, WifiOff, Watch, Lock, Package } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Braille Output",
    desc: "Instant text-to-Braille conversion with sub-second latency for seamless reading.",
  },
  {
    icon: MessageSquare,
    title: "Two-Way Communication",
    desc: "Type responses using the tactile keypad for full bidirectional interaction.",
  },
  {
    icon: WifiOff,
    title: "Offline AI Processing",
    desc: "On-device intelligence — no internet needed. Your data stays private.",
  },
  {
    icon: Watch,
    title: "Wearable Integration",
    desc: "Pairs with smartwatches and wearables for notifications on the go.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "End-to-end encryption ensures all communication remains confidential.",
  },
  {
    icon: Package,
    title: "Compact & Portable",
    desc: "Pocket-sized design weighing under 120g — take it everywhere.",
  },
];

const FeaturesGrid = () => (
  <section id="features" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Features
        </p>
        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Everything you <span className="gradient-text">need</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground font-light">
          Purpose-built for accessibility, privacy, and independence.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group"
          >
            <div className="rounded-3xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]">
              <div className="mb-6 flex items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-500 group-hover:bg-foreground/[0.07] w-14 h-14">
                <f.icon size={24} className="text-foreground/70" />
              </div>
              <h3 className="text-lg font-display text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-light">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
