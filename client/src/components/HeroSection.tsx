import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20" style={{ background: "var(--hero-bg)" }}>
      {/* Warm Ambient Orbs */}
      <div className="orb orb-plum w-[600px] h-[600px] top-[5%] right-[-15%] animate-float-slow" />
      <div className="orb orb-rose w-[450px] h-[450px] bottom-[15%] left-[-10%] animate-float-faster" />
      <div className="orb orb-amber w-[300px] h-[300px] top-[55%] left-[35%] animate-pulse-glow opacity-50" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--plum) / 0.6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:gap-20 lg:px-8 lg:py-32">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(280,45%,45%,0.15)] bg-[hsl(280,45%,45%,0.05)] px-5 py-2 text-xs font-semibold tracking-widest text-[hsl(280,45%,45%)] uppercase backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            Introducing TouchRead
          </motion.span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground font-display sm:text-5xl lg:text-6xl xl:text-7xl">
            The Future of
            <br />
            <span className="gradient-text italic">Tactile Communication</span>
          </h1>

          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
            A pocket-sized intelligent Braille device empowering blind and deaf-blind individuals with real-time, private communication.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#cta" className="btn-primary gap-2">
              <span>Pre-Order Now</span> <ArrowRight size={16} />
            </a>
            <a href="#solution" className="btn-outline-cyan gap-2">
              <Play size={16} /> Watch Demo
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
          >
            {[
              { num: "285M+", label: "People impacted" },
              { num: "10×", label: "More affordable" },
              { num: "< 120g", label: "Ultra portable" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-lg font-bold gradient-text font-display">{s.num}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Device */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-96 w-96 rounded-full bg-[hsl(280,45%,45%,0.08)] blur-[100px] animate-pulse-glow" />

          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div className="absolute inset-0 rounded-3xl bg-white/40 border border-black/[0.04] backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.05)]" />
            <img
              src={heroDevice}
              alt="TouchRead — portable Braille assistive device"
              className="relative z-10 mx-auto w-full p-8 animate-float drop-shadow-[0_15px_35px_rgba(80,50,100,0.1)]"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[hsl(30,20%,99%)] z-20" style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
    </section>
  );
};

export default HeroSection;
