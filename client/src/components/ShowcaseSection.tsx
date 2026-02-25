import { motion } from "framer-motion";

const cards = [
  { title: "Personal Notes", type: "note", color: "card-yellow", span: 22 },
  { title: "Design Objects", type: "image", color: "card-green", span: 30 },
  { title: "Digital Highlights", type: "quote", color: "card-pink", span: 18 },
  { title: "Tactile Patterns", type: "concept", color: "card-blue", span: 26 },
  { title: "Brain Maps", type: "image", color: "card-orange", span: 24 },
  { title: "AI Transcripts", type: "text", color: "card-purple", span: 20 },
  { title: "Voice Memos", type: "audio", color: "card-yellow", span: 28 },
  { title: "Scientific Links", type: "link", color: "card-green", span: 16 },
  { title: "Future Tech", type: "idea", color: "card-blue", span: 32 },
];

const ShowcaseSection = () => (
  <section id="showcase" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          The Mind Expansion
        </p>
        <h2 className="text-5xl font-display text-foreground sm:text-6xl leading-[1.1]">
          One place for <span className="gradient-text italic">everything.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground font-light text-lg">
          No need to organize, label or even tag. Your mind magically organizes and visualizes everything for you.
        </p>
      </motion.div>

      <div className="mymind-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.title + i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
            className={`mymind-card ${card.color} flex flex-col justify-end`}
            style={{ "--span": card.span } as React.CSSProperties}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                {card.type}
              </span>
              <h3 className="text-xl font-display leading-tight">{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
