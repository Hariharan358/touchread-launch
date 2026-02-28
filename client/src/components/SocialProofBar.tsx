import { motion } from "framer-motion";

const partners = [
  { name: "PHILIPS", subtext: "Innovation Award" },
  { name: "RNIB", subtext: "See differently" },
  { name: "AWARD WINNER", subtext: "2024" },
  { name: "CNIB", subtext: "FOUNDATION" },
  { name: "Vision Australia", subtext: "Blindness. Low Vision. Opportunity." },
];

const SocialProofBar = () => (
  <section className="bg-white py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="flex flex-col items-center text-center group grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="text-xl font-black tracking-tighter text-black mb-1">{p.name}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#666]">{p.subtext}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
