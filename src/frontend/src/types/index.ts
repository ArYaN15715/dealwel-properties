export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  imageUrl: string;
  features: string[];
  isVerified: boolean;
  isFeatured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
}

export interface SearchFilters {
  location: string;
  budget: string;
  type: string;
}
