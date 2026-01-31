import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(0.8)`;
      }
    };

    const onMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      }
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target or its parents have data-cursor attribute or are interactive
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('[data-cursor="hover"]') ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    // Global listener for hover detection
    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       const isInteractive = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.closest('[data-cursor="hover"]');
       setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isHovering, isVisible]);

  // Smooth follow logic for the outer circle
  useEffect(() => {
    let animationFrameId: number;
    
    const render = () => {
      if (cursorRef.current && cursorDotRef.current) {
        // Dot follows instantly
        cursorDotRef.current.style.left = `${position.x}px`;
        cursorDotRef.current.style.top = `${position.y}px`;

        // Circle follows with slight delay (handled by CSS transition usually, or manual lerp)
        // Here we use direct assignment with CSS transition for simplicity
        cursorRef.current.style.left = `${position.x}px`;
        cursorRef.current.style.top = `${position.y}px`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] rounded-full border border-brand-charcoal dark:border-brand-neon transition-all duration-300 ease-out flex items-center justify-center mix-blend-difference ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '60px' : '20px',
          height: isHovering ? '60px' : '20px',
          transform: 'translate(-50%, -50%)',
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
      />
      <div 
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] w-2 h-2 bg-brand-accent rounded-full -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
};

export default CustomCursor;