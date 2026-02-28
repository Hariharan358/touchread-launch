import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

const products = [
  {
    name: "TouchRead",
    price: "249",
    tagline: "The world's smallest Braille keyboard.",
    features: ["All-day typing", "Pocket sized", "Bluetooth pairing"],
    image: heroDevice,
    popular: true
  },
  {
    name: "TouchRead — Refurbished",
    price: "189",
    tagline: "Eco-friendly, perfectly tested.",
    features: ["Same warranty", "Thoroughly tested", "Limited stock"],
    image: heroDevice,
    popular: false
  },
  {
    name: "TouchRead Accessories",
    price: "49",
    tagline: "Protection and portability.",
    features: ["Travel case", "Charging dock", "Lanyard set"],
    image: heroDevice,
    popular: false
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-gray relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center mb-24">
        <span className="badge-hable mb-6">Ready to start?</span>
        <h2 className="text-4xl font-black text-black sm:text-6xl lg:text-7xl leading-[1.1]">
          Select your <br />
          <span className="text-primary-foreground bg-primary px-3 inline-block transform -skew-x-3">independence.</span>
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`product-card flex flex-col h-full ${p.popular ? 'ring-4 ring-primary ring-offset-8' : ''}`}
          >
            {p.popular && (
              <div className="absolute top-6 right-6">
                <span className="bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Bestseller
                </span>
              </div>
            )}

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="h-40 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-black text-black mb-2">{p.name}</h3>
              <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6">{p.tagline}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-black text-gray-400">₹</span>
                <span className="text-5xl font-black text-black">{p.price}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {p.features.map((f) => (
                  <li key={f} className="text-gray-500 font-medium flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full py-5 rounded-full flex items-center justify-center gap-3 font-black uppercase tracking-widest transition-all duration-300 ${p.popular ? 'bg-primary text-black hover:bg-black hover:text-white' : 'bg-black text-white hover:bg-primary hover:text-black'
              }`}>
              Buy Now <ShoppingCart size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-400 font-medium">
          Free worldwide shipping on all TouchRead devices. <br />
          <a href="#" className="text-black font-black border-b-2 border-primary hover:border-black transition-colors">Compare all products</a>
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
