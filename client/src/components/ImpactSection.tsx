import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 285, suffix: "M+", label: "People with visual impairments globally" },
  { value: 90, suffix: "%", label: "Live in low-income settings" },
  { value: 10, suffix: "×", label: "More affordable than alternatives" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="gradient-text text-5xl font-extrabold sm:text-6xl lg:text-7xl font-display">
      {count}{suffix}
    </span>
  );
};

const ImpactSection = () => (
  <section id="impact" className="relative overflow-hidden py-28 lg:py-40">
    {/* Solid dark contrast section */}
    <div className="absolute inset-0 bg-[hsl(20,20%,10%)]" />

    <div className="orb w-[600px] h-[600px] top-[-10%] left-[20%] animate-pulse-glow" style={{ background: "hsl(280 45% 45% / 0.07)", position: "absolute", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
    <div className="orb w-[400px] h-[400px] bottom-[-10%] right-[20%] animate-float-slow" style={{ background: "hsl(340 65% 52% / 0.05)", position: "absolute", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at center, hsl(280 45% 70% / 0.4) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white font-display sm:text-4xl lg:text-5xl xl:text-6xl">
          Accessibility Is Not a Luxury.
          <br />
          <span className="gradient-text-cyan italic">It's a Right.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/55 text-base">
          Millions of people are excluded from the digital world. TouchRead is changing that — affordably and privately.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            className="text-center"
          >
            <div className="rounded-2xl p-8 transition-all duration-700 hover:-translate-y-2 bg-white/[0.04] border border-white/[0.07] backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/[0.11]">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-4 text-sm text-white/45">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
