import Types "../types/properties";
import List "mo:core/List";
import Text "mo:core/Text";

module {
  public let sampleProperties : [Types.Property] = [
    {
      id = 1;
      title = "Skyline Heights – Luxury Apartment";
      price = 8500000;
      location = "Downtown, Mumbai";
      propertyType = "Apartment";
      bedrooms = 3;
      bathrooms = 2;
      area = 1850;
      imageUrl = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80";
      badge = ?("Featured");
      description = "Premium 3BHK apartment in the heart of downtown with panoramic city views, modern fittings, and world-class amenities including rooftop pool and gym.";
    },
    {
      id = 2;
      title = "Green Valley Villa";
      price = 24500000;
      location = "Whitefield, Bangalore";
      propertyType = "Villa";
      bedrooms = 5;
      bathrooms = 4;
      area = 4200;
      imageUrl = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80";
      badge = ?("Hot");
      description = "Sprawling 5-bedroom villa set in a lush gated community with private garden, home theatre, and dedicated parking for 4 cars. Ideal for premium family living.";
    },
    {
      id = 3;
      title = "Commerce One – Office Suite";
      price = 45000000;
      location = "BKC, Mumbai";
      propertyType = "Commercial";
      bedrooms = 0;
      bathrooms = 4;
      area = 6500;
      imageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";
      badge = ?("Featured");
      description = "Grade-A commercial office space in Mumbai's premier business district. Open-plan layout with dedicated server room, conference halls, and 24/7 security.";
    },
    {
      id = 4;
      title = "Serenity Cove Apartment";
      price = 4200000;
      location = "Kochi, Kerala";
      propertyType = "Apartment";
      bedrooms = 2;
      bathrooms = 2;
      area = 1100;
      imageUrl = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80";
      badge = ?("New");
      description = "Contemporary 2BHK apartment in a serene waterfront township. Features smart home automation, modular kitchen, and stunning backwater views from the balcony.";
    },
    {
      id = 5;
      title = "The Meridian – Penthouse";
      price = 38000000;
      location = "Jubilee Hills, Hyderabad";
      propertyType = "Apartment";
      bedrooms = 4;
      bathrooms = 4;
      area = 5800;
      imageUrl = "https://images.unsplash.com/photo-1600607687939-ce8a6d349490?w=800&q=80";
      badge = ?("Hot");
      description = "Exclusive sky penthouse with private terrace, jacuzzi, and butler service. Designed for those who demand the finest – sweeping city vistas and bespoke interiors.";
    },
    {
      id = 6;
      title = "Harvest Farms – Agricultural Plot";
      price = 2500000;
      location = "Nashik, Maharashtra";
      propertyType = "Commercial";
      bedrooms = 0;
      bathrooms = 0;
      area = 21780;
      imageUrl = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80";
      badge = ?("New");
      description = "5-acre agricultural plot with existing irrigation, fertile soil, and direct road access. Perfect for vineyard, organic farming, or agri-tourism venture investment.";
    },
  ];

  public let sampleTestimonials : [Types.Testimonial] = [
    {
      id = 1;
      name = "Arjun Mehta";
      role = "Real Estate Investor";
      quote = "Dealwel helped me identify a high-yield commercial property in BKC that delivered 18% ROI in the first year. Their market insights are unmatched.";
      avatarUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80";
    },
    {
      id = 2;
      name = "Priya Sharma";
      role = "First-Time Home Buyer";
      quote = "The team at Dealwel made my first home purchase completely stress-free. Transparent pricing, verified listings, and zero hidden surprises.";
      avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80";
    },
    {
      id = 3;
      name = "Rajesh Nair";
      role = "Business Owner";
      quote = "Found the perfect office space for my expanding firm within two weeks. Dealwel's network and speed of closure are truly impressive.";
      avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80";
    },
    {
      id = 4;
      name = "Sunita Reddy";
      role = "NRI Investor";
      quote = "As an NRI, I was worried about investing remotely. Dealwel's end-to-end support and verified documentation gave me complete confidence.";
      avatarUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80";
    },
    {
      id = 5;
      name = "Vikram Patel";
      role = "Portfolio Developer";
      quote = "I've closed 4 deals through Dealwel in the past 18 months. Their data-driven approach to growth corridors has consistently outperformed my expectations.";
      avatarUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80";
    },
  ];

  public func search(
    properties : [Types.Property],
    location : Text,
    maxPrice : Nat,
    propertyType : Text,
  ) : [Types.Property] {
    let locLower = location.toLower();
    let typeLower = propertyType.toLower();

    properties.filter(func(p) {
      let locationMatch = locLower == "" or p.location.toLower().contains(#text locLower);
      let priceMatch = maxPrice == 0 or p.price <= maxPrice;
      let typeMatch = typeLower == "" or p.propertyType.toLower() == typeLower;
      locationMatch and priceMatch and typeMatch
    });
  };
};
