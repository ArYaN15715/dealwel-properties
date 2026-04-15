import { AnimateOnScroll } from "@/hooks/use-scroll-animation";
import type { Testimonial } from "@/types/index";
import { useState } from "react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Property Investor",
    content:
      "Dealwel helped me identify a Baner property that's already appreciated 25% in 18 months. Their market insight is unmatched.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "First-time Buyer",
    content:
      "I was nervous about my first purchase. The team held my hand through every step. Transparent, patient, and genuinely helpful.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
  },
  {
    id: "3",
    name: "Sneha Joshi",
    role: "Commercial Buyer",
    content:
      "Closed a commercial deal in 11 days. Faster than I thought possible. The process was smooth and professional from start to finish.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
  },
];

const AVATAR_GRADIENTS = [
  "from-[#0F4C5C] to-[#1F3D2B]",
  "from-[#1F3D2B] to-[#0F4C5C]",
  "from-[#0F4C5C] to-[#0a3544]",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface AvatarProps {
  testimonial: Testimonial;
  gradient: string;
}

function Avatar({ testimonial, gradient }: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  if (testimonial.avatarUrl && !imgError) {
    return (
      <img
        src={testimonial.avatarUrl}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        loading="lazy"
        width={40}
        height={40}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
      aria-hidden="true"
    >
      <span className="font-display font-bold text-white text-xs tracking-wide">
        {getInitials(testimonial.name)}
      </span>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  animDelay: 0 | 100 | 200 | 300 | 400 | 500;
}

function TestimonialCard({
  testimonial,
  index,
  animDelay,
}: TestimonialCardProps) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];

  return (
    <AnimateOnScroll animation="scale" delay={animDelay}>
      <article
        className="bg-white rounded-xl p-6 shadow-subtle flex flex-col h-full transition-smooth hover-lift"
        data-ocid={`testimonials.item.${index + 1}`}
      >
        {/* Decorative quote mark */}
        <div
          className="text-5xl font-display font-bold leading-none mb-3 select-none"
          style={{ color: "#0F4C5C", opacity: 0.18 }}
          aria-hidden="true"
        >
          "
        </div>

        {/* Star rating */}
        <div
          className="flex gap-0.5 mb-3"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span
              key={`star-${testimonial.id}-${i}`}
              className="text-base"
              style={{ color: "#F59E0B" }}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>

        {/* Testimonial text */}
        <p className="font-body text-base italic leading-relaxed text-[#374151] flex-1 mb-5">
          "{testimonial.content}"
        </p>

        {/* Divider */}
        <hr className="border-[#E5E7EB] mb-4" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar testimonial={testimonial} gradient={gradient} />
          <div className="min-w-0">
            <p className="font-display font-bold text-sm text-[#111827] truncate">
              {testimonial.name}
            </p>
            <p className="font-body text-xs text-[#6B7280] truncate">
              {testimonial.role}
            </p>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ backgroundColor: "#F8FAFB" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll animation="up">
          <div className="text-center mb-12">
            <span
              className="inline-block font-body text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#0F4C5C" }}
            >
              Client Stories
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111827]">
              Trusted by Families and Investors
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => {
            const delays: (0 | 100 | 200 | 300 | 400 | 500)[] = [0, 100, 200];
            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                animDelay={delays[index] ?? 0}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
