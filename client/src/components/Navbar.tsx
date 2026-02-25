import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What", href: "#features", dot: "bg-[hsl(25,100%,60%)]" },
  { label: "Why", href: "#technical", dot: "bg-[hsl(45,100%,50%)]" },
  { label: "How", href: "#solution", dot: "bg-[hsl(330,100%,65%)]" },
  { label: "What's New", href: "#impact", dot: "bg-[hsl(150,100%,40%)]" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

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
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pointer-events-auto"
      >
        <div
          className={`
            transition-all duration-500
            ${scrolled
              ? "bg-[hsl(36,60%,97%,0.9)] backdrop-blur-xl border-b border-[hsl(36,25%,88%)]"
              : "bg-transparent"
            }
          `}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <span className="text-lg font-display text-foreground tracking-tight">
                  Touch<span className="gradient-text">Read</span>
                </span>
              </a>

              {/* Nav links — desktop */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`
                        flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300
                        ${isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      <span className={`w-1 h-1 rounded-full ${link.dot}`} />
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* CTA — desktop */}
              <a
                href="#cta"
                className="hidden md:inline-flex items-center justify-center rounded-full px-6 py-2 text-[11px] font-bold uppercase tracking-[0.15em] bg-foreground text-background transition-all duration-300 hover:bg-[hsl(30,10%,22%)]"
              >
                Pre-Order
              </a>

              {/* Mobile toggle */}
              <button
                className="md:hidden text-foreground p-2 rounded-full hover:bg-foreground/5 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="pb-6 pt-2">
                    <div className="h-px bg-foreground/6 mb-4" />
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
                              text-sm font-semibold uppercase tracking-[0.1em] py-3 px-4 rounded-2xl transition-all duration-300
                              ${isActive
                                ? "text-foreground bg-foreground/5"
                                : "text-muted-foreground hover:text-foreground"
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
                      className="mt-4 flex items-center justify-center bg-foreground text-background text-xs font-bold uppercase tracking-[0.15em] rounded-full px-6 py-3 transition-all duration-300 hover:bg-[hsl(30,10%,22%)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Pre-Order Now
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
