import { motion } from "framer-motion";
import { Cpu, Cog, CircuitBoard, Battery, Bluetooth } from "lucide-react";

const specs = [
  { icon: Cpu, title: "ESP32 Core", desc: "Dual-core 240 MHz with built-in Wi-Fi & BLE" },
  { icon: Cog, title: "Solenoid Braille", desc: "Precision electromagnetic solenoid actuators" },
  { icon: CircuitBoard, title: "ULN2003 Driver", desc: "High-current Darlington driver array" },
  { icon: Battery, title: "1500mAh Battery", desc: "Rechargeable Li-Po with 12hr runtime" },
  { icon: Bluetooth, title: "BLE 5.0", desc: "Low-energy Bluetooth for seamless pairing" },
];

const TechnicalSection = () => (
  <section id="technical" className="section-padding hero-gradient">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Under the Hood</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Technical Excellence</h2>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {specs.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="feature-card group flex flex-col items-center text-center"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-shadow group-hover:glow-cyan">
              <s.icon size={26} />
            </div>
            <h3 className="text-sm font-bold text-primary">{s.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSection;
