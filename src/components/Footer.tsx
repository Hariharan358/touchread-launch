import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "About", href: "#" },
  { label: "Technology", href: "#technical" },
  { label: "Accessibility", href: "#impact" },
  { label: "Contact", href: "mailto:hello@touchread.io" },
];

const Footer = () => (
  <footer className="border-t" style={{ background: "hsl(222 47% 6%)", borderColor: "hsl(217 33% 17%)" }}>
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 sm:flex-row sm:justify-between lg:px-8">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: "hsl(var(--cyan-glow))" }}>
          <span className="text-xs font-bold" style={{ color: "hsl(222 80% 11%)" }}>T</span>
        </div>
        <span className="text-sm font-bold" style={{ color: "hsl(210 40% 98%)" }}>TouchRead</span>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-6">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-xs transition-colors hover:text-accent" style={{ color: "hsl(215 20% 65%)" }}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" aria-label="GitHub" className="transition-colors hover:text-accent" style={{ color: "hsl(215 20% 65%)" }}>
          <Github size={18} />
        </a>
        <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-accent" style={{ color: "hsl(215 20% 65%)" }}>
          <Linkedin size={18} />
        </a>
      </div>
    </div>
    <div className="border-t px-6 py-5 text-center text-xs" style={{ borderColor: "hsl(217 33% 17%)", color: "hsl(215 20% 55%)" }}>
      © {new Date().getFullYear()} TouchRead by PortableBraille. All rights reserved.
    </div>
  </footer>
);

export default Footer;
