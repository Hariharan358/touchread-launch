import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24" style={{ background: "var(--hero-bg)" }}>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-20 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-display leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-8xl xl:text-9xl">
            Remember everything.
            <br />
            <span className="gradient-text">Communicate freely.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground font-light">
            A pocket-sized intelligent Braille device empowering blind and
            deaf-blind individuals with real-time, private communication.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#cta" className="btn-primary gap-3">
              <span>Pre-Order Now</span> <ArrowRight size={16} />
            </a>
            <a href="#solution" className="btn-outline-cyan gap-3">
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Device showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="relative mt-20 w-full max-w-lg"
        >
          <div className="relative mx-auto">
            <div className="rounded-[2rem] bg-[hsl(36,40%,94%)] border border-[hsl(36,25%,88%)] p-8 shadow-[0_20px_60px_hsl(30,10%,12%,0.06)]">
              <img
                src={heroDevice}
                alt="TouchRead — portable Braille assistive device"
                className="relative z-10 mx-auto w-full animate-float"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex items-center gap-16 justify-center flex-wrap"
        >
          {[
            { num: "285M+", label: "People impacted" },
            { num: "10×", label: "More affordable" },
            { num: "< 120g", label: "Ultra portable" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-display text-foreground lg:text-4xl">{s.num}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-semibold">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
