import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { SERVICES, PROJECTS, DIGITAL_PRODUCTS, FOUNDERS, TESTIMONIALS } from '../constants';
import { Code, Box, Layers, ArrowUpRight, Quote, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 4);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const words = ["CREATIVITY", "CODE", "COMPASSION"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({...formState, [e.target.name]: e.target.value });
  }

  return (
    <div className="w-full overflow-hidden bg-brand-white dark:bg-brand-black transition-colors duration-500" id="top">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 py-24 border-b border-gray-200 dark:border-white/10 bg-grid-light dark:bg-grid-dark transition-colors duration-500">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute left-1/4 h-full w-[1px] bg-gray-200 dark:bg-white/5 transition-colors duration-500"></div>
            <div className="absolute right-1/4 h-full w-[1px] bg-gray-200 dark:bg-white/5 transition-colors duration-500"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
          <div className="lg:col-span-10 lg:col-start-1">
            <ScrollReveal>
              <div className="inline-block px-4 py-1 mb-6 border border-brand-charcoal dark:border-brand-neon rounded-full transition-colors duration-500">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-charcoal dark:text-brand-neon transition-colors duration-500">System Status: Online</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-brand-charcoal dark:text-white mb-8 transition-colors duration-500">
                DESIGNING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-600 dark:from-brand-neon dark:to-brand-accent">FUTURES</span> <br/>
                <span className="whitespace-nowrap">
                  WITH <span className={`inline-block transition-all duration-500 ease-in-out ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{words[index]}</span>
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light mb-12 border-l-2 border-brand-accent dark:border-brand-neon pl-6 transition-colors duration-500">
                Aavriti Design Studio is a creative engineering practice blending communication design, interaction design, and emerging technologies.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button to="/work" showIcon variant="primary">View Our Work</Button>
                <Button to="#contact" variant="outline" anchor>Let's Collaborate</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Studio / About Section */}
      <section id="studio" className="py-24 px-6 border-b border-gray-200 dark:border-white/10 relative bg-white dark:bg-brand-black transition-colors duration-500">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 <div className="lg:col-span-4">
                     <ScrollReveal>
                        <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-4">[01] The Studio</h2>
                        <h3 className="text-4xl font-bold text-brand-charcoal dark:text-white mb-6 transition-colors duration-500">Humanizing Technology</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-500">
                            We don't just build products; we engineer experiences. Our approach combines Swiss design precision with the chaotic energy of emerging tech.
                        </p>
                     </ScrollReveal>
                 </div>
                 <div className="lg:col-span-8">
                     <ScrollReveal delay={200}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="bg-gray-50 dark:bg-white/5 p-8 border border-gray-200 dark:border-white/10 transition-colors duration-500">
                                 <h4 className="font-mono text-xl mb-4 text-brand-charcoal dark:text-white transition-colors duration-500">Design & Code</h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">Bridging the gap between Figma and VS Code. We speak both languages fluently.</p>
                             </div>
                             <div className="bg-gray-50 dark:bg-white/5 p-8 border border-gray-200 dark:border-white/10 transition-colors duration-500">
                                 <h4 className="font-mono text-xl mb-4 text-brand-charcoal dark:text-white transition-colors duration-500">R&D Lab</h4>
                                 <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">Experimenting with Generative AI, WebGL, and Spatial Computing to find the next big thing.</p>
                             </div>
                         </div>
                     </ScrollReveal>
                 </div>
             </div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-brand-surface transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-16">[02] Capabilities</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group border-t border-gray-200 dark:border-white/20 pt-8 transition-colors hover:border-brand-charcoal dark:hover:border-brand-neon relative">
                  <span className="absolute top-0 right-0 text-xs font-mono text-gray-300 dark:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="text-2xl font-medium mb-4 text-brand-charcoal dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-neon transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm transition-colors duration-300">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 bg-white dark:bg-brand-black border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <ScrollReveal>
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-4 block">[03] Selected Work</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal dark:text-white transition-colors duration-500">Recent Case Studies</h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button to="/work" variant="outline" showIcon>View Archive</Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section (Moved) */}
      <section className="py-24 px-6 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-brand-surface transition-colors duration-500">
         <div className="max-w-7xl mx-auto">
            <ScrollReveal>
                <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-12 transition-colors duration-500">Leadership</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FOUNDERS.map((founder, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                    <div className="group relative">
                    <div className="overflow-hidden mb-6 bg-gray-100 dark:bg-white/5 aspect-[3/4] border border-transparent group-hover:border-brand-accent dark:group-hover:border-brand-neon transition-colors duration-500">
                        <img 
                        src={founder.imageUrl} 
                        alt={founder.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" 
                        />
                    </div>
                    <h3 className="text-xl font-bold text-brand-charcoal dark:text-white transition-colors duration-500">{founder.name}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-3 transition-colors duration-500">{founder.title}</p>
                    <div className="flex space-x-3 text-gray-500 hover:text-brand-charcoal dark:hover:text-white transition-colors duration-300">
                        {founder.socials.linkedin && <a href={founder.socials.linkedin} data-cursor="hover"><Linkedin size={18} /></a>}
                        {founder.socials.email && <a href={`mailto:${founder.socials.email}`} data-cursor="hover"><Mail size={18} /></a>}
                    </div>
                    </div>
                </ScrollReveal>
                ))}
            </div>
         </div>
      </section>

      {/* Digital Products */}
      <section className="py-24 px-6 bg-white dark:bg-brand-black border-b border-gray-200 dark:border-white/10 transition-colors duration-500 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <ScrollReveal>
                <div className="inline-block p-3 rounded-2xl bg-gray-50 dark:bg-white/10 mb-6 shadow-sm dark:shadow-none transition-colors duration-500">
                  <Layers className="text-brand-accent dark:text-brand-neon w-8 h-8" />
                </div>
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-4">[04] Labs</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white transition-colors duration-500">Internal Products</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 transition-colors duration-500">
                  We are also building independent digital tools that empower creators, educators, and design teams.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {DIGITAL_PRODUCTS.map((product, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:border-brand-accent dark:hover:border-brand-neon transition-colors duration-300 h-full flex flex-col justify-between group shadow-sm dark:shadow-none rounded-xl">
                    <div>
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 font-mono text-brand-charcoal dark:text-white transition-colors duration-300">
                        {index === 0 ? <Code size={20} className="text-brand-accent dark:text-brand-neon"/> : <Box size={20} className="text-brand-accent dark:text-brand-neon"/>}
                        {product.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">{product.description}</p>
                    </div>
                    <a href={product.link} className="inline-flex items-center text-sm font-bold text-brand-charcoal dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-neon transition-colors uppercase tracking-widest font-mono" data-cursor="hover">
                      {product.ctaText} <ArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-brand-surface transition-colors duration-500">
         <div className="max-w-7xl mx-auto">
            <ScrollReveal>
                <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-16">[05] Signal</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <ScrollReveal key={i} delay={i * 100}>
                        <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 h-full flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
                             <Quote size={48} className="absolute top-4 right-4 text-gray-200 dark:text-white/5 -z-0" />
                             <p className="text-lg text-brand-charcoal dark:text-gray-200 mb-8 italic z-10 relative transition-colors duration-500">"{t.quote}"</p>
                             <div>
                                 <p className="font-bold text-brand-charcoal dark:text-white transition-colors duration-500">{t.author}</p>
                                 <p className="text-xs font-mono text-brand-accent dark:text-brand-neon uppercase transition-colors duration-500">{t.role}, {t.company}</p>
                             </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-grid-light dark:bg-grid-dark transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
             <ScrollReveal>
                 <div className="text-center mb-16">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-brand-accent dark:text-brand-neon mb-4">[06] Initiate Protocol</h2>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-charcoal dark:text-white mb-6 transition-colors duration-500">Let's Build The Future.</h3>
                    <p className="text-xl text-gray-500 dark:text-gray-400 transition-colors duration-500">Ready to start a project? Fill out the form below.</p>
                 </div>
             </ScrollReveal>

             <ScrollReveal delay={200} className="bg-white/80 dark:bg-brand-black/80 backdrop-blur-sm p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none transition-colors duration-500">
                 <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                             <label className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400">Name</label>
                             <input type="text" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-brand-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-accent dark:focus:border-brand-neon transition-colors" placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                             <label className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400">Email</label>
                             <input type="email" className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-brand-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-accent dark:focus:border-brand-neon transition-colors" placeholder="john@company.com" />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400">Message</label>
                         <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 py-2 text-brand-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-accent dark:focus:border-brand-neon transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
                     </div>
                     <div className="pt-4">
                         <Button variant="primary" className="w-full md:w-auto">Transmit Message</Button>
                     </div>
                 </form>
             </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Home;