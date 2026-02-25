import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User } from "lucide-react";

const navLinks = [
  { label: "Shop All", href: "#" },
  { label: "TouchRead", href: "#" },
  { label: "TouchRead Easy", href: "#" },
  { label: "Speechlabel", href: "#" },
  { label: "Stactiles", href: "#" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#f87171] py-2 px-6 text-center text-white text-[11px] font-medium tracking-tight flex items-center justify-center gap-1">
        <span>☆ Prefer to pay by invoice? Email info@touchread.com</span>
        <div className="hidden md:flex absolute right-8 gap-4 items-center">
          <span className="flex items-center gap-1 cursor-pointer hover:opacity-80">India (INR ₹) <Menu size={10} className="rotate-90" /></span>
          <span className="flex items-center gap-1 cursor-pointer hover:opacity-80">English <Menu size={10} className="rotate-90" /></span>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-white py-6"
          }`}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <div className="bg-[#f87171] hover:bg-[#f65a5a] text-white px-5 py-2.5 rounded-full transition-colors flex items-center justify-center">
                <span className="text-xl font-bold tracking-tight leading-none h-5">TouchRead</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-bold text-black hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="hidden md:block text-black hover:opacity-60 transition-opacity">
                <User size={24} strokeWidth={1.5} />
              </button>
              <button className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity relative group">
                <div className="relative">
                  <ShoppingBag size={24} strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">0</span>
                </div>
                <div className="hidden xl:flex flex-col items-start leading-none text-left">
                  <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Subtotal</span>
                  <span className="text-[13px] font-bold">€0,00</span>
                </div>
              </button>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden text-black"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white lg:hidden overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
