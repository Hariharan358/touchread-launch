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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary border border-primary/20"
            >
              Smallest braille keyboard worldwide
            </motion.div>

            <h1 className="text-6xl lg:text-[100px] xl:text-[120px] font-black leading-[0.85] tracking-tighter text-black mb-10">
              Smartphone <br />
              <span className="text-primary italic relative inline-block">
                TouchRead.
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-2 bg-primary/10 -z-10"
                />
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-gray-500 leading-tight max-w-xl mb-12">
              The ultimate <span className="text-black font-bold font-display">Braille Keyboard</span>, boosting typing speed and offering full screen reader control.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Link to="/products/hable-one" className="btn-hable-primary gap-3 py-6 px-12 text-base shadow-2xl shadow-primary/30">
                Shop Now <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-black text-black/40 uppercase tracking-widest leading-none">
                  <span className="text-black block text-sm">1.2k+</span>
                  Happy Users
                </div>
              </div>
            </div>
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
