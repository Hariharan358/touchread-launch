import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="relative overflow-hidden py-28 lg:py-40" style={{ background: "var(--section-bg-b)" }}>
    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Get Started
        </p>

        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
          Join the accessibility
          <br />
          <span className="gradient-text">revolution</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground font-light leading-relaxed">
          Be among the first to experience TouchRead. Request early access and help shape the future of tactile communication.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="mailto:hello@touchread.io" className="btn-primary gap-3">
            <span>Request Early Access</span> <ArrowRight size={16} />
          </a>
          <a href="#features" className="btn-outline-cyan gap-3">
            Learn More
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-xs text-muted-foreground/60 font-semibold uppercase tracking-[0.15em]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            Free shipping
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            30-day guarantee
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            Secure checkout
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
