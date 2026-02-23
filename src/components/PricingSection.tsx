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
  <section id="pricing" className="section-padding bg-card">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Pricing</span>
        <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Choose Your Edition</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Transparent pricing. No hidden fees. Shipping worldwide.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={p.featured ? "pricing-card-featured" : "pricing-card"}
          >
            {p.featured && (
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-primary">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold text-primary">{p.price}</span>
              <span className="ml-1 text-sm text-muted-foreground">USD</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-8 w-full ${p.featured ? "btn-cyan" : "btn-outline-cyan"} justify-center gap-2`}
            >
              Get Started <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
