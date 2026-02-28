import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#fafafa] pt-40 pb-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[100px] opacity-80" />
      <div className="bg-dot-grid absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
          >
            <h1
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.8] tracking-[-0.04em] text-black mb-10"
            >
              <span className="relative inline-block">
                Touch <br />
                <span className="text-primary italic">Read.</span>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-gray-500 leading-tight max-w-xl">
              The ultimate <span className="text-black font-bold font-display">Braille Keyboard</span>, boosting typing speed and offering full screen reader control.
            </p>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="flex-1 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl group">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              <img
                src={heroDevice}
                alt="TouchRead Portable Braille keyboard"
                className="w-full drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]  group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
