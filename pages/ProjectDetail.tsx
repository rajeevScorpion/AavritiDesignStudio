import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = PROJECTS.findIndex(p => p.id === id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

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

      {/* Impact */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center bg-brand-white dark:bg-brand-black transition-colors duration-500">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6 text-brand-charcoal dark:text-white">Outcome & Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{project.outcome}</p>
        </ScrollReveal>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-b border-gray-200 dark:border-white/10 bg-brand-white dark:bg-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link 
            to={`/work/${prevProject.id}`} 
            onClick={() => window.scrollTo(0, 0)}
            className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 flex items-center justify-start overflow-hidden gap-6" 
            data-cursor="hover"
          >
             {/* Thumbnail (Left for Prev) */}
            <div className="hidden sm:block w-32 h-20 md:w-48 md:h-28 overflow-hidden rounded-sm bg-gray-200 dark:bg-white/5 flex-shrink-0">
               <img 
                 src={prevProject.thumbnailUrl} 
                 alt={prevProject.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
               />
            </div>

            <div className="flex flex-col items-start z-10 relative flex-grow">
              <span className="flex items-center text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 group-hover:text-brand-accent dark:group-hover:text-brand-neon transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Previous Project
              </span>
              <h3 className="text-xl md:text-3xl font-bold text-brand-charcoal dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                  {prevProject.title}
              </h3>
            </div>
          </Link>

          <Link 
            to={`/work/${nextProject.id}`} 
            onClick={() => window.scrollTo(0, 0)}
            className="group relative p-8 md:p-12 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 flex items-center justify-end text-right overflow-hidden gap-6" 
            data-cursor="hover"
          >
            <div className="flex flex-col items-end z-10 relative flex-grow">
              <span className="flex items-center text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 group-hover:text-brand-accent dark:group-hover:text-brand-neon transition-colors">
                  Next Project <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <h3 className="text-xl md:text-3xl font-bold text-brand-charcoal dark:text-white group-hover:-translate-x-2 transition-transform duration-300">
                  {nextProject.title}
              </h3>
            </div>

            {/* Thumbnail (Right for Next) */}
            <div className="hidden sm:block w-32 h-20 md:w-48 md:h-28 overflow-hidden rounded-sm bg-gray-200 dark:bg-white/5 flex-shrink-0 order-last">
               <img 
                 src={nextProject.thumbnailUrl} 
                 alt={nextProject.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
               />
            </div>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-brand-white dark:bg-brand-black transition-colors duration-500">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center p-12 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 transition-colors duration-500 shadow-sm dark:shadow-none">
            <h3 className="text-2xl font-bold mb-4 text-brand-charcoal dark:text-white">Have a similar project?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Let's discuss how we can help you achieve similar results.</p>
            <Button to="/contact" variant="primary">Contact Us</Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectDetail;