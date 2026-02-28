import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="bg-primary py-24 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/2" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black text-black sm:text-6xl lg:text-7xl leading-[1.05]">
            Ready to change <br />
            your life?
          </h2>
          <p className="mt-8 text-xl text-black/70 font-semibold max-w-xl">
            Join thousands of individuals who have already found their independence.
            The TouchRead is ready for you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 shrink-0">
          <button className="btn-hable-dark group gap-3 py-6 px-12 text-lg">
            <span>Buy TouchRead</span> <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-col gap-2">
            <button className="inline-flex items-center justify-center gap-3 font-black uppercase tracking-widest text-black hover:text-white transition-colors duration-300">
              <Mail size={20} /> Or contact sales
            </button>
            <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest text-center">Free consultation</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
