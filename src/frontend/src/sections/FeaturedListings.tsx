import { AnimateOnScroll } from "@/hooks/use-scroll-animation";
import {
  Bath,
  BedDouble,
  Bookmark,
  ChevronRight,
  MapPin,
  Maximize2,
} from "lucide-react";
import { useState } from "react";

interface PropertyData {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number | null;
  baths: number;
  area: number;
  type: string;
  badge: "Verified" | "Featured" | null;
  imageUrl: string;
  gradientFallback: string;
}

const PROPERTIES: PropertyData[] = [
  {
    id: "emerald-residences",
    title: "The Emerald Residences",
    location: "Koregaon Park",
    price: 8_500_000,
    beds: 3,
    baths: 2,
    area: 180,
    type: "Apartment",
    badge: "Verified",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #0F4C5C 0%, #0a3344 60%, #062536 100%)",
  },
  {
    id: "baner-pearl-estate",
    title: "Baner Pearl Estate",
    location: "Baner",
    price: 24_000_000,
    beds: 4,
    baths: 3,
    area: 320,
    type: "Villa",
    badge: "Verified",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #1a6070 0%, #0F4C5C 50%, #1F3D2B 100%)",
  },
  {
    id: "viman-court",
    title: "Viman Court",
    location: "Viman Nagar",
    price: 12_000_000,
    beds: 5,
    baths: 4,
    area: 450,
    type: "Apartment",
    badge: "Verified",
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #1F3D2B 0%, #163320 50%, #0F4C5C 100%)",
  },
  {
    id: "baner-gardens",
    title: "Baner Gardens",
    location: "Baner",
    price: 35_000_000,
    beds: 4,
    baths: 3,
    area: 280,
    type: "Villa",
    badge: "Featured",
    imageUrl:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #2a5240 0%, #1F3D2B 60%, #142d1e 100%)",
  },
  {
    id: "hinjewadi-business-hub",
    title: "Hinjewadi Business Hub",
    location: "Hinjewadi",
    price: 12_000_000,
    beds: null,
    baths: 2,
    area: 200,
    type: "Commercial",
    badge: null,
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #0F4C5C 0%, #1a4f60 50%, #2a4050 100%)",
  },
  {
    id: "kharadi-heights",
    title: "Kharadi Heights",
    location: "Kharadi",
    price: 18_000_000,
    beds: 3,
    baths: 2,
    area: 160,
    type: "Apartment",
    badge: null,
    imageUrl:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80",
    gradientFallback:
      "linear-gradient(135deg, #1F3D2B 0%, #254735 60%, #0F4C5C 100%)",
  },
];

function formatPrice(price: number): string {
  if (price >= 10_000_000) {
    const cr = price / 10_000_000;
    const val = cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1);
    return `₹${val} Cr`;
  }
  if (price >= 100_000) {
    const l = price / 100_000;
    const val = l % 1 === 0 ? l.toFixed(0) : l.toFixed(1);
    return `₹${val} L`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
}

interface PropertyCardProps {
  property: PropertyData;
  index: number;
}

function PropertyCard({ property, index }: PropertyCardProps) {
  const [imgError, setImgError] = useState(false);
  const staggerDelay = Math.min(index * 100, 400) as 0 | 100 | 200 | 300 | 400;

  return (
    <AnimateOnScroll
      animation="scale"
      delay={staggerDelay}
      className="group"
      data-ocid={`featured_listings.item.${index + 1}`}
    >
      <div className="hover-lift rounded-xl bg-card border border-border shadow-subtle overflow-hidden flex flex-col h-full">
        {/* Image area */}
        <div
          className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0"
          style={{ background: property.gradientFallback }}
        >
          {!imgError && (
            <img
              src={property.imageUrl}
              alt={`${property.title} — Property in ${property.location}, Pune`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width={800}
              height={560}
              onError={() => setImgError(true)}
            />
          )}

          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,40,50,0.45) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />

          {/* Badges */}
          {property.badge === "Verified" && (
            <span
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-body font-semibold text-white"
              style={{
                background: "rgba(15, 76, 92, 0.95)",
                backdropFilter: "blur(4px)",
              }}
              data-ocid={`featured_listings.verified_badge.${index + 1}`}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Verified
            </span>
          )}
          {property.badge === "Featured" && (
            <span
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-body font-semibold text-white"
              style={{
                background: "rgba(31, 61, 43, 0.95)",
                backdropFilter: "blur(4px)",
              }}
            >
              ★ Featured
            </span>
          )}

          {/* Property type pill */}
          <span
            className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-xs font-body font-medium text-white/90"
            style={{
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(4px)",
            }}
          >
            {property.type}
          </span>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5">
          <div className="mb-3">
            <h3 className="font-display font-bold text-lg text-foreground leading-snug truncate">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <MapPin
                size={13}
                className="text-muted-foreground flex-shrink-0"
              />
              <span className="font-body text-sm text-muted-foreground truncate">
                {property.location}, Pune
              </span>
            </div>
          </div>

          <p
            className="font-display font-bold text-2xl mb-4"
            style={{ color: "#0F4C5C" }}
          >
            {formatPrice(property.price)}
          </p>

          {/* Specs row */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-body mb-5 flex-wrap">
            {property.beds !== null && (
              <span className="flex items-center gap-1">
                <BedDouble size={14} aria-hidden="true" />
                <span>{property.beds} Beds</span>
              </span>
            )}
            <span className="flex items-center gap-1">
              <Bath size={14} aria-hidden="true" />
              <span>{property.baths} Baths</span>
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 size={14} aria-hidden="true" />
              <span>{property.area} sqm</span>
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <button
              type="button"
              className="flex-1 py-2.5 px-4 rounded-lg font-body font-semibold text-sm text-white transition-smooth hover-glow-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: "#0F4C5C" }}
              data-ocid={`featured_listings.view_details_button.${index + 1}`}
              onClick={() => {
                document
                  .getElementById("final-cta")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Details
            </button>
            <button
              type="button"
              aria-label="Save property"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground transition-smooth hover:border-[#0F4C5C] hover:text-[#0F4C5C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 flex-shrink-0"
              data-ocid={`featured_listings.save_button.${index + 1}`}
            >
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export function FeaturedListings() {
  return (
    <section
      id="properties"
      className="py-20 bg-background"
      data-ocid="featured_listings.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="up" className="text-center mb-12">
          <p
            className="font-body font-semibold text-xs tracking-widest uppercase mb-3"
            style={{ color: "#0F4C5C" }}
          >
            Featured Properties
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            Handpicked for You
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Curated listings from Pune's most sought-after addresses — verified,
            transparent, ready to close.
          </p>
        </AnimateOnScroll>

        {/* Property grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="featured_listings.list"
        >
          {PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <AnimateOnScroll
          animation="up"
          delay={200}
          className="text-center mt-12"
        >
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-body font-semibold text-sm border-2 transition-smooth hover:bg-[#0F4C5C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ borderColor: "#0F4C5C", color: "#0F4C5C" }}
            data-ocid="featured_listings.view_all_button"
            onClick={() => {
              document
                .getElementById("final-cta")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Properties
            <ChevronRight size={16} />
          </button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
