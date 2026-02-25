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
  <section id="technical" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
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
          Under the Hood
        </p>
        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Technical <span className="gradient-text">excellence</span>
        </h2>
      </motion.div>

      <div className="grid gap-0 divide-y divide-foreground/8">
        {specs.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group py-8 md:py-10 flex items-center gap-6 md:gap-10"
          >
            <div className="flex items-center justify-center rounded-2xl bg-foreground/[0.04] w-14 h-14 shrink-0 transition-colors duration-300 group-hover:bg-foreground/[0.08]">
              <s.icon size={24} className="text-foreground/60" />
            </div>
            <div>
              <h3 className="text-lg font-display text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground font-light">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSection;
