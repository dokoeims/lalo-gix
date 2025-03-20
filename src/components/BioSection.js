import React, { useRef, useEffect, useState } from 'react';
import { initializeGSAP, createScrollAnimation } from '../utils/initializeGSAP';

const BioSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const { gsap } = initializeGSAP();
    
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
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">ABOUT LALO GIX</h2>
        
        {/* Bio content with glass card */}
        <div 
          ref={cardRef}
          className="glass-card p-8 max-w-4xl mx-auto"
        >
          <p className="mb-6 leading-relaxed">
            Lalo Gix is an electronic music producer and performer known for blending ambient
            soundscapes with experimental rhythms. Based in Berlin, his unique approach to
            electronic music has earned him recognition in the underground scene.
          </p>
          
          <p className="mb-6 leading-relaxed">
            Drawing inspiration from both natural environments and urban landscapes, Lalo's
            music creates immersive experiences that transport listeners to otherworldly realms.
            His live performances feature improvisation and visual elements that complement
            the sonic journey.
          </p>
          
          <div ref={expandedContentRef} className={`overflow-hidden ${expanded ? '' : 'h-0 opacity-0'}`}>
            <p className="mb-6 leading-relaxed">
              With a background in classical music and sound design, Lalo Gix brings a deep
              understanding of sonic textures to his productions. His work often explores the
              boundaries between organic and synthetic sounds, creating a signature style that
              defies easy categorization.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Since his debut in 2018, Lalo has released a series of critically acclaimed EPs
              and albums, each showcasing a progression in his artistic vision. His collaborations
              with visual artists and filmmakers have extended his creative reach beyond music
              into multisensory experiences.
            </p>
            
            <p className="mb-6 leading-relaxed">
              When not touring or in the studio, Lalo hosts workshops on sound design and
              electronic music production, sharing his knowledge with emerging artists. He
              remains committed to pushing the boundaries of electronic music while building
              community within the scene.
            </p>
          </div>
          
          <button 
            onClick={toggleExpanded}
            className="text-accent hover:text-accent/80 transition-colors duration-300 flex items-center mt-2"
          >
            {expanded ? 'READ LESS' : 'READ MORE'}
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
