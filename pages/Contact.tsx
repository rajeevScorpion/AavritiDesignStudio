import React, { useState } from 'react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    org: '',
    type: 'project',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. We will get back to you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full pt-12">
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-charcoal mb-8">
              Let's design something meaningful.
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-md">
              Whether you are building a product, a platform, or a future ready learning ecosystem, we would love to collaborate.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Studio</h3>
                <p className="text-brand-charcoal font-medium">hello@aavriti.com</p>
                <p className="text-brand-charcoal font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-2">Visit</h3>
                <p className="text-brand-charcoal font-medium">123 Innovation Drive,<br/>Tech District, CA 94103</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="org" className="text-sm font-medium text-gray-700">Organization / Company</label>
              <input
                type="text"
                id="org"
                name="org"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium text-gray-700">Inquiry Type</label>
              <select
                id="type"
                name="type"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                onChange={handleChange}
                value={formState.type}
              >
                <option value="project">New Project</option>
                <option value="consultancy">Academic Consultancy</option>
                <option value="speaking">Speaking / Workshop</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            <Button className="w-full" showIcon>Send Message</Button>
          </form>
        </ScrollReveal>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-gray-200 relative overflow-hidden grayscale">
         <img src="https://picsum.photos/1600/600?random=map" alt="Studio Location Map" className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg text-sm font-bold text-brand-charcoal">
               Aavriti Studio HQ
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;