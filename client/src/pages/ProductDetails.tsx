import { motion } from "framer-motion";
import {
    ArrowLeft,
    CheckCircle2,
    Bluetooth,
    Battery,
    Package,
    Cpu,
    Smartphone,
    Languages,
    ShieldCheck,
    ShoppingCart,
    ChevronRight,
    Star
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroDevice from "@/assets/hero-device.png";

const ProductDetails = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <main className="pt-28 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
                        <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                            <ArrowLeft size={14} /> Back to Home
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-black">Hable One</span>
                    </div>

                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Left: Product Media */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-gray-50 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img
                                    src={heroDevice}
                                    alt="Hable One Braille Keyboard"
                                    className="w-full h-full object-contain animate-float drop-shadow-2xl"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-gray-50 rounded-2xl p-4 aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-primary/20">
                                        <img src={heroDevice} alt={`Hable One View ${i}`} className="w-full h-full object-contain opacity-60" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                                Bestseller
                            </div>
                            <h1 className="text-4xl font-black text-black sm:text-6xl mb-4 leading-tight">
                                Hable One™ <br />
                                <span className="text-primary italic">Braille Keyboard</span>
                            </h1>

                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-4xl font-black text-black">€249.00</span>
                                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Free Worldwide Shipping</span>
                            </div>

                            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                                A revolutionary Braille keyboard designed for the visually impaired. Compact, powerful, and built to give you total control of your smartphone without ever touching the screen.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Revolutionary 6-button Braille layout",
                                    "Over 100 keyboard shortcuts",
                                    "Pocket-sized for total portability",
                                    "Sustainable recycled ABS plastic",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary" size={20} />
                                        <span className="font-bold text-black">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="btn-hable-primary flex-1 gap-3 text-sm py-4">
                                    Add to Cart <ShoppingCart size={18} />
                                </button>
                                <button className="btn-hable-outline flex-1 gap-3 text-sm py-4">
                                    Check Compatibility
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-black">1 Year</div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Warranty</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all">
                                        <Package size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-widest text-black">Free</div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">30m Support Session</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Showcase */}
                    <div className="mt-40 space-y-40">
                        {/* Type with Accuracy */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <img src="/typing-speed.png" alt="Type 400% Faster" className="w-full" />
                            </motion.div>
                            <div>
                                <h2 className="text-4xl font-black text-black mb-6">Type with accuracy</h2>
                                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                    Real buttons make typing so natural you don't need to wait to get back to your computer to write that long note, edit document or get your ideas out.
                                </p>
                            </div>
                        </div>

                        {/* Take it anywhere */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl font-black text-black mb-6">Take it anywhere</h2>
                                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                    The keyboard is smaller than a smartphone, yet the buttons remain comfortably sized. Its compact design makes it highly portable, perfect for typing on the go, even while standing.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2"
                            >
                                <img src="/portable.png" alt="Small and Portable" className="w-full" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Product Reviews Section */}
                    <div className="mt-40 border-t border-gray-100 pt-20">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                            <div className="flex items-center gap-8">
                                <button className="text-2xl font-black text-black border-b-4 border-black pb-2 px-1">
                                    Reviews <span className="text-gray-400 text-sm font-bold ml-1">44</span>
                                </button>
                                <button className="text-2xl font-black text-gray-400 hover:text-black transition-colors pb-2 px-1">
                                    Questions <span className="text-gray-400 text-sm font-bold ml-1">3</span>
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-[#1a8917] hover:bg-[#156d12] text-white px-6 py-2.5 rounded-lg text-sm font-black transition-colors">
                                    Ask a question
                                </button>
                                <button className="bg-[#1a8917] hover:bg-[#156d12] text-white px-6 py-2.5 rounded-lg text-sm font-black transition-colors">
                                    Write a review
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-3 mb-16">
                            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-600 transition-colors">
                                Most relevant <ChevronRight size={14} className="rotate-90" />
                            </button>
                            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-600 transition-colors">
                                All ratings <ChevronRight size={14} className="rotate-90" />
                            </button>
                            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-600 transition-colors">
                                With media
                            </button>
                        </div>

                        {/* Individual Reviews */}
                        <div className="space-y-20">
                            {[
                                {
                                    author: "Narcis B.",
                                    stars: 4,
                                    date: "17 days ago",
                                    verified: true,
                                    text: "Very handy for everyone who wants to develop new skills or visually impaired. I offered 4 stars cos it works better with iOS than Android, also Romanian special characters do not all function properly."
                                },
                                {
                                    author: "Rosanna A.",
                                    stars: 5,
                                    date: "1 month ago",
                                    verified: false,
                                    text: "The Hable 1 is an incredible little smart phone keyboard. It allows you to do everything you want on your smart phone without the frustration of trying to manoeuvre between screens and do different taps and swipes, and is ideal for anyone who finds navigating their smart phone difficult. Texting and messaging our so simple and an absolute pleasure. Now, instead of letting the whole world hear when I am dictating a message or an email, or trying to type on the horrible little on screen keyboard, I can privately, accurately and independently write my messages with the same privacy that is taken for granted by Sighted users. For me, as a completely blind person, it unlocks my smart phone to me and I am able to use functions that I had never been able to master. The follow-up support and customer care is 2nd to none with no query being too small and responses and solutions given freely. Very happy customer. 🥰"
                                },
                                {
                                    author: "rod c.",
                                    stars: 5,
                                    date: "7 months ago",
                                    verified: true,
                                    text: "Well I finally plucked up the courage to purchase the Hable one. When I first had an iPhone 5 I gave up my laptop and since then I have relied on an Apple magic Keyboard for most of my operations on the various iPhones that I have owned. So where I needed to have a bag or a pocket to carry my keyboard now the Hable clips into my pocket. Highly recommended for independence and scale."
                                }
                            ].map((review, i) => (
                                <div key={i} className="max-w-4xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, s) => (
                                                <Star
                                                    key={s}
                                                    size={16}
                                                    className={s < review.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-sm font-black text-black">{review.author}</span>
                                        {review.verified && (
                                            <div className="flex items-center gap-1">
                                                <CheckCircle2 size={12} className="text-green-600" />
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified buyer</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-600 font-medium leading-[1.8] text-[15px]">
                                        {review.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's in the box */}
                    <div className="mt-40 bg-hable-black rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl font-black mb-8 leading-tight">Everything you need to <span className="text-primary italic">master independence.</span></h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {[
                                        "Hable One Device",
                                        "USB-C Charging Cable",
                                        "Lanyard Wrist Strap",
                                        "Warranty Card",
                                        "30m Support Call",
                                        "Digital Manual Access"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                            <span className="font-bold text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 bg-white/5 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
                                <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-black">
                                        <Cpu size={32} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black italic">Sustainable Tech</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Recycled ABS Plastic</div>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-400 leading-relaxed italic">
                                    "We didn't just build a keyboard. We built a tool that feels like an extension of yourself. Durable, tactile, and responsible."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
