import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const ProblemSection = () => (
  <section className="section-dark overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 block">The Digital Gap</span>
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Touchscreens weren't built with <br />
            <span className="text-primary italic italic">everyone</span> in mind.
          </h2>
          <p className="mt-8 text-xl text-gray-400 font-medium leading-relaxed">
            While technology advances, the physical connection to our devices is disappearing.
            For the blind community, navigating a glass surface is a constant source of frustration.
          </p>

          <div className="mt-12 space-y-6">
            {[
              { label: "Glass screens provide zero tactile feedback.", type: "problem" },
              { label: "Screen readers are slow and public.", type: "problem" },
              { label: "Independence is locked behind complex gestures.", type: "problem" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <XCircle className="text-primary shrink-0 mt-1" size={20} />
                <span className="text-lg font-bold text-gray-200">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-[2.5rem] bg-hable-dark border border-white/5 p-12 lg:p-16">
            <h3 className="text-2xl font-black text-white mb-8">The TouchRead Way</h3>
            <div className="space-y-8">
              {[
                { title: "Physical Control", desc: "Real buttons you can feel and trust.", icon: CheckCircle },
                { title: "Whisper Input", desc: "Silent, fast, and completely private.", icon: CheckCircle },
                { title: "Anytime, Anywhere", desc: "No flat surface needed. Use it on the go.", icon: CheckCircle },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{item.title}</h4>
                    <p className="text-gray-400 font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <img
                src="/mobile.jpeg"
                alt="TouchRead Technical Schematic"
                className="w-full opacity-80 hover:opacity-100 transition-opacity duration-500"
              />  <a href="#cta" className="btn-hable-primary w-full">
                I want this freedom
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
