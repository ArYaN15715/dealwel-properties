import { MessageCircle, Phone, Search } from "lucide-react";

const ACTIONS = [
  {
    label: "Call",
    icon: Phone,
    href: "tel:+919876543210",
    ocid: "mobile_bar.call_button",
    pulse: false,
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20a%20property",
    ocid: "mobile_bar.whatsapp_button",
    pulse: true,
  },
  {
    label: "Browse",
    icon: Search,
    href: "#properties",
    ocid: "mobile_bar.browse_button",
    pulse: false,
  },
] as const;

function scrollToProperties() {
  const el = document.getElementById("properties");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="toolbar"
      aria-label="Quick actions"
    >
      {/* Gradient fade above the bar */}
      <div className="h-8 bg-gradient-to-t from-[#0F4C5C]/5 to-transparent pointer-events-none" />

      <div className="bg-[#0F4C5C] flex items-stretch">
        {ACTIONS.map(({ label, icon: Icon, href, ocid, pulse }) => {
          const isInternal = href.startsWith("#");

          const content = (
            <span className="flex flex-col items-center gap-1 py-3 px-2">
              <span
                className={[
                  "p-2 rounded-full bg-white/10 transition-smooth",
                  pulse ? "pulse-glow" : "",
                ].join(" ")}
              >
                <Icon size={18} className="text-white" strokeWidth={2} />
              </span>
              <span className="text-white/90 text-[10px] font-body font-medium tracking-wide uppercase">
                {label}
              </span>
            </span>
          );

          if (isInternal) {
            return (
              <button
                key={label}
                type="button"
                onClick={scrollToProperties}
                data-ocid={ocid}
                className="flex-1 flex flex-col items-center active:bg-white/10 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label={label}
              >
                {content}
              </button>
            );
          }

          return (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-ocid={ocid}
              className="flex-1 flex flex-col items-center active:bg-white/10 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label={label}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
