import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:gap-20 lg:px-8 lg:py-32">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Introducing TouchRead
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            The Future of<br />
            <span className="gradient-text">Tactile Communication</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
            A pocket-sized intelligent Braille device empowering blind and deaf-blind individuals with real-time, private communication.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#cta" className="btn-primary gap-2">
              Pre-Order Now <ArrowRight size={16} />
            </a>
            <a href="#solution" className="btn-outline-cyan gap-2">
              <Play size={16} /> Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Right - Device */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex-1"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-80 w-80 rounded-full bg-accent/20 blur-[80px] animate-glow-pulse" />
          <img
            src={heroDevice}
            alt="TouchRead — portable Braille assistive device"
            className="mx-auto w-full max-w-md animate-float drop-shadow-2xl lg:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
