import { motion } from "framer-motion";
import { Shield, Sparkles, Cpu, Bluetooth } from "lucide-react";

const items = [
  { icon: Shield, label: "Built for Accessibility" },
  { icon: Sparkles, label: "Designed for Independence" },
  { icon: Cpu, label: "Edge AI Powered" },
  { icon: Bluetooth, label: "Bluetooth Enabled" },
];

const SocialProofBar = () => (
  <section className="border-y border-border bg-card/60 backdrop-blur-sm">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-6 lg:justify-between lg:px-8">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex items-center gap-2.5"
        >
          <item.icon size={18} className="text-accent" />
          <span className="text-sm font-semibold tracking-wide text-primary">{item.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofBar;
