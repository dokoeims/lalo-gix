import React, { useRef, useEffect, useState } from 'react';
import { initializeGSAP, createScrollAnimation } from '../utils/initializeGSAP';
import { BIO, ARTIST_INFO } from '../config/artistConfig';

const BioSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    
    const section = sectionRef.current;
    const card = cardRef.current;
    
    if (!section || !card) return;
    
    try {
      // Animation for the section title
      const titleElement = section.querySelector('h2');
      if (titleElement) {
        createScrollAnimation(
          titleElement,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          { trigger: section }
        );
      }
      
      // Glass card animation
      createScrollAnimation(
        card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
        { trigger: section }
      );
      
      // Content animations
      const paragraphs = card.querySelectorAll('p');
      if (paragraphs.length) {
        createScrollAnimation(
          paragraphs,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 },
          { trigger: section }
        );
      }
    } catch (error) {
      console.error('Error in BioSection animations:', error);
    }
  }, []);
  
  // Handle expanding/collapsing bio text using useRef for better targeting
  const expandedContentRef = useRef(null);
  
  const toggleExpanded = () => {
    // Initialize GSAP
    const { gsap } = initializeGSAP();
    
    setExpanded(!expanded);
    
    // Make sure we have the DOM element before animating
    if (!expandedContentRef.current) return;
    
    try {
      // Animate the expansion/collapse
      if (!expanded) {
        gsap.fromTo(
          expandedContentRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      } else {
        gsap.to(expandedContentRef.current, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' });
      }
    } catch (error) {
      console.error('Error in bio toggling animation:', error);
    }
  };
  
  return (
    <section 
      id="bio" 
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-light-bg to-dark-bg"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">ACERCA DE LALO GIX</h2>
        
        {/* Bio content with glass card */}
        <div 
          ref={cardRef}
          className="glass-card p-8 max-w-4xl mx-auto"
        >
          {BIO.shortBio.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div ref={expandedContentRef} className={`overflow-hidden ${expanded ? '' : 'h-0 opacity-0'}`}>
            {BIO.fullBio.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph.includes('GitHub') ? (
                  <span dangerouslySetInnerHTML={{ __html: paragraph.replace('GitHub', `<a href="${ARTIST_INFO.githubRepo}" target="_blank" rel="noopener noreferrer" class='text-accent hover:text-accent/80 transition-colors duration-300'>GitHub</a>`) }} />
                ) : paragraph}
              </p>
            ))}
          </div>
          
          <button 
            onClick={toggleExpanded}
            className="text-accent hover:text-accent/80 transition-colors duration-300 flex items-center mt-2"
          >
            {expanded ? 'LEER MENOS' : 'LEER MÁS'}
            <svg 
              className={`ml-1 w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
