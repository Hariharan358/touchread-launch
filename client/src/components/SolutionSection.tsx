import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const SolutionSection = () => (
  <section id="solution" className="section-gray relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
            <img
              src={heroDevice}
              alt="Hable One device"
              className="w-full animate-float"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]">
            <div className="text-4xl font-black text-black mb-1">100%</div>
            <div className="text-xs font-bold uppercase tracking-widest text-black/60">Tactile Confidence</div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge-hable mb-8">How it works</span>
          <h2 className="text-4xl font-black text-black sm:text-5xl lg:text-6xl leading-[1.05]">
            The world at your <br />
            <span className="text-primary-foreground bg-primary px-3 inline-block transform -skew-x-3">fingertips.</span>
          </h2>

          <div className="mt-12 space-y-10">
            {[
              {
                step: "01",
                title: "Connect via Bluetooth",
                desc: "Pair Hable with your iPhone or Android in seconds. No apps required, it just works."
              },
              {
                step: "02",
                title: "Navigate with Ease",
                desc: "Use the physical 6-button Braille layout to move between apps, type messages, and control everything."
              },
              {
                step: "03",
                title: "Total Freedom",
                desc: "Keep your phone in your pocket or bag. Navigate your world without anyone even noticing."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="text-3xl font-black text-primary/30 group-hover:text-primary transition-colors duration-300">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <a href="#cta" className="btn-hable-dark gap-3">
              Start your journey <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
