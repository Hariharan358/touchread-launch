import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { text: "The Hable 1 is an incredible little smart phone keyboard. It has made using my phone so much easier.", author: "Verified Customer", stars: 5 },
  { text: "The Hable Easy makes it a lot easier to use my smartphone for daily tasks.", author: "Verified Customer", stars: 5 },
  { text: "Super useful device for my independence. Highly recommend!", author: "Verified Customer", stars: 5 },
  { text: "Hable has truly changed how I interact with technology.", author: "Verified Customer", stars: 5 },
];

const userPhotos = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
];

const ShowcaseSection = () => (
  <section className="bg-white py-24 border-t border-black/[0.04]">
    <div className="mx-auto max-w-full px-6">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-bold text-black whitespace-nowrap">
          Trusted by thousands worldwide every day
        </h2>
        <div className="h-px bg-black/[0.1] w-full" />
      </div>

      {/* Photo Grid */}
      <div className="flex gap-1 overflow-hidden h-[300px] mb-20 lg:h-[400px]">
        {userPhotos.map((photo, i) => (
          <div key={i} className="flex-1 overflow-hidden transition-all duration-500 hover:flex-[1.5]">
            <img src={photo} className="w-full h-full object-cover" alt="User" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-16 underline decoration-1 underline-offset-8">Customer reviews</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-black/[0.04] rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="text-sm text-[#333] leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="text-xs font-bold text-black uppercase tracking-wider">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
