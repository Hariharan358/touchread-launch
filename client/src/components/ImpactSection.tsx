import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 285, suffix: "M+", label: "People with visual impairments globally" },
  { value: 90, suffix: "%", label: "Live in low-income settings" },
  { value: 10, suffix: "x", label: "More affordable than alternatives" },
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
    <span ref={ref} className="text-5xl font-display text-white sm:text-6xl lg:text-7xl">
      {count}{suffix}
    </span>
  );
};

const ImpactSection = () => (
  <section id="impact" className="relative overflow-hidden py-28 lg:py-40" style={{ background: "hsl(30, 10%, 12%)" }}>
    <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-display text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
          Accessibility is not a luxury.
          <br />
          <span className="italic text-[hsl(18,76%,62%)]">It's a right.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/40 text-lg font-light">
          Millions of people are excluded from the digital world. TouchRead is changing that — affordably and privately.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="text-center"
          >
            <div className="rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 bg-white/[0.04] border border-white/[0.06]">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-4 text-sm text-white/35 font-light">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
