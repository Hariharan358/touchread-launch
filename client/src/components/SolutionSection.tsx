import { motion } from "framer-motion";
import { Smartphone, Bluetooth, Cpu, Grid3X3, User, ArrowRight } from "lucide-react";

const steps = [
  { icon: Smartphone, label: "Smartphone", color: "bg-purple-500" },
  { icon: Bluetooth, label: "Bluetooth", color: "bg-rose-500" },
  { icon: Cpu, label: "ESP32", color: "bg-emerald-500" },
  { icon: Grid3X3, label: "Braille Actuators", color: "bg-amber-500" },
  { icon: User, label: "User", color: "bg-violet-500" },
];

const SolutionSection = () => (
  <section id="solution" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="orb orb-plum w-[400px] h-[400px] top-[30%] left-[-10%] animate-float-slow" />

    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(280,45%,45%,0.15)] bg-[hsl(280,45%,45%,0.05)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(280,45%,45%)]">
          The Solution
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          Intelligent. Portable.{" "}
          <span className="gradient-text italic">Private.</span>
        </h2>
        <p className="mt-5 max-w-md text-muted-foreground leading-relaxed text-base">
          TouchRead converts digital text into real-time Braille through an elegant pipeline — from any smartphone to the user's fingertips, completely offline and private.
        </p>
        <ul className="mt-7 space-y-4">
          {[
            "Real-time text-to-Braille conversion",
            "On-device AI processing — no cloud required",
            "Two-way communication via tactile keypad",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-50 border border-[hsl(280,45%,45%,0.12)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(280,45%,45%)]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <div className="glass-card-strong rounded-3xl p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5, type: "spring" }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl`}>
                    <step.icon size={26} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                    className="hidden sm:block mb-6"
                  >
                    <ArrowRight size={16} className="text-purple-300" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
