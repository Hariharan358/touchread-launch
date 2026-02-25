import { motion } from "framer-motion";

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-[#f87171] text-white px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.1em] mb-10"
            >
              Smallest braille keyboard!
            </motion.div>

            <h1 className="text-7xl lg:text-9xl font-black text-black tracking-tighter mb-10">
              Hable One
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-[1.2] relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-2xl flex items-center justify-end pr-10">
              {/* Hand holding device */}
              <div className="relative z-20 transform -translate-x-10">
                <img
                  src="/hable-usage.png"
                  alt="Hable One in hand"
                  className="w-[350px] lg:w-[480px] drop-shadow-2xl"
                />
              </div>

              {/* Phone showing text */}
              <div className="relative z-10 -ml-20 transform translate-y-10">
                <img
                  src="/mobile.jpeg"
                  alt="Connected phone"
                  className="w-[220px] lg:w-[320px] rounded-[40px] shadow-2xl origin-bottom-right -rotate-6"
                />
              </div>

              {/* Background red dot decoration like in screenshot */}
              <div className="absolute top-1/2 left-0 w-3 h-3 bg-[#f87171] rounded-full" />
              <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-[#f87171]/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
