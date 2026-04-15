import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Why Dealwel", href: "#why-dealwel" },
  { label: "Investment Opportunities", href: "#investment" },
  { label: "Contact Us", href: "#contact" },
];

const PROPERTY_TYPES = [
  "Residential Apartments",
  "Commercial Spaces",
  "Luxury Villas",
  "Office Suites",
  "Investment Plots",
];

const SOCIALS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer className="bg-[#0a2e38] text-white" id="contact">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0F4C5C] border border-white/20 flex items-center justify-center font-display font-bold text-sm text-white">
                DW
              </div>
              <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
                Dealwel Properties
              </span>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
              Trusted deals. Verified listings. Real results. Your partner for
              smart property decisions in Pune's finest neighbourhoods.
            </p>
            <p className="text-white/40 font-body text-xs leading-relaxed mb-6">
              RERA Reg. No: P52100012345 | MahaRERA
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid={`footer.${label.toLowerCase()}_link`}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0F4C5C] transition-smooth"
                >
                  <Icon size={16} className="text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-white/80 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className="text-white/60 hover:text-white font-body text-sm transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Property types */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-white/80 mb-5">
              Property Types
            </h4>
            <ul className="space-y-3">
              {PROPERTY_TYPES.map((type) => (
                <li key={type}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#properties")}
                    data-ocid={`footer.property_type_${type.toLowerCase().replace(/\s+/g, "_")}_link`}
                    className="text-white/60 hover:text-white font-body text-sm transition-smooth text-left"
                  >
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-white/80 mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  data-ocid="footer.phone_link"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-smooth"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-[#4db8cc]" />
                  <span className="font-body text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dealwelproperties.in"
                  data-ocid="footer.email_link"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-smooth"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#4db8cc]" />
                  <span className="font-body text-sm">
                    info@dealwelproperties.in
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#4db8cc]" />
                <span className="font-body text-sm leading-relaxed">
                  Baner Road, Baner
                  <br />
                  Pune, Maharashtra 411045
                </span>
              </li>
            </ul>

            {/* WhatsApp quick link */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20in%20Pune"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.whatsapp_link"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg text-xs font-body font-semibold text-white transition-smooth"
              style={{
                background: "rgba(37,211,102,0.2)",
                border: "1px solid rgba(37,211,102,0.35)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-[#25D366]"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs font-body">
          <span>© {year} Dealwel Properties. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
