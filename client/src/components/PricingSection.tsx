import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Prototype",
    price: "$149",
    desc: "For early adopters and testers",
    features: ["6-cell Braille display", "BLE connectivity", "8-hour battery life", "Basic companion app"],
    featured: false,
  },
  {
    name: "Developer Kit",
    price: "$299",
    desc: "For developers and researchers",
    features: ["12-cell Braille display", "Full SDK access", "Edge AI module", "12-hour battery", "Priority support"],
    featured: true,
  },
  {
    name: "Institutional",
    price: "$499",
    desc: "For schools and organizations",
    features: ["12-cell Braille display", "Multi-device management", "Custom firmware", "Warranty & training", "Volume discounts"],
    featured: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-a)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Pricing
        </p>
        <h2 className="text-4xl font-display text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Choose your <span className="gradient-text">edition</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground font-light">
          Transparent pricing. No hidden fees. Shipping worldwide.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3 items-start">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className={`relative ${p.featured ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            <div className={`rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:-translate-y-2 ${p.featured
                ? 'bg-foreground text-[hsl(36,60%,97%)] shadow-[0_20px_60px_hsl(30,10%,12%,0.2)] hover:shadow-[0_24px_70px_hsl(30,10%,12%,0.25)]'
                : 'bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]'
              }`}>
              {p.featured && (
                <span className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-display">{p.name}</h3>
              <p className={`mt-1 text-sm font-light ${p.featured ? 'text-white/50' : 'text-muted-foreground'}`}>{p.desc}</p>

              <div className="mt-8">
                <span className="text-5xl font-display">{p.price}</span>
                <span className={`ml-2 text-sm ${p.featured ? 'text-white/40' : 'text-muted-foreground'}`}>USD</span>
              </div>

              <div className={`my-8 h-px ${p.featured ? 'bg-white/10' : 'bg-foreground/8'}`} />

              <ul className="space-y-4">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${p.featured ? 'text-white/60' : 'text-muted-foreground'}`}>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 ${p.featured ? 'bg-white/10' : 'bg-foreground/5'}`}>
                      <Check size={12} className={p.featured ? 'text-white/70' : 'text-foreground/50'} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-10 w-full flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${p.featured
                    ? 'bg-[hsl(36,60%,97%)] text-foreground hover:bg-[hsl(36,40%,93%)]'
                    : 'bg-foreground text-[hsl(36,60%,97%)] hover:bg-[hsl(30,10%,22%)]'
                  }`}
              >
                <span>Get Started</span> <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
