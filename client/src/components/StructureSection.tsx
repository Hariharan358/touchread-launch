import { motion } from "framer-motion";

const StructureSection = () => (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Image - Left */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                            alt="Structuring life with TouchRead"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Text - Right */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl sm:text-6xl font-black text-black leading-[1.1] mb-8">
                        Structure your life
                    </h2>
                    <p className="text-xl leading-relaxed text-[#666] font-medium mb-12 max-w-lg">
                        Label your medicine, clothes, and groceries. Use SpeechLabel to stick a label and record your voice. It's that simple.
                    </p>
                    <button className="btn-hable-dark px-12 py-5 text-base">
                        Browse Products
                    </button>
                </motion.div>
            </div>
        </div>
    </section>
);

export default StructureSection;
