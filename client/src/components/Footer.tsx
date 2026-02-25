import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-white pt-24 pb-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-4 mb-20">
        {/* Brand */}
        <div className="col-span-1 lg:col-span-1">
          <a href="#" className="text-3xl font-black font-display tracking-tighter uppercase mb-8 block">
            TouchRead<span className="text-black bg-primary px-1">.</span>
          </a>
          <p className="text-gray-400 font-medium leading-relaxed mb-8 max-w-xs">
            Making the digital world accessible for everyone. High-quality assistive tech designed in the Netherlands.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-white hover:text-primary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Products",
            links: ["Hable One", "Hable Easy", "Refurbished", "Accessories"]
          },
          {
            title: "Support",
            links: ["User Manuals", "Video Tutorials", "Contact Help", "FAQ"]
          },
          {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Use", "Shipping Policy", "Refund Policy"]
          }
        ].map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-8">{group.title}</h3>
            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Hable. All rights reserved.
        </p>
        <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-gray-600">
          <span>Designed in Delft</span>
          <span className="text-primary">●</span>
          <span>Made for everyone</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
