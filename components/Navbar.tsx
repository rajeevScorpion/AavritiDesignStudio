import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage or preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, path: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      if (location.pathname !== '/') {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(path);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '#top', isAnchor: true },
    { name: 'Studio', path: '#studio', isAnchor: true },
    { name: 'Services', path: '#services', isAnchor: true },
    { name: 'Work', path: '/work', isAnchor: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 dark:bg-brand-black/90 backdrop-blur-md border-gray-200 dark:border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter z-50 text-brand-charcoal dark:text-white flex items-center gap-3 group" data-cursor="hover">
          <div className="w-3 h-3 bg-brand-accent dark:bg-brand-neon rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <span className="lowercase">aavriti design studio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            link.isAnchor ? (
               <a
                 key={link.name}
                 href={link.path}
                 onClick={(e) => handleNavClick(e, link.path, true)}
                 className="text-sm font-medium font-mono uppercase tracking-widest text-gray-500 hover:text-brand-charcoal dark:text-gray-400 dark:hover:text-brand-neon transition-colors duration-300"
                 data-cursor="hover"
               >
                 {link.name}
               </a>
            ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium font-mono uppercase tracking-widest transition-colors duration-300 hover:text-brand-accent dark:hover:text-brand-neon ${
                    location.pathname === link.path ? 'text-brand-charcoal dark:text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}
                  data-cursor="hover"
                >
                  {link.name}
                </Link>
            )
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-brand-charcoal dark:text-white"
            data-cursor="hover"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button
             onClick={() => {
                if(location.pathname !== '/') navigate('/');
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
             }}
             variant="primary"
             className="!px-6 !py-2 !text-xs"
          >
            LET'S TALK
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-brand-charcoal dark:text-white"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
            className="z-50 text-brand-charcoal dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white dark:bg-brand-black z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
             link.isAnchor ? (
                 <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                        setIsOpen(false);
                        handleNavClick(e, link.path, true);
                    }}
                    className="text-3xl font-light text-brand-charcoal dark:text-white hover:text-brand-accent dark:hover:text-brand-neon tracking-tight"
                 >
                    {link.name}
                 </a>
             ) : (
                <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-light text-brand-charcoal dark:text-white hover:text-brand-accent dark:hover:text-brand-neon tracking-tight"
                >
                {link.name}
                </Link>
             )
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-light text-brand-charcoal dark:text-white hover:text-brand-accent dark:hover:text-brand-neon tracking-tight">
              Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;