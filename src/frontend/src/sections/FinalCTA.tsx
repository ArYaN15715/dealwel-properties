import { AnimateOnScroll } from "@/hooks/use-scroll-animation";
import { Calendar, Phone } from "lucide-react";

interface ContactCard {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  headline: string;
  subtext: string;
  buttonLabel: string;
  buttonStyle: "teal" | "green" | "white";
  href: string;
  target?: string;
  rel?: string;
}

const CONTACT_CARDS: ContactCard[] = [
  {
    id: "call",
    icon: <Phone className="w-5 h-5 text-white" aria-hidden="true" />,
    iconBg: "#0F4C5C",
    title: "Call Us",
    headline: "+91 98765 43210",
    subtext: "Available Mon–Sat, 9am–7pm IST",
    buttonLabel: "Call Now",
    buttonStyle: "teal",
    href: "tel:+919876543210",
  },
  {
    id: "whatsapp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-white"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    iconBg: "#25D366",
    title: "WhatsApp",
    headline: "Chat with an Advisor",
    subtext: "Typically replies within minutes",
    buttonLabel: "Message Us",
    buttonStyle: "green",
    href: "https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20in%20Pune",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "consult",
    icon: <Calendar className="w-5 h-5 text-white" aria-hidden="true" />,
    iconBg: "rgba(255,255,255,0.15)",
    title: "Book a Consultation",
    headline: "Free 30-min Session",
    subtext: "In-person or virtual meeting",
    buttonLabel: "Book Now",
    buttonStyle: "white",
    href: "tel:+919876543210",
  },
];

const BUTTON_CLASSES: Record<ContactCard["buttonStyle"], string> = {
  teal: "bg-[#0F4C5C] text-white hover:bg-[#0d3d4a] focus-visible:ring-[#0F4C5C]/50",
  green:
    "bg-[#25D366] text-white hover:bg-[#1fb558] focus-visible:ring-[#25D366]/50",
  white:
    "bg-white text-[#0F4C5C] hover:bg-white/90 focus-visible:ring-white/50",
};

function ContactCardItem({
  card,
  index,
}: {
  card: ContactCard;
  index: number;
}) {
  const delays: (0 | 100 | 200)[] = [0, 100, 200];

  return (
    <AnimateOnScroll animation="scale" delay={delays[index] ?? 0}>
      <div
        className="rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-smooth group cursor-default"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.14)",
        }}
        data-ocid={`final_cta.item.${index + 1}`}
      >
        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth group-hover:scale-110"
          style={{ background: card.iconBg }}
        >
          {card.icon}
        </div>

        {/* Content */}
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/50">
            {card.title}
          </p>
          <p className="font-display font-bold text-white text-lg leading-tight">
            {card.headline}
          </p>
          <p className="font-body text-sm text-white/60">{card.subtext}</p>
        </div>

        {/* CTA button */}
        <a
          href={card.href}
          target={card.target}
          rel={card.rel}
          className={[
            "inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-body font-semibold text-sm",
            "transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            "min-h-[44px] w-full",
            BUTTON_CLASSES[card.buttonStyle],
          ].join(" ")}
          data-ocid={`final_cta.${card.id}_button`}
          aria-label={`${card.buttonLabel} — ${card.title}`}
        >
          {card.buttonLabel}
        </a>
      </div>
    </AnimateOnScroll>
  );
}

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-20 pb-28 md:pb-20 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F4C5C 0%, #1F3D2B 100%)",
      }}
      data-ocid="final_cta.section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <AnimateOnScroll animation="up">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Let's Find the Right Property for You
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Whether you're buying, investing, or just exploring — our team in
              Pune is ready to help.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CONTACT_CARDS.map((card, index) => (
            <ContactCardItem key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Bottom reassurance */}
        <AnimateOnScroll animation="up" delay={300}>
          <p
            className="font-body text-sm mt-8"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            No commitment required. Your first consultation is always free.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
