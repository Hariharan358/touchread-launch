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
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden shadow-sm bg-[hsl(280,45%,45%)]">
            <span className="text-xs font-bold text-white">T</span>
          </div>
          <span className="text-sm font-bold font-display text-foreground">
            Touch<span className="gradient-text">Read</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-muted-foreground transition-all duration-300 hover:text-[hsl(280,45%,45%)]"
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
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.03] border border-black/[0.04] text-muted-foreground transition-all duration-300 hover:bg-[hsl(280,45%,45%,0.06)] hover:text-[hsl(280,45%,45%)] hover:border-[hsl(280,45%,45%,0.12)]"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-black/[0.04] px-6 py-5 text-center">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} TouchRead by PortableBraille. Made with{" "}
          <Heart size={10} className="text-rose-400 fill-rose-400" />{" "}
          for accessibility.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
