import { Project, Service, Founder, DigitalProduct, Testimonial } from './types';

export const SERVICES: Service[] = [
  { title: "Interaction Design", description: "Crafting intuitive digital behaviors and micro-interactions that feel natural and engaging." },
  { title: "Websites & Web Apps", description: "Building scalable, high-performance web platforms using modern frameworks and best practices." },
  { title: "Native Mobile Products", description: "Designing and developing seamless iOS and Android experiences for the modern user." },
  { title: "Branding & Identity", description: "Creating coherent visual systems that communicate core values across all touchpoints." },
  { title: "Emerging Tech Design", description: "Integrating AI, AR, and VR into practical applications to solve complex problems." },
  { title: "Academic Consultancy", description: "Innovating design curriculums and delivering masterclasses on the future of creative tech." },
];

export const PROJECTS: Project[] = [
  {
    id: "smart-campus",
    title: "Smart Campus Experience",
    category: "Interaction Design",
    impactStatement: "Redefining student life through a unified digital ecosystem.",
    thumbnailUrl: "https://picsum.photos/800/600?random=1",
    year: "2023",
    client: "Future University",
    overview: "A comprehensive digital platform connecting students, faculty, and facilities in real-time.",
    challenge: "The university's fragmented digital touchpoints caused friction in daily campus life, from booking rooms to finding events.",
    approach: "We adopted a mobile-first strategy, creating a unified app that serves as a digital pass, wayfinder, and social hub.",
    outcome: "Increased student engagement by 40% and reduced administrative support tickets by 25%.",
    images: ["https://picsum.photos/800/450?random=11", "https://picsum.photos/800/450?random=12"]
  },
  {
    id: "digital-brand-lifestyle",
    title: "Lifestyle Startup Identity",
    category: "Branding",
    impactStatement: "A visual language for the next generation of wellness.",
    thumbnailUrl: "https://picsum.photos/800/600?random=2",
    year: "2024",
    client: "Aura Wellness",
    overview: "A complete brand overhaul for a direct-to-consumer wellness brand focusing on mental clarity.",
    challenge: "Standing out in a saturated wellness market while conveying scientific rigor and calmness.",
    approach: "We utilized clean Swiss typography mixed with organic, procedural generative art patterns to represent the mind.",
    outcome: "Successfully launched with 10k pre-orders and featured in top design publications.",
    images: ["https://picsum.photos/800/450?random=21", "https://picsum.photos/800/450?random=22"]
  },
  {
    id: "healthcare-ux",
    title: "Healthcare Service UX",
    category: "Product Design",
    impactStatement: "Simplifying patient care pathways with empathy.",
    thumbnailUrl: "https://picsum.photos/800/600?random=3",
    year: "2023",
    client: "MediConnect",
    overview: "An overhaul of a telemedicine dashboard for both doctors and patients.",
    challenge: "Reducing cognitive load for doctors during critical consultations while making the patient interface accessible for all ages.",
    approach: "Extensive user testing with elderly patients led to high-contrast, large-touch-target interfaces.",
    outcome: "Reduced appointment booking time by 60% and improved doctor note-taking efficiency.",
    images: ["https://picsum.photos/800/450?random=31", "https://picsum.photos/800/450?random=32"]
  },
  {
    id: "ai-pedagogy",
    title: "AI Pedagogy Toolkit",
    category: "Academic Consultancy",
    impactStatement: "Empowering educators to teach with Generative AI.",
    thumbnailUrl: "https://picsum.photos/800/600?random=4",
    year: "2024",
    client: "Global Design Institute",
    overview: "A curriculum framework and software toolkit for integrating AI into design education.",
    challenge: "Design schools struggled to integrate rapidly evolving AI tools into traditional curriculums.",
    approach: "We developed a modular workshop series and a custom 'PromptLogger' tool for classroom use.",
    outcome: "Adopted by 5 major design institutions across Europe and Asia.",
    images: ["https://picsum.photos/800/450?random=41", "https://picsum.photos/800/450?random=42"]
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: "Elena Vora",
    title: "Co-Founder & Design Director",
    bio: "Elena brings 15 years of experience in visual communication and brand strategy. Former lead at Pentagram.",
    imageUrl: "https://picsum.photos/400/500?random=50",
    socials: { linkedin: "#", email: "elena@aavriti.com" }
  },
  {
    name: "David Chen",
    title: "Co-Founder & Tech Lead",
    bio: "A creative technologist obsessed with the intersection of code and canvas. Expert in WebGL and React.",
    imageUrl: "https://picsum.photos/400/500?random=51",
    socials: { linkedin: "#", behance: "#", email: "david@aavriti.com" }
  },
  {
    name: "Sarah Abadi",
    title: "Head of Product Innovation",
    bio: "Sarah bridges the gap between human needs and technical feasibility. Specialist in human-centered AI.",
    imageUrl: "https://picsum.photos/400/500?random=52",
    socials: { linkedin: "#", email: "sarah@aavriti.com" }
  }
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    name: "Cogsnap.app",
    description: "AI-powered thought capture and life logging for creatives.",
    ctaText: "Try Cogsnap",
    link: "#"
  },
  {
    name: "JuryConnect",
    description: "Streamlined evaluation and jury workflow platform for design awards.",
    ctaText: "View Platform",
    link: "#"
  },
  {
    name: "PromptLogger",
    description: "Version control and management for complex AI workflows.",
    ctaText: "Get Access",
    link: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Aavriti didn't just design our platform; they completely reimagined how we interact with our users. A masterpiece of engineering.",
    author: "James Wilson",
    role: "CTO",
    company: "Future University"
  },
  {
    quote: "The perfect blend of aesthetic purity and functional depth. Working with them was a masterclass in modern product development.",
    author: "Anita Roy",
    role: "Founder",
    company: "Aura Wellness"
  },
  {
    quote: "They understand the language of the future. Their insights into AI pedagogy have transformed our curriculum.",
    author: "Dr. Kenji Tanaka",
    role: "Dean of Design",
    company: "Global Design Institute"
  }
];
