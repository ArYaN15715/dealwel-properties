import {
  AnimateOnScroll,
  useScrollAnimation,
} from "@/hooks/use-scroll-animation";
import { BookOpen, Headset, ShieldCheck, Zap } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
interface ValueCard {
  icon: React.ElementType;
  title: string;
  description: string;
  ocid: string;
}

interface Stat {
  value: string;
  label: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const VALUE_CARDS: ValueCard[] = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description: "Every listing is authenticated. No fake ads, no hidden fees.",
    ocid: "why_dealwel.card.1",
  },
  {
    icon: BookOpen,
    title: "Transparent Deals",
    description:
      "Clear contracts, full disclosure. You always know what you're getting.",
    ocid: "why_dealwel.card.2",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description:
      "Dedicated advisors available 6 days a week to guide your decision.",
    ocid: "why_dealwel.card.3",
  },
  {
    icon: Zap,
    title: "Fast Closures",
    description: "Average 14-day closing timeline. We remove the delays.",
    ocid: "why_dealwel.card.4",
  },
];

const STATS: Stat[] = [
  { value: "500+", label: "Verified Listings" },
  { value: "₹500 Cr+", label: "Transactions Closed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "14 Days", label: "Average Closure" },
];

// ── Stagger delays map (explicit classes to avoid Tailwind purge) ─────────────
const STAGGER_DELAYS = [0, 100, 200, 300] as const;
const DELAY_CLASS: Record<(typeof STAGGER_DELAYS)[number], string> = {
  0: "",
  100: "delay-100",
  200: "delay-200",
  300: "delay-300",
};

// ── Sub-components ────────────────────────────────────────────────────────────
function IconCircle({
  Icon,
  isVisible,
}: {
  Icon: React.ElementType;
  isVisible: boolean;
}) {
  return (
    <div
      className={[
        "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
        "transition-[box-shadow] duration-300",
        "group-hover:shadow-[0_0_20px_rgba(15,76,92,0.35)]",
        isVisible ? "gentle-float" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ background: "#0F4C5C" }}
    >
      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
    </div>
  );
}

function CardItem({
  card,
  delay,
}: {
  card: ValueCard;
  delay: (typeof STAGGER_DELAYS)[number];
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid={card.ocid}
      className={[
        "group relative bg-white rounded-xl p-6 shadow-subtle hover-lift",
        "flex flex-col gap-4 h-full",
        !isVisible ? "animate-hidden" : "",
        isVisible ? `animate-visible shuttle-scale ${DELAY_CLASS[delay]}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <IconCircle Icon={card.icon} isVisible={isVisible} />
      <div className="min-w-0">
        <h3 className="font-display font-bold text-[#1A2B2F] text-lg leading-snug mb-1">
          {card.title}
        </h3>
        <p className="font-body text-[#5A7080] text-sm leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  );
}

function StatsBar() {
  const { ref, isVisible } = useScrollAnimation({
    rootMargin: "0px 0px -30px 0px",
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-ocid="why_dealwel.stats_bar"
      className={[
        "mt-12 rounded-2xl overflow-hidden",
        !isVisible ? "animate-hidden" : "",
        isVisible ? "animate-visible shuttle-in-up delay-200" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ background: "#0F4C5C" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            data-ocid={`why_dealwel.stat.${idx + 1}`}
            className={[
              "flex flex-col items-center justify-center py-8 px-4 relative",
              idx < STATS.length - 1
                ? "after:hidden md:after:block after:absolute after:right-0 after:top-[35%] after:h-[30%] after:w-px after:bg-white/30"
                : "",
              idx === 1 ? "border-r border-white/20 md:border-r-0" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="font-display font-bold text-3xl md:text-4xl text-white leading-none">
              {stat.value}
            </span>
            <span className="font-body text-xs text-white/60 mt-1 text-center tracking-wide uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export function WhyDealwel() {
  return (
    <section
      id="why-dealwel"
      data-ocid="why_dealwel.section"
      className="py-20"
      style={{ background: "#F8FAFB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="up" className="text-center mb-12">
          <span
            className="inline-block font-body text-xs font-semibold tracking-[0.12em] uppercase mb-3 px-3 py-1 rounded-full"
            style={{ color: "#0F4C5C", background: "rgba(15,76,92,0.08)" }}
          >
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A2B2F] leading-tight mb-4">
            Built on Trust.{" "}
            <span style={{ color: "#0F4C5C" }}>Driven by Results.</span>
          </h2>
          <p className="font-body text-[#5A7080] text-lg max-w-xl mx-auto leading-relaxed">
            We don't just find properties — we deliver confidence at every step.
          </p>
        </AnimateOnScroll>

        {/* Value cards grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          data-ocid="why_dealwel.cards_grid"
        >
          {VALUE_CARDS.map((card, idx) => (
            <CardItem
              key={card.title}
              card={card}
              delay={STAGGER_DELAYS[idx] ?? 0}
            />
          ))}
        </div>

        {/* Stats bar */}
        <StatsBar />
      </div>
    </section>
  );
}

export default WhyDealwel;
