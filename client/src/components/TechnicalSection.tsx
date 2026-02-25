import { motion } from "framer-motion";
import { Cpu, Cog, CircuitBoard, Battery, Bluetooth } from "lucide-react";

const specs = [
  { icon: Cpu, title: "ESP32 Core", desc: "Dual-core 240 MHz with built-in Wi-Fi & BLE", bg: "bg-purple-50", textColor: "text-purple-500" },
  { icon: Cog, title: "Solenoid Braille", desc: "Precision electromagnetic solenoid actuators", bg: "bg-emerald-50", textColor: "text-emerald-600" },
  { icon: CircuitBoard, title: "ULN2003 Driver", desc: "High-current Darlington driver array", bg: "bg-violet-50", textColor: "text-violet-500" },
  { icon: Battery, title: "1500mAh Battery", desc: "Rechargeable Li-Po with 12hr runtime", bg: "bg-amber-50", textColor: "text-amber-600" },
  { icon: Bluetooth, title: "BLE 5.0", desc: "Low-energy Bluetooth for seamless pairing", bg: "bg-rose-50", textColor: "text-rose-500" },
];

const TechnicalSection = () => (
  <section id="technical" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="orb orb-mauve w-[350px] h-[350px] top-[20%] right-[-5%] animate-float-slow" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-purple-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-500">
          Under the Hood
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          Technical <span className="gradient-text italic">Excellence</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {specs.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="glass-card-strong flex flex-col items-center text-center p-6 h-full transition-all duration-700 hover:-translate-y-3 hover:shadow-[var(--shadow-card-hover)]">
              <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${s.bg} ${s.textColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}>
                <s.icon size={28} />
              </div>
              <h3 className="text-sm font-bold text-foreground font-display">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalSection;
