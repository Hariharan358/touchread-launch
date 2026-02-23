import { motion } from "framer-motion";
import { Grid3X3, Battery, Cpu, Bluetooth, MonitorSmartphone } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const features = [
  { icon: MonitorSmartphone, label: "Braille Display", position: "top-0 left-0" },
  { icon: Grid3X3, label: "3×3 Tactile Keypad", position: "top-0 right-0" },
  { icon: Battery, label: "Rechargeable Battery", position: "bottom-0 left-0" },
  { icon: Cpu, label: "Edge AI Chip", position: "bottom-0 right-0 sm:bottom-auto sm:top-1/2 sm:right-0" },
  { icon: Bluetooth, label: "Bluetooth Module", position: "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-0 sm:left-0" },
];

const ShowcaseSection = () => (
  <section className="section-padding hero-gradient overflow-hidden">
    <div className="mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Product Showcase</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Engineered to Perfection</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto mt-16 max-w-sm"
      >
        <div className="pointer-events-none absolute inset-0 m-auto h-64 w-64 rounded-full bg-accent/15 blur-[60px]" />
        <img src={heroDevice} alt="TouchRead device showcase" className="relative z-10 w-full drop-shadow-2xl" />
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className="feature-card flex flex-col items-center gap-3 !p-5 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <f.icon size={20} />
            </div>
            <span className="text-xs font-semibold text-primary">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
