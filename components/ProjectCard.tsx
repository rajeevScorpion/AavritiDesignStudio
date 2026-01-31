import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/work/${project.id}`} className="group block w-full cursor-none" data-cursor="hover">
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-brand-surface mb-6 border border-transparent group-hover:border-brand-accent dark:group-hover:border-brand-neon transition-colors duration-300">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-colors duration-500" />
        
        {/* Technical corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-brand-accent dark:border-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-brand-accent dark:border-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

        <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-brand-neon rounded-full text-brand-charcoal">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
           <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon">{project.category}</p>
           <span className="text-xs font-mono text-gray-400">[{project.year}]</span>
        </div>
        <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-2 group-hover:text-brand-accent dark:group-hover:text-brand-neon transition-colors">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{project.impactStatement}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;