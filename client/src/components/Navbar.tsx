import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Hable One", href: "#" },
  { label: "Products", href: "#features" },
  { label: "How it works", href: "#solution" },
  { label: "Support", href: "#technical" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black font-display tracking-tighter text-black uppercase">
              Hable<span className="text-primary-foreground bg-primary px-1 font-black">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-extrabold uppercase tracking-widest text-black hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex p-2 text-black hover:text-primary transition-colors">
              <ShoppingCart size={20} />
            </button>
            <a href="#cta" className="btn-hable-primary !py-2.5 !px-6 text-xs transform-none">
              Shop Now
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-black"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-extrabold uppercase tracking-widest text-black py-2"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-gray-50" />
              <a
                href="#cta"
                className="btn-hable-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
