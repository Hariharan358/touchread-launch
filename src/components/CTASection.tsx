import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="relative overflow-hidden py-24 lg:py-36" style={{ background: "var(--gradient-dark)" }}>
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" />
    </div>
    <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: "hsl(210 40% 98%)" }}>
          Join the Accessibility Revolution
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base" style={{ color: "hsl(215 20% 65%)" }}>
          Be among the first to experience TouchRead. Request early access and help shape the future of tactile communication.
        </p>
        <div className="mt-10">
          <a href="mailto:hello@touchread.io" className="btn-cyan gap-2 text-base">
            Request Early Access <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
