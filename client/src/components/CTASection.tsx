import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="relative overflow-hidden py-28 lg:py-40">
    {/* Solid dark contrast */}
    <div className="absolute inset-0 bg-[hsl(20,20%,10%)]" />

    <div className="orb w-[500px] h-[500px] top-[20%] left-[30%] animate-pulse-glow" style={{ background: "hsl(280 45% 45% / 0.08)", position: "absolute", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
    <div className="orb w-[400px] h-[400px] bottom-[10%] right-[20%] animate-float-slow" style={{ background: "hsl(340 65% 52% / 0.05)", position: "absolute", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at center, hsl(280 45% 70% / 0.4) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
    />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.07] border border-white/[0.1]"
        >
          <Sparkles className="text-purple-300" size={24} />
        </motion.div>

        <h2 className="text-3xl font-bold text-white font-display sm:text-4xl lg:text-5xl xl:text-6xl">
          Join the Accessibility
          <br />
          <span className="gradient-text-cyan italic">Revolution</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/55 leading-relaxed">
          Be among the first to experience TouchRead. Request early access and help shape the future of tactile communication.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="mailto:hello@touchread.io" className="btn-cyan gap-2 text-base px-10 py-5">
            <span>Request Early Access</span> <ArrowRight size={18} />
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-500 border border-white/15 text-white/80 hover:bg-white/[0.06] hover:border-white/25 gap-2">
            Learn More
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6 text-xs text-white/40"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Free shipping
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            30-day guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Secure checkout
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
