import { useIsMobile } from "@/hooks/use-mobile";
import type { SearchFilters } from "@/types/index";
import {
  ChevronDown,
  Clock,
  MapPin,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const LOCATION_OPTIONS = [
  { value: "", label: "Any Location" },
  { value: "koregaon-park", label: "Koregaon Park" },
  { value: "baner", label: "Baner" },
  { value: "viman-nagar", label: "Viman Nagar" },
  { value: "kharadi", label: "Kharadi" },
  { value: "hinjewadi", label: "Hinjewadi" },
  { value: "wakad", label: "Wakad" },
  { value: "aundh", label: "Aundh" },
  { value: "hadapsar", label: "Hadapsar" },
  { value: "magarpatta", label: "Magarpatta" },
  { value: "kalyani-nagar", label: "Kalyani Nagar" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Any Budget" },
  { value: "40l-60l", label: "₹40L – ₹60L" },
  { value: "60l-1cr", label: "₹60L – ₹1Cr" },
  { value: "1cr-1.5cr", label: "₹1Cr – ₹1.5Cr" },
  { value: "1.5cr-2.5cr", label: "₹1.5Cr – ₹2.5Cr" },
  { value: "2.5cr-plus", label: "₹2.5Cr+" },
];

const TYPE_OPTIONS = [
  { value: "", label: "Any Type" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "commercial", label: "Commercial" },
  { value: "land", label: "Land" },
];

const TRUST_BADGES = [
  { label: "500+ Verified Listings" },
  { label: "10+ Years Experience" },
  { label: "98% Client Satisfaction" },
];

const METRIC_BADGES = [
  { icon: TrendingUp, label: "ROI 12–18%", color: "text-emerald-300" },
  { icon: MapPin, label: "Prime Location", color: "text-sky-300" },
  { icon: Shield, label: "Verified ✓", color: "text-teal-300" },
];

export default function Hero() {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    budget: "",
    type: "",
  });

  const handleSearch = () => {
    const section = document.getElementById("properties");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const animDuration = isMobile ? "0.4s" : "0.5s";

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0A3341 0%, #0F4C5C 35%, #14564A 65%, #1F3D2B 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(20,86,74,0.35) 0%, transparent 70%)",
          animation: "heroBgPulse 8s ease-in-out infinite alternate",
        }}
        aria-hidden="true"
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-28 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Headline + CTAs + Trust */}
          <div className="flex flex-col gap-6 md:gap-7">
            {/* Tag */}
            <div
              className="shuttle-in-up"
              style={{ animationDuration: animDuration }}
            >
              <span
                data-ocid="hero.tag"
                className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-[0.12em] uppercase"
                style={{ color: "rgba(176,220,210,0.9)" }}
              >
                <span
                  className="w-4 h-px"
                  style={{ background: "rgba(176,220,210,0.6)" }}
                />
                Trusted Real Estate Partner — Pune
              </span>
            </div>

            {/* H1 */}
            <h1
              className="shuttle-in-left font-display font-bold leading-[1.1] tracking-tight text-white"
              style={{
                fontSize: isMobile
                  ? "clamp(2rem, 9vw, 2.6rem)"
                  : "clamp(2.6rem, 4.5vw, 3.75rem)",
                animationDuration: animDuration,
              }}
              data-ocid="hero.headline"
            >
              Smart Property Decisions{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #5ECBBD 0%, #8FDDD2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Start Here.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="shuttle-in-up delay-100 font-body text-lg md:text-xl leading-relaxed"
              style={{
                color: "rgba(210,235,230,0.85)",
                animationDuration: animDuration,
              }}
              data-ocid="hero.subheadline"
            >
              Trusted deals. Verified listings. Real results.
            </p>

            {/* Trust badges */}
            <div
              className="shuttle-in-up delay-200 flex flex-wrap items-center gap-x-3 gap-y-2"
              style={{ animationDuration: animDuration }}
              data-ocid="hero.trust_badges"
            >
              {TRUST_BADGES.map((badge, i) => (
                <div key={badge.label} className="flex items-center gap-x-3">
                  {i > 0 && (
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#5ECBBD" }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="text-xs md:text-sm font-body font-medium"
                    style={{ color: "rgba(200,232,226,0.9)" }}
                  >
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="shuttle-in-up delay-300 flex flex-col sm:flex-row gap-3 pt-1"
              style={{ animationDuration: animDuration }}
            >
              <button
                type="button"
                data-ocid="hero.browse_properties_button"
                onClick={() => {
                  const section = document.getElementById("properties");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover-lift hover-glow-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-display font-semibold text-sm md:text-base transition-smooth"
                style={{
                  background: "#ffffff",
                  color: "#0F4C5C",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                }}
              >
                Browse Properties
              </button>
              <button
                type="button"
                data-ocid="hero.get_advice_button"
                onClick={() => {
                  const section = document.getElementById("final-cta");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover-lift inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-display font-semibold text-sm md:text-base transition-smooth"
                style={{
                  border: "1.5px solid rgba(94,203,189,0.6)",
                  color: "#ffffff",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Get Expert Advice
              </button>
            </div>
          </div>

          {/* RIGHT — Featured property card */}
          <div
            className="shuttle-in-right delay-200 gentle-float relative flex justify-center lg:justify-end"
            style={{ animationDuration: animDuration }}
            data-ocid="hero.property_card"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-2xl blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(94,203,189,0.18) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(94,203,189,0.12)",
              }}
            >
              {/* Property image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-teal-800 to-green-900">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85"
                  alt="Premium residential property in Pune"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={900}
                  height={600}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Featured badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-body font-semibold"
                    style={{
                      background: "rgba(15,76,92,0.9)",
                      color: "#5ECBBD",
                      border: "1px solid rgba(94,203,189,0.3)",
                    }}
                  >
                    <Clock size={10} />
                    Featured Property
                  </span>
                </div>
              </div>

              {/* Property info */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3
                    className="font-display font-bold text-lg text-white leading-tight"
                    data-ocid="hero.property_name"
                  >
                    Skyline Heights, Pune
                  </h3>
                  <p
                    className="flex items-center gap-1 mt-1 text-sm font-body"
                    style={{ color: "rgba(200,232,226,0.7)" }}
                  >
                    <MapPin size={12} />
                    Koregaon Park, Pune
                  </p>
                </div>

                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display font-bold text-2xl"
                    style={{ color: "#5ECBBD" }}
                    data-ocid="hero.property_price"
                  >
                    ₹85 L
                  </span>
                  <span
                    className="text-xs font-body"
                    style={{ color: "rgba(200,232,226,0.5)" }}
                  >
                    3 bed · 2 bath
                  </span>
                </div>

                {/* Metric badges */}
                <div
                  className="flex items-center gap-2 pt-1"
                  data-ocid="hero.metric_badges"
                >
                  {METRIC_BADGES.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 flex flex-col items-center gap-1 rounded-lg py-2"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <m.icon size={14} className={m.color} />
                      <span
                        className="text-[10px] font-body font-medium text-center leading-tight"
                        style={{ color: "rgba(220,240,236,0.85)" }}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search bar ── */}
      <div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-6 md:pb-10"
        style={{
          animation: "shuttleInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both",
        }}
        data-ocid="hero.search_bar"
      >
        <div
          className="max-w-5xl mx-auto rounded-xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
          }}
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] gap-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {/* Location */}
            <div
              className="relative flex flex-col"
              style={{ background: "rgba(10,51,65,0.7)" }}
            >
              <label
                htmlFor="search-location"
                className="px-4 pt-3 pb-0 text-[10px] font-body font-semibold uppercase tracking-widest"
                style={{ color: "rgba(94,203,189,0.8)" }}
              >
                Location
              </label>
              <div className="relative flex items-center">
                <MapPin
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(94,203,189,0.5)" }}
                />
                <select
                  id="search-location"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, location: e.target.value }))
                  }
                  className="w-full bg-transparent pl-9 pr-4 py-3 text-sm font-body text-white focus:outline-none appearance-none cursor-pointer"
                  style={{
                    color: filters.location ? "white" : "rgba(255,255,255,0.3)",
                  }}
                  data-ocid="hero.location_select"
                >
                  {LOCATION_OPTIONS.map((o) => (
                    <option
                      key={o.value}
                      value={o.value}
                      style={{ background: "#0F4C5C", color: "white" }}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(94,203,189,0.5)" }}
                />
              </div>
            </div>

            {/* Budget */}
            <div
              className="relative flex flex-col"
              style={{ background: "rgba(10,51,65,0.7)" }}
            >
              <label
                htmlFor="search-budget"
                className="px-4 pt-3 pb-0 text-[10px] font-body font-semibold uppercase tracking-widest"
                style={{ color: "rgba(94,203,189,0.8)" }}
              >
                Budget
              </label>
              <div className="relative flex items-center">
                <select
                  id="search-budget"
                  value={filters.budget}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, budget: e.target.value }))
                  }
                  className="w-full bg-transparent px-4 py-3 text-sm font-body text-white focus:outline-none appearance-none cursor-pointer"
                  style={{
                    color: filters.budget ? "white" : "rgba(255,255,255,0.3)",
                  }}
                  data-ocid="hero.budget_select"
                >
                  {BUDGET_OPTIONS.map((o) => (
                    <option
                      key={o.value}
                      value={o.value}
                      style={{ background: "#0F4C5C", color: "white" }}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(94,203,189,0.5)" }}
                />
              </div>
            </div>

            {/* Property Type */}
            <div
              className="relative flex flex-col"
              style={{ background: "rgba(10,51,65,0.7)" }}
            >
              <label
                htmlFor="search-type"
                className="px-4 pt-3 pb-0 text-[10px] font-body font-semibold uppercase tracking-widest"
                style={{ color: "rgba(94,203,189,0.8)" }}
              >
                Property Type
              </label>
              <div className="relative flex items-center">
                <select
                  id="search-type"
                  value={filters.type}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, type: e.target.value }))
                  }
                  className="w-full bg-transparent px-4 py-3 text-sm font-body text-white focus:outline-none appearance-none cursor-pointer"
                  style={{
                    color: filters.type ? "white" : "rgba(255,255,255,0.3)",
                  }}
                  data-ocid="hero.type_select"
                >
                  {TYPE_OPTIONS.map((o) => (
                    <option
                      key={o.value}
                      value={o.value}
                      style={{ background: "#0F4C5C", color: "white" }}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: "rgba(94,203,189,0.5)" }}
                />
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={handleSearch}
              data-ocid="hero.search_button"
              className="hover-lift transition-smooth flex items-center justify-center gap-2 px-7 py-4 font-display font-semibold text-sm whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #0F4C5C, #1F3D2B)",
                color: "#ffffff",
                minWidth: "140px",
              }}
            >
              <Search size={16} />
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding for sticky bar */}
      <div className="md:hidden h-20" aria-hidden="true" />

      <style>{`
        @keyframes heroBgPulse {
          from { opacity: 0.6; transform: scale(1); }
          to   { opacity: 1;   transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
