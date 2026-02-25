import { motion } from "framer-motion";
import { Shield, Sparkles, Cpu, Bluetooth } from "lucide-react";

const items = [
  { icon: Shield, label: "Built for Accessibility" },
  { icon: Sparkles, label: "Designed for Independence" },
  { icon: Cpu, label: "Edge AI Powered" },
  { icon: Bluetooth, label: "Bluetooth Enabled" },
];

const SocialProofBar = () => (
  <section className="relative border-y border-black/[0.04] overflow-hidden">
    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl" />

    <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 py-7 lg:justify-between lg:px-8">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="flex items-center gap-3 group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(280,45%,45%,0.07)] group-hover:bg-[hsl(280,45%,45%,0.12)] transition-colors duration-300">
            <item.icon size={16} className="text-[hsl(280,45%,45%)]" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground/80">{item.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofBar;
