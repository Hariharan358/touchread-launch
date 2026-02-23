import { motion } from "framer-motion";
import { Zap, MessageSquare, WifiOff, Watch, Lock, Package } from "lucide-react";

const features = [
  { icon: Zap, title: "Real-Time Braille Output", desc: "Instant text-to-Braille conversion with sub-second latency for seamless reading." },
  { icon: MessageSquare, title: "Two-Way Communication", desc: "Type responses using the tactile keypad for full bidirectional interaction." },
  { icon: WifiOff, title: "Offline AI Processing", desc: "On-device intelligence — no internet needed. Your data stays private." },
  { icon: Watch, title: "Wearable Integration", desc: "Pairs with smartwatches and wearables for notifications on the go." },
  { icon: Lock, title: "Secure & Private", desc: "End-to-end encryption ensures all communication remains confidential." },
  { icon: Package, title: "Compact & Portable", desc: "Pocket-sized design weighing under 120g — take it everywhere." },
];

const FeaturesGrid = () => (
  <section id="features" className="section-padding bg-card">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Features</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Everything You Need</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Purpose-built for accessibility, privacy, and independence.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass-card-light group relative overflow-hidden p-7 transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
          >
            {/* Gradient border accent on hover */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent/20">
              <f.icon size={24} />
            </div>
            <h3 className="text-base font-bold text-primary">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
