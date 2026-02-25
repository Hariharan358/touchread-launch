import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technical" },
  { label: "Pricing", href: "#pricing" },
  { label: "Impact", href: "#impact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Detect active section
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pointer-events-auto"
      >
        {/* Dynamic Island Container */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className={`
            relative mt-4 overflow-hidden
            transition-all duration-700 ease-out
            ${scrolled
              ? "rounded-[22px] shadow-[0_2px_24px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]"
              : "rounded-[28px] shadow-[0_4px_32px_rgba(0,0,0,0.04),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.25)]"
            }
          `}
        >
          {/* Transparent glassmorphism backdrop */}
          <div
            className={`
              absolute inset-0 transition-all duration-700
              ${scrolled
                ? "bg-white/35 backdrop-blur-2xl backdrop-saturate-150"
                : "bg-white/20 backdrop-blur-xl backdrop-saturate-150"
              }
            `}
          />

          {/* Subtle inner border glow */}
          <div className="absolute inset-0 rounded-[inherit] border border-white/15 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {/* Main bar */}
            <div
              className={`
                flex items-center gap-2 transition-all duration-500
                ${scrolled ? "px-4 py-2.5" : "px-5 py-3"}
              `}
            >
              {/* Logo */}
              <a href="#" className="flex items-center gap-2.5 group shrink-0">
                <div
                  className={`
                    relative flex items-center justify-center rounded-xl overflow-hidden
                    bg-[hsl(280,45%,45%)] transition-all duration-500
                    group-hover:bg-[hsl(280,45%,38%)]
                    ${scrolled ? "h-7 w-7 rounded-lg" : "h-8 w-8"}
                  `}
                >
                  <span className={`font-bold text-white ${scrolled ? "text-[11px]" : "text-xs"}`}>T</span>
                </div>
                <span className={`font-bold tracking-tight font-display text-foreground transition-all duration-500 ${scrolled ? "text-sm" : "text-[15px]"}`}>
                  Touch<span className="gradient-text">Read</span>
                </span>
              </a>

              {/* Separator */}
              <div className="hidden md:block h-5 w-px bg-black/[0.07] mx-1.5" />

              {/* Nav links — desktop */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`
                        relative px-3.5 py-1.5 text-[13px] font-medium rounded-xl
                        transition-all duration-300
                        ${isActive
                          ? "text-[hsl(280,45%,45%)] bg-[hsl(280,45%,45%,0.07)]"
                          : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"
                        }
                      `}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[hsl(280,45%,45%)] rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Separator */}
              <div className="hidden md:block h-5 w-px bg-black/[0.07] mx-1.5" />

              {/* CTA — desktop */}
              <a
                href="#cta"
                className={`
                  hidden md:inline-flex items-center justify-center gap-1.5 font-semibold tracking-wide
                  bg-[hsl(280,45%,45%)] text-white rounded-xl
                  transition-all duration-500 hover:bg-[hsl(280,45%,38%)]
                  hover:shadow-[0_4px_16px_hsl(280,45%,45%,0.3)]
                  ${scrolled ? "px-4 py-1.5 text-[11px]" : "px-5 py-2 text-xs"}
                `}
              >
                <Sparkles size={12} />
                Pre-Order
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden ml-auto text-foreground p-1.5 rounded-xl hover:bg-black/[0.05] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile expanded menu — morphs inside the island */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="px-4 pb-4 pt-1">
                    <div className="h-px bg-black/[0.06] mb-3" />
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link, i) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                          <motion.a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.25 }}
                            className={`
                              text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300
                              ${isActive
                                ? "text-[hsl(280,45%,45%)] bg-[hsl(280,45%,45%,0.06)]"
                                : "text-muted-foreground hover:bg-black/[0.03] hover:text-foreground"
                              }
                            `}
                          >
                            {link.label}
                          </motion.a>
                        );
                      })}
                    </div>
                    <a
                      href="#cta"
                      className="mt-3 flex items-center justify-center gap-2 bg-[hsl(280,45%,45%)] text-white text-xs font-semibold rounded-xl px-5 py-3 transition-all duration-300 hover:bg-[hsl(280,45%,38%)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Sparkles size={13} />
                      Pre-Order Now
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
