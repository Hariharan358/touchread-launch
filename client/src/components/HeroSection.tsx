import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tags = [
  { label: "messages", className: "tag-notes" },
  { label: "articles", className: "tag-bookmarks" },
  { label: "books", className: "tag-inspiration" },
  { label: "conversations", className: "tag-articles" },
  { label: "alerts", className: "tag-images" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 hero-glow-container text-center">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl font-display leading-[0.95] tracking-tight text-foreground sm:text-8xl lg:text-9xl xl:text-[10rem]">
            Universal access.
            <br />
            <span className="opacity-80 italic">Communicate freely.</span>
          </h1>

          

          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a href="#cta" className="btn-primary flex items-center gap-4 text-xs font-bold tracking-[0.2em] bg-[hsl(18,76%,62%)] border-none hover:bg-[hsl(18,76%,55%)]">
              GET THE DEVICE <ArrowRight size={14} />
            </a>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
              <a href="#solution" className="hover:text-foreground transition-colors">How it works</a>
              <span className="opacity-20">/</span>
              <a href="#technical" className="hover:text-foreground transition-colors">Tech Specs</a>
              <span className="opacity-20">/</span>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pre-Order</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
