import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: bigint;
    title: string;
    propertyType: string;
    bedrooms: bigint;
    area: bigint;
    description: string;
    imageUrl: string;
    badge?: string;
    bathrooms: bigint;
    price: bigint;
    location: string;
}
export interface Testimonial {
    id: bigint;
    name: string;
    role: string;
    quote: string;
    avatarUrl: string;
}
export interface backendInterface {
    getFeaturedProperties(): Promise<Array<Property>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    searchProperties(location: string, maxPrice: bigint, propertyType: string): Promise<Array<Property>>;
    submitLead(name: string, email: string, phone: string, message: string, propertyInterest: string): Promise<boolean>;
}
