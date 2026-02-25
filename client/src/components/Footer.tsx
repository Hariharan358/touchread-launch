import { Heart } from "lucide-react";

const links = [
  { label: "About", href: "#" },
  { label: "Technology", href: "#technical" },
  { label: "Accessibility", href: "#impact" },
  { label: "Contact", href: "mailto:hello@touchread.io" },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-foreground/6" style={{ background: "var(--section-bg-a)" }}>
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-center gap-10 px-6 py-16 sm:flex-row sm:justify-between lg:px-8">
        <span className="text-lg font-display text-foreground tracking-tight">
          Touch<span className="gradient-text">Read</span>
        </span>

        <nav className="flex flex-wrap items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-foreground/6 px-6 py-6 text-center">
        <p className="text-xs text-muted-foreground/60 flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} TouchRead by PortableBraille. Made with{" "}
          <Heart size={10} className="text-[hsl(18,76%,62%)] fill-[hsl(18,76%,62%)]" />{" "}
          for accessibility.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
