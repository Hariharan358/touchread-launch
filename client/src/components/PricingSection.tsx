import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$149",
    desc: "For personal independence.",
    features: ["6-cell Braille display", "BLE connectivity", "Mobile companion app"],
  },
  {
    name: "Professional",
    price: "$299",
    desc: "For power users & students.",
    features: ["12-cell Braille display", "Edge AI processing", "8-channel tactile haptics", "Priority support"],
    featured: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    desc: "For schools and NGOs.",
    features: ["Bulk device management", "Developer SDK access", "Custom firmware options", "On-site training"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-display text-foreground sm:text-7xl leading-[1.1]">
          Pricing
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-3xl font-display mb-2">{p.name}</h3>
            <p className="text-muted-foreground text-sm font-light mb-8">{p.desc}</p>

            <div className="mb-8">
              <span className="text-6xl font-display">{p.price}</span>
              {p.price !== "Free" && p.price !== "Custom" && <span className="text-sm font-light text-muted-foreground ml-2">USD</span>}
            </div>

            <div className="space-y-3 mb-12 flex-grow">
              {p.features.map((f) => (
                <div key={f} className="text-sm text-foreground/70 font-light flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-foreground/20" />
                  {f}
                </div>
              ))}
            </div>

            <a
              href="#cta"
              className={`inline-flex items-center justify-center rounded-full py-4 px-8 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${p.featured
                  ? 'bg-foreground text-background hover:bg-[hsl(30,10%,22%)]'
                  : 'border border-foreground/10 text-foreground hover:bg-foreground/5'
                }`}
            >
              Get Started <ArrowRight size={14} className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
