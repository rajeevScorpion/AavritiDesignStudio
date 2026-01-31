import React, { useState, useMemo } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = PROJECTS.map(p => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="w-full pt-12 px-6 pb-24 bg-brand-white dark:bg-brand-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16">
          <ScrollReveal>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-brand-charcoal dark:text-white mb-8 transition-colors duration-500">
              Work
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-light mb-12 transition-colors duration-500">
              A repository of experiments, products, and brands engineered for impact.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-4 border-b border-gray-200 dark:border-white/10 pb-8 transition-colors duration-500">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        data-cursor="hover"
                        className={`text-sm font-mono uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
                            filter === cat 
                            ? 'bg-brand-charcoal text-white border-brand-charcoal dark:bg-brand-neon dark:text-brand-black dark:border-brand-neon' 
                            : 'bg-transparent text-gray-500 border-gray-200 dark:text-gray-400 dark:border-white/10 hover:border-brand-charcoal dark:hover:border-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
          </ScrollReveal>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 min-h-[50vh]">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;