import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FOUNDERS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const Studio: React.FC = () => {
  return (
    <div className="w-full pt-12">
      <section className="px-6 pb-24 border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-charcoal mb-12">
              Humanizing Technology.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mx-auto max-w-3xl">
              At Aavriti, we believe that the future is not just about what technology can do, but how it makes us feel. We are a team of designers, educators, and engineers crafting clarity from complexity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-16 text-brand-charcoal">Leadership</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="group">
                  <div className="overflow-hidden mb-6 bg-gray-100 aspect-[3/4]">
                    <img 
                      src={founder.imageUrl} 
                      alt={founder.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-charcoal">{founder.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-brand-accent mb-3">{founder.title}</p>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{founder.bio}</p>
                  <div className="flex space-x-3 text-brand-charcoal">
                    {founder.socials.linkedin && <a href={founder.socials.linkedin}><Linkedin size={18} /></a>}
                    {founder.socials.email && <a href={`mailto:${founder.socials.email}`}><Mail size={18} /></a>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-4xl font-bold mb-8">Our Academic Commitment</h2>
             <p className="text-lg text-gray-400 mb-12">
               We don't just practice design; we teach it. Through curriculum development and integration of AI tools in higher education, we are shaping the next generation of creative leaders.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                <div className="p-6 border border-white/10 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Curriculum Innovation</h3>
                    <p className="text-sm text-gray-400">Restructuring design pedagogy to include computational thinking and ethical AI usage.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Masterclasses</h3>
                    <p className="text-sm text-gray-400">Hands-on workshops for students and faculty on Generative AI workflows and advanced prototyping.</p>
                </div>
             </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;