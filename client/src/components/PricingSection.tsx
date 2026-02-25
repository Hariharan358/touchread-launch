import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

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
  <section id="pricing" className="section-padding relative overflow-hidden" style={{ background: "var(--section-bg-b)" }}>
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="orb orb-plum w-[400px] h-[400px] top-[30%] left-[-10%] animate-float-slow" />
    <div className="orb orb-rose w-[350px] h-[350px] bottom-[10%] right-[-10%] animate-float-faster" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(280,45%,45%,0.15)] bg-[hsl(280,45%,45%,0.05)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[hsl(280,45%,45%)]">
          Pricing
        </span>
        <h2 className="mt-5 text-3xl font-bold text-foreground font-display sm:text-4xl lg:text-5xl">
          Choose Your <span className="gradient-text italic">Edition</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Transparent pricing. No hidden fees. Shipping worldwide.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3 items-start">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className={`relative ${p.featured ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            <div className={`${p.featured ? 'shimmer-border' : ''} rounded-2xl`}>
              <div className={`glass-card-strong rounded-2xl p-8 h-full transition-all duration-700 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] ${p.featured ? 'border-[hsl(280,45%,45%,0.18)] bg-[hsl(280,45%,45%,0.02)]' : ''}`}>
                {p.featured && (
                  <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200/50 px-3 py-1 text-xs font-semibold text-[hsl(280,45%,45%)]">
                    <Star size={10} className="fill-[hsl(280,45%,45%)]" />
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground font-display">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-7">
                  <span className="text-5xl font-extrabold gradient-text font-display">{p.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">USD</span>
                </div>

                <div className="my-7 h-px bg-black/[0.06]" />

                <ul className="space-y-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-50 shrink-0">
                        <Check size={12} className="text-[hsl(280,45%,45%)]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`mt-8 w-full ${p.featured ? "btn-primary" : "btn-outline-cyan"} justify-center gap-2`}
                >
                  <span>Get Started</span> <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
