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
    <span ref={ref} className="gradient-text-cyan text-5xl font-extrabold sm:text-6xl">
      {count}{suffix}
    </span>
  );
};

const ImpactSection = () => (
  <section id="impact" className="relative overflow-hidden py-24 lg:py-36" style={{ background: "var(--gradient-dark)" }}>
    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[140px]" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "hsl(210 40% 98%)" }}>
          Accessibility Is Not a Luxury.<br />
          <span className="gradient-text-cyan">It's a Right.</span>
        </h2>
      </motion.div>

      <div className="mt-20 grid gap-12 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="text-center"
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="mt-3 text-sm" style={{ color: "hsl(215 20% 65%)" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
