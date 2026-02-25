import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const links = [
  { label: "About", href: "#" },
  { label: "Technology", href: "#technical" },
  { label: "Accessibility", href: "#impact" },
  { label: "Contact", href: "mailto:hello@touchread.io" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-white border-t border-black/[0.04]">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center gap-10 px-6 py-14 sm:flex-row sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden bg-[hsl(var(--primary))]">
            <span className="text-xs font-bold text-white">H</span>
          </div>
          <span className="text-sm font-bold font-display text-foreground">
            Hable
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-muted-foreground transition-all duration-300 hover:text-[hsl(var(--primary))]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, label: "GitHub" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Twitter, label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.03] border border-black/[0.04] text-muted-foreground transition-all duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-black/[0.04] px-6 py-5 text-center">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Hable. Making independence affordable.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
