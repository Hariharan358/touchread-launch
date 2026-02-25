import { motion } from "framer-motion";
import heroDevice from "@/assets/hero-device.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#fafafa] pt-40 pb-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[100px] opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
          >


            <h1 className="text-7xl lg:text-9xl font-black text-black tracking-tighter mb-10">
              TouchRead
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-black leading-tight max-w-xl mb-12">
              The ultimate Braille Keyboard, boosting typing speed and offering full screen reader control on phones and tablets
            </p>

            <a href="#" className="inline-block bg-black hover:bg-black/90 text-white px-8 py-5 rounded-xl text-lg font-black transition-all">
              Shop Now!
            </a>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-xl">
              <img
                src={heroDevice}
                alt="Hable One — portable Braille keyboard"
                className="w-full drop-shadow-[0_50px_80px_rgba(0,0,0,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
