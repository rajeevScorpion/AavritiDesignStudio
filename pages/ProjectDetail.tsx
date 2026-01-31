import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="w-full bg-brand-white dark:bg-brand-black transition-colors duration-500">
      {/* Hero */}
      <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-6 md:p-12">
           <div className="max-w-7xl w-full mx-auto">
              <ScrollReveal>
                 <span className="bg-brand-accent dark:bg-brand-neon text-white dark:text-brand-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">{project.category}</span>
                 <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">{project.title}</h1>
                 <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl">{project.impactStatement}</p>
              </ScrollReveal>
           </div>
        </div>
      </div>

      {/* Info Grid */}
      <section className="py-20 px-6 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-brand-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           <div>
             <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Client</h4>
             <p className="font-medium text-brand-charcoal dark:text-white">{project.client}</p>
           </div>
           <div>
             <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Year</h4>
             <p className="font-medium text-brand-charcoal dark:text-white">{project.year}</p>
           </div>
           <div>
             <h4 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">Services</h4>
             <p className="font-medium text-brand-charcoal dark:text-white">{project.category}</p>
           </div>
        </div>
      </section>

      {/* Narrative */}
      <article className="max-w-3xl mx-auto px-6 py-24 bg-brand-white dark:bg-brand-black transition-colors duration-500">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-brand-charcoal dark:text-white">Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-16">{project.overview}</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
               <h3 className="text-xl font-bold mb-4 text-brand-charcoal dark:text-white">The Challenge</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
               <h3 className="text-xl font-bold mb-4 text-brand-charcoal dark:text-white">Our Approach</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.approach}</p>
            </div>
          </div>
        </ScrollReveal>
      </article>

      {/* Visuals */}
      <section className="py-12 bg-gray-50 dark:bg-brand-surface space-y-12 transition-colors duration-500 border-y border-gray-200 dark:border-white/10">
         {project.images.map((img, idx) => (
           <div key={idx} className="max-w-6xl mx-auto px-6">
             <ScrollReveal>
               <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-auto rounded-sm shadow-sm" />
             </ScrollReveal>
           </div>
         ))}
      </section>

      {/* Impact & Next */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center bg-brand-white dark:bg-brand-black transition-colors duration-500">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-brand-charcoal dark:text-white">Outcome & Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-12">{project.outcome}</p>
          <div className="p-12 bg-brand-charcoal dark:bg-white/10 text-white rounded-lg border border-transparent dark:border-white/10 transition-colors duration-500">
            <h3 className="text-2xl font-bold mb-4">Have a similar project?</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-8">Let's discuss how we can help you achieve similar results.</p>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectDetail;