import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'neon';
  to?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  external?: boolean;
  anchor?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  showIcon = false,
  external = false,
  anchor = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium font-mono tracking-wide transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-none uppercase border-2";
  
  const variants = {
    primary: "bg-brand-charcoal border-brand-charcoal text-white hover:bg-brand-accent hover:border-brand-accent dark:bg-white dark:text-brand-black dark:border-white dark:hover:bg-brand-neon dark:hover:border-brand-neon dark:hover:text-brand-black",
    secondary: "bg-transparent text-brand-charcoal border-brand-charcoal hover:bg-brand-charcoal hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-brand-black",
    neon: "bg-brand-neon border-brand-neon text-brand-black hover:bg-white hover:border-white",
    outline: "bg-transparent border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white dark:border-brand-gray dark:text-brand-gray dark:hover:border-white dark:hover:text-white",
    text: "bg-transparent border-transparent text-brand-charcoal dark:text-white p-0 hover:text-brand-accent dark:hover:text-brand-neon underline-offset-4 hover:underline"
  };

  const content = (
    <>
      {children}
      {showIcon && <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${className} group`;

  if (anchor && to) {
      return (
          <a href={to} className={classes} data-cursor="hover">
              {content}
          </a>
      )
  }

  if (to) {
    if (external) {
       return (
         <a href={to} target="_blank" rel="noopener noreferrer" className={classes} data-cursor="hover">
           {content}
         </a>
       );
    }
    return (
      <Link to={to} className={classes} data-cursor="hover">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} data-cursor="hover">
      {content}
    </button>
  );
};

export default Button;