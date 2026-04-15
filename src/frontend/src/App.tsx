import { Layout } from "@/components/Layout";
import { FeaturedListings } from "@/sections/FeaturedListings";
import { FinalCTA } from "@/sections/FinalCTA";
import Hero from "@/sections/Hero";
import InvestmentAndExperience from "@/sections/Investment";
import { Testimonials } from "@/sections/Testimonials";
import { WhyDealwel } from "@/sections/WhyDealwel";

export default function App() {
  return (
    <Layout>
      <Hero />
      <FeaturedListings />
      <WhyDealwel />
      <InvestmentAndExperience />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
}
