import {
  AnimateOnScroll,
  useScrollAnimation,
} from "@/hooks/use-scroll-animation";
import { Calculator, MapPin, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ── Progress Bar Component ──────────────────────────────────────────────────

interface MetricBarProps {
  label: string;
  value: number;
  isVisible: boolean;
  delay?: number;
}

function MetricBar({ label, value, isVisible, delay = 0 }: MetricBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-white/90">{label}</span>
        <span className="text-sm font-bold text-white">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: `${width}%`,
            transitionDuration: "1.2s",
            background: "linear-gradient(90deg, #0F4C5C 0%, #4dd0e1 100%)",
          }}
        />
      </div>
    </div>
  );
}

// ── Experience Feature Card ────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: 0 | 100 | 200;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <AnimateOnScroll animation="scale" delay={delay}>
      <div
        data-ocid="experience.card"
        className="bg-white rounded-xl p-6 shadow-subtle hover-lift border border-[#e8edf0] flex flex-col gap-4 h-full"
      >
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#0F4C5C]/10">
          <div className="text-[#0F4C5C]">{icon}</div>
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-[#0F4C5C] mb-2">
            {title}
          </h3>
          <p className="text-[#4a5568] text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

// ── Investment Section ─────────────────────────────────────────────────────

export function InvestmentSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const pillars = [
    "Prime Growth Areas: Koregaon Park, Baner, Hinjewadi, Kharadi",
    "Strong Rental Yields: 8–12% annual returns in prime zones",
    "Capital Appreciation: 20–30% value growth over 5 years",
  ];

  const metrics = [
    { label: "Price Growth", value: 78, delay: 200 },
    { label: "Rental Demand", value: 85, delay: 400 },
    { label: "Market Liquidity", value: 70, delay: 600 },
  ];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="investment.section"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F4C5C 0%, #1F3D2B 100%)",
      }}
    >
      {/* Decorative background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text Content */}
          <AnimateOnScroll animation="left">
            <div className="space-y-6">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#a0bfc7] border border-[#a0bfc7]/30 rounded-full px-3 py-1">
                Investment Focus
              </span>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                Built for Smart Investors
              </h2>

              <p className="text-[#b8d4da] text-lg leading-relaxed">
                Pune's property market offers some of the highest growth
                potential in India. We help you identify the right opportunity
                at the right time.
              </p>

              <ul className="space-y-3">
                {pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#4dd0e1" }}
                    />
                    <span className="text-[#cce4ea] text-sm leading-relaxed">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  data-ocid="investment.cta_button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#0F4C5C] bg-white hover:bg-[#e8f5f7] transition-colors duration-200 shadow-elevated hover-glow-primary"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* RIGHT — Metrics Card */}
          <AnimateOnScroll animation="right">
            <div
              data-ocid="investment.metrics_card"
              className="rounded-2xl p-6 md:p-8 space-y-6 border border-white/10"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Market Performance
                </h3>
                <p className="text-[#a0bfc7] text-sm mt-1">
                  Real-time indicators, Q1 2026
                </p>
              </div>

              <div className="space-y-5">
                {metrics.map((m) => (
                  <MetricBar
                    key={m.label}
                    label={m.label}
                    value={m.value}
                    isVisible={isVisible}
                    delay={m.delay}
                  />
                ))}
              </div>

              {/* Stat highlights */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                {[
                  { value: "₹2,400 Cr", label: "Market Cap" },
                  { value: "8–12%", label: "Avg Yield" },
                  { value: "2.8x", label: "5yr Growth" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-bold text-xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#a0bfc7] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#6a9aaa] text-right">
                Last updated: Q1 2026
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

// ── Property Experience Section ────────────────────────────────────────────

export function ExperienceSection() {
  const features: FeatureCardProps[] = [
    {
      icon: <Video size={22} />,
      title: "Virtual Tours",
      description:
        "Explore properties from anywhere with our immersive 360° walkthroughs. See every room, every angle before you visit.",
      delay: 0,
    },
    {
      icon: <MapPin size={22} />,
      title: "Neighborhood Intel",
      description:
        "School ratings, traffic data, amenities, and future development plans — all in one place before you decide.",
      delay: 100,
    },
    {
      icon: <Calculator size={22} />,
      title: "Investment Calculator",
      description:
        "Estimate ROI, rental yield, and projected returns before you commit. Run the numbers with confidence.",
      delay: 200,
    },
  ];

  return (
    <section
      id="experience"
      data-ocid="experience.section"
      className="py-16 md:py-24 bg-[#f9fafb]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="up">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0F4C5C] mb-1">
              Property Experience
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#0F4C5C] leading-tight">
              Experience Before You Invest
            </h2>
            <p className="text-[#4a5568] text-lg max-w-xl mx-auto leading-relaxed">
              Virtual walkthroughs, neighborhood insights, and location
              intelligence.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="up">
          <div className="text-center">
            <button
              type="button"
              data-ocid="experience.browse_button"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-colors duration-200 shadow-elevated hover-glow-primary"
              style={{ background: "#0F4C5C" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#1F3D2B";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#0F4C5C";
              }}
              onClick={() => {
                document
                  .getElementById("listings")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Browse All Properties
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

// ── Combined default export ───────────────────────────────────────────────

export default function InvestmentAndExperience() {
  return (
    <>
      <InvestmentSection />
      <ExperienceSection />
    </>
  );
}
