import { motion } from "framer-motion";
import { Grid3X3, Battery, Cpu, Bluetooth, MonitorSmartphone } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const features = [
  { icon: MonitorSmartphone, label: "Braille Display", desc: "Dynamic tactile output" },
  { icon: Grid3X3, label: "3×3 Tactile Keypad", desc: "Intuitive input system" },
  { icon: Battery, label: "Rechargeable Battery", desc: "12hr runtime" },
  { icon: Cpu, label: "Edge AI Chip", desc: "On-device processing" },
  { icon: Bluetooth, label: "Bluetooth Module", desc: "Seamless connectivity" },
];

const ShowcaseSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="orb orb-mauve w-[500px] h-[500px] top-[20%] right-[-15%] animate-float-faster" />
    <div className="orb orb-amber w-[300px] h-[300px] bottom-[10%] left-[10%] animate-float-slow" />

    <div className="relative z-10 mx-auto max-w-6xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(280,45%,45%,0.15)] bg-[hsl(280,45%,45%,0.05)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(280,45%,45%)]">
          Product Showcase
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          Engineered to <span className="gradient-text italic">Perfection</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative mx-auto mt-16 max-w-md"
      >
        <div className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-[hsl(280,45%,45%,0.06)] blur-[80px] animate-pulse-glow" />
        <div className="relative gradient-border rounded-3xl p-1">
          <div className="glass-card-strong rounded-[22px] p-8">
            <img
              src={heroDevice}
              alt="TouchRead device showcase"
              className="relative z-10 w-full drop-shadow-[0_12px_30px_rgba(80,50,100,0.08)] animate-float"
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="glass-card-strong flex flex-col items-center gap-3 p-5 transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 border border-[hsl(280,45%,45%,0.08)] text-[hsl(280,45%,45%)] transition-all duration-500 group-hover:shadow-md">
                <f.icon size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-foreground block">{f.label}</span>
                <span className="text-[10px] text-muted-foreground">{f.desc}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
