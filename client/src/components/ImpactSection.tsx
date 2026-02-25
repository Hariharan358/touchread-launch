import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Countries Reached" },
  { value: 10000, suffix: "+", label: "Happy Users" },
  { value: 98, suffix: "%", label: "Independence Boost" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
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
    <span ref={ref} className="text-6xl font-black text-black sm:text-7xl lg:text-8xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => (
  <section id="impact" className="section-light relative overflow-hidden">
    <div className="bg-dot-grid absolute inset-0 z-0 opacity-[0.03]" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center mb-24">
        <span className="badge-hable mb-6">Global Impact</span>
        <h2 className="text-4xl font-black text-black sm:text-6xl lg:text-7xl leading-[1.1]">
          Independence is for <br />
          <span className="text-primary-foreground bg-primary px-3 inline-block transform skew-x-3">everyone.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-500 font-medium">
          Hable is more than a product. It's a worldwide community dedicated to breaking down digital barriers and building a more inclusive future.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="text-center p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="font-display">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-gray-400">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
