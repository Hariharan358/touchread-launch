import { motion } from "framer-motion";
import { Zap, MessageSquare, WifiOff, Watch, Lock, Package } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Braille Output",
    desc: "Instant text-to-Braille conversion with sub-second latency for seamless reading.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverGlow: "bg-amber-200/30",
  },
  {
    icon: MessageSquare,
    title: "Two-Way Communication",
    desc: "Type responses using the tactile keypad for full bidirectional interaction.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    hoverGlow: "bg-purple-200/30",
  },
  {
    icon: WifiOff,
    title: "Offline AI Processing",
    desc: "On-device intelligence — no internet needed. Your data stays private.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverGlow: "bg-emerald-200/30",
  },
  {
    icon: Watch,
    title: "Wearable Integration",
    desc: "Pairs with smartwatches and wearables for notifications on the go.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    hoverGlow: "bg-violet-200/30",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "End-to-end encryption ensures all communication remains confidential.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    hoverGlow: "bg-rose-200/30",
  },
  {
    icon: Package,
    title: "Compact & Portable",
    desc: "Pocket-sized design weighing under 120g — take it everywhere.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    hoverGlow: "bg-teal-200/30",
  },
];

const FeaturesGrid = () => (
  <section id="features" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="orb orb-plum w-[400px] h-[400px] top-[10%] left-[-10%] animate-float-slow" />
    <div className="orb orb-amber w-[350px] h-[350px] bottom-[10%] right-[-8%] animate-float-faster" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(280,45%,45%,0.15)] bg-[hsl(280,45%,45%,0.05)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(280,45%,45%)]">
          Features
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          Everything You <span className="gradient-text italic">Need</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Purpose-built for accessibility, privacy, and independence.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="glass-card-strong relative overflow-hidden p-7 h-full transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)]">
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full ${f.hoverGlow} blur-[50px] opacity-0 group-hover:opacity-80 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className={`mb-5 flex items-center justify-center rounded-2xl ${f.iconBg} ${f.iconColor} transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`} style={{ width: '52px', height: '52px' }}>
                  <f.icon size={24} />
                </div>
                <h3 className="text-base font-bold text-foreground font-display">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
