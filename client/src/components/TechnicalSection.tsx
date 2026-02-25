import { motion } from "framer-motion";
import { Cpu, Bluetooth, Battery, Package, Ruler } from "lucide-react";

const specs = [
  { icon: Package, title: "Physical Build", desc: "Durable reinforced ABS with eco-friendly soft-touch finish." },
  { icon: Ruler, title: "Pocket-Ready", desc: "100mm x 45mm x 15mm. Weighs only 90 grams." },
  { icon: Bluetooth, title: "Universal Pairing", desc: "Bluetooth Low Energy 5.1. Works with iOS, Android, and PC." },
  { icon: Battery, title: "Massive Battery", desc: "Li-Po rechargeable. Up to 100 hours of active typing." },
  { icon: Cpu, title: "Tactile Keypad", desc: "Precision mechanical buttons with high-click longevity." },
];

const TechnicalSection = () => (
  <section id="technical" className="section-dark relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        <div className="lg:sticky lg:top-32 lg:w-1/2">
          <span className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 block">Technical Excellence</span>
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-7xl leading-[1.1]">
            Small size. <br />
            <span className="text-primary italic">Big impact.</span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 font-medium leading-relaxed">
            Every millimeter of the Hable One is engineered for comfort and durability.
            We've packed industry-leading technology into a device that fits in the palm of your hand.
          </p>

          <div className="mt-12">
            <a href="#cta" className="btn-hable-primary">
              Full Spec Sheet
            </a>
          </div>

          {/* Technical Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4"
          >
            <img
              src="/mobile.jpeg"
              alt="Hable Technical Schematic"
              className="w-full opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="mt-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Internal hardware integration schematic</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full space-y-6">
          {specs.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center rounded-2xl bg-primary w-14 h-14 shrink-0 shadow-[0_0_20px_rgba(224,36,36,0.2)]">
                  <s.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{s.title}</h3>
                  <p className="mt-2 text-gray-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalSection;
