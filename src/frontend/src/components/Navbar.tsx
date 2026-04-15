import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Why Dealwel", href: "#why-dealwel" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-3 group"
            aria-label="Dealwel Properties — go to top"
            data-ocid="navbar.logo_link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div
              className={[
                "w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm transition-smooth",
                scrolled
                  ? "bg-[#0F4C5C] text-white"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/30",
              ].join(" ")}
            >
              DW
            </div>
            <span
              className={[
                "font-display font-bold text-sm tracking-widest uppercase transition-smooth",
                scrolled ? "text-foreground" : "text-white",
              ].join(" ")}
            >
              Dealwel Properties
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className={[
                  "text-sm font-body font-medium tracking-wide transition-smooth hover:opacity-100",
                  scrolled
                    ? "text-foreground/70 hover:text-[#0F4C5C]"
                    : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollTo("#contact")}
              data-ocid="navbar.cta_button"
              className="bg-[#0F4C5C] hover:bg-[#0d3d4a] text-white font-body font-medium text-sm px-5 py-2 rounded-lg transition-smooth hover-glow-primary"
            >
              Get Expert Advice
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {menuOpen ? (
              <X
                className={scrolled ? "text-foreground" : "text-white"}
                size={22}
              />
            ) : (
              <Menu
                className={scrolled ? "text-foreground" : "text-white"}
                size={22}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-elevated animate-visible shuttle-in-up"
          data-ocid="navbar.mobile_menu"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className="text-left px-4 py-3 rounded-lg text-foreground/80 font-body font-medium text-sm hover:bg-muted hover:text-[#0F4C5C] transition-smooth"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <Button
                type="button"
                onClick={() => scrollTo("#contact")}
                data-ocid="navbar.mobile_cta_button"
                className="w-full bg-[#0F4C5C] hover:bg-[#0d3d4a] text-white font-body font-medium text-sm py-3 rounded-lg transition-smooth"
              >
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
