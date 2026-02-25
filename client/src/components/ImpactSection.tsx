import { motion } from "framer-motion";

const ImpactSection = () => (
  <section id="impact" className="bg-[#f9f9f9] py-24 lg:py-32 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
              alt="Independence made affordable"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-6">
            Making independence affordable
          </h2>
          <p className="text-lg leading-relaxed text-[#666] mb-10">
            Our goal is simple: create products that are smart, simple, and priced for real people everywhere.
          </p>
          <button className="btn-primary">
            Shop now
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
