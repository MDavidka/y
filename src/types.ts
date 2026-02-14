export interface SiteConfig {
  title: string;
  description: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  author: string;
  title: string;
  text: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}