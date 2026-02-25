import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User } from "lucide-react";

const navLinks = [
  { label: "Shop All", href: "#" },
  { label: "Hable One", href: "#hable-one" },
  { label: "Hable Easy", href: "#hable-easy" },
  { label: "Speechlabel", href: "#speechlabel" },
  { label: "Stactiles", href: "#stactiles" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#f87171]">
                <span className="text-white font-bold text-lg">hable</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-black hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="text-black hover:opacity-70 transition-opacity">
              <User size={22} strokeWidth={1.5} />
            </button>
            <button className="text-black hover:opacity-70 transition-opacity relative">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-[#10b981] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </button>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/[0.04]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
