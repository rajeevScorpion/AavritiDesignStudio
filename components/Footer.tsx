import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal dark:bg-black text-white py-20 px-6 border-t border-transparent dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter mb-6 lowercase">aavriti design studio</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              A creative engineering practice blending design, technology, and human innovation.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aavriti Design Studio.<br />
            Designing future ready experiences.
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Sitemap</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-lg hover:text-brand-accent dark:hover:text-brand-neon transition-colors">Home</Link></li>
            <li><a href="#studio" className="text-lg hover:text-brand-accent dark:hover:text-brand-neon transition-colors">Studio</a></li>
            <li><Link to="/work" className="text-lg hover:text-brand-accent dark:hover:text-brand-neon transition-colors">Work</Link></li>
            <li><a href="#contact" className="text-lg hover:text-brand-accent dark:hover:text-brand-neon transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Connect</h3>
          <ul className="flex space-x-6 mb-8">
            <li><a href="#" className="hover:text-brand-accent dark:hover:text-brand-neon transition-colors"><Linkedin size={24} /></a></li>
            <li><a href="#" className="hover:text-brand-accent dark:hover:text-brand-neon transition-colors"><Twitter size={24} /></a></li>
            <li><a href="#" className="hover:text-brand-accent dark:hover:text-brand-neon transition-colors"><Instagram size={24} /></a></li>
          </ul>
          <div>
            <p className="text-gray-400 mb-2">New Business</p>
            <a href="mailto:hello@aavriti.com" className="text-xl underline underline-offset-4 hover:text-brand-accent dark:hover:text-brand-neon transition-colors">hello@aavriti.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;