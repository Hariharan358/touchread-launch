import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const SolutionSection = () => (
  <section id="solution" className="relative overflow-hidden py-28 lg:py-40" style={{ background: "hsl(30, 10%, 12%)" }}>
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
          The Solution
        </p>
        <h2 className="text-4xl font-display text-white sm:text-5xl lg:text-6xl leading-[1.1]">
          Intelligent. Portable.{" "}
          <span className="font-display italic text-[hsl(18,76%,62%)]">Private.</span>
        </h2>
        <p className="mt-6 max-w-md text-white/50 leading-relaxed text-lg font-light mx-auto lg:mx-0">
          TouchRead converts digital text into real-time Braille through an elegant pipeline — from any smartphone to the user's fingertips, completely offline and private.
        </p>

        <div className="mt-10 space-y-4">
          {[
            "Real-time text-to-Braille conversion",
            "On-device AI processing — no cloud required",
            "Two-way communication via tactile keypad",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/60 justify-center lg:justify-start">
              <span className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <a href="#features" className="btn-cyan gap-3">
            <span>Explore Features</span> <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1"
      >
        <div className="rounded-[2rem] bg-white/[0.05] border border-white/[0.08] p-8 md:p-10">
          <img
            src={heroDevice}
            alt="TouchRead device"
            className="w-full animate-float"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
