import { motion } from "framer-motion";
import { Smartphone, Bluetooth, Cpu, Grid3X3, User } from "lucide-react";

const steps = [
  { icon: Smartphone, label: "Smartphone" },
  { icon: Bluetooth, label: "Bluetooth" },
  { icon: Cpu, label: "ESP32" },
  { icon: Grid3X3, label: "Braille Actuators" },
  { icon: User, label: "User" },
];

const SolutionSection = () => (
  <section id="solution" className="section-padding bg-card">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex-1"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Solution</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
          Intelligent. Portable. Private.
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
          TouchRead converts digital text into real-time Braille through an elegant pipeline — from any smartphone to the user's fingertips, completely offline and private.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Real-time text-to-Braille conversion</li>
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> On-device AI processing — no cloud required</li>
          <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Two-way communication via tactile keypad</li>
        </ul>
      </motion.div>

      {/* Right - Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-all hover:glow-cyan">
                  <step.icon size={28} />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                  className="hidden h-0.5 w-8 bg-accent/40 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
