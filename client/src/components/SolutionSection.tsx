import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const SolutionSection = () => (
  <section id="solution" className="relative overflow-hidden py-32 lg:py-48" style={{ background: "hsl(30, 10%, 12%)" }}>
    <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-10">
          The future of tactile reading
        </p>

        <h2 className="text-5xl font-display text-white sm:text-6xl lg:text-8xl leading-[1.1] mb-12">
          Screens are silent.
          <br />
          <span className="italic text-[hsl(18,76%,62%)]">Your mind is not.</span>
        </h2>

        <div className="relative mx-auto max-w-2xl mt-16 group">
          <div className="absolute inset-0 bg-[hsl(18,76%,62%)]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl py-8 px-10 flex flex-col items-center justify-center gap-6 shadow-2xl backdrop-blur-sm">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="w-3 h-3 rounded-full bg-[hsl(18,76%,62%)] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <span className="text-2xl font-display text-white/40 tracking-tight">Real-time Braille Stream...</span>
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-white/50 text-xl font-light leading-relaxed">
          TouchRead bridges the gap between digital content and tactile sensation.
          Universal access, private communication, and intelligent conversion —
          all happening right at your fingertips.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
