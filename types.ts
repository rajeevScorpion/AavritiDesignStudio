export interface Project {
  id: string;
  title: string;
  category: string;
  impactStatement: string;
  thumbnailUrl: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  year: string;
  client: string;
  images: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Founder {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    behance?: string;
    email?: string;
  };
}

export interface DigitalProduct {
  name: string;
  description: string;
  ctaText: string;
  link: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
