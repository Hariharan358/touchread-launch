import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24 lg:pt-32">
      <div className="bg-dot-grid absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:gap-20 lg:px-8 lg:py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-black"
          >
            Award-winning assistive tech
          </motion.div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl xl:text-8xl">
            Smartphone access <br />
            <span className="text-primary-foreground bg-primary px-3 inline-block transform -skew-x-6">made simple.</span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-xl leading-relaxed text-gray-500 font-medium">
            Empowering blind and visually impaired individuals to navigate their digital world with confidence and independence.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#cta" className="btn-hable-primary gap-3 py-5 px-10">
              <span>View Products</span> <ArrowRight size={20} />
            </a>
            <a href="#solution" className="btn-hable-outline gap-3 py-5 px-10">
              <Play size={20} className="fill-current" /> Watch Video
            </a>
          </div>

          <div className="mt-16 flex items-center gap-12 justify-center lg:justify-start">
            {[
              { label: "Used in", value: "30+ Countries" },
              { label: "Weight", value: "< 100g" },
              { label: "Battery", value: "1 Month" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-black">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Product Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex-1 perspective-1000"
        >
          <div className="absolute inset-0 m-auto h-[120%] w-[120%] -z-10 bg-primary/5 rounded-full blur-[100px] animate-pulse" />

          <div className="relative mx-auto max-w-lg">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroDevice}
                alt="Hable One — portable Braille keyboard"
                className="w-full drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* Callouts */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">Easy Pairing</div>
              <div className="text-sm font-semibold text-black">Any Bluetooth Device</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">Tactile Feedback</div>
              <div className="text-sm font-semibold text-black">Physical Keypad</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
