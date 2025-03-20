import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BioSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    const card = cardRef.current;
    
    // Animation for the section title
    gsap.fromTo(
      section.querySelector('h2'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Glass card animation
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    // Content animations
    gsap.fromTo(
      card.querySelectorAll('p'),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);
  
  // Handle expanding/collapsing bio text
  const toggleExpanded = () => {
    setExpanded(!expanded);
    
    // Animate the expansion/collapse
    if (!expanded) {
      gsap.fromTo(
        '.expanded-content',
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to('.expanded-content', { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' });
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
          
          <div className={`expanded-content overflow-hidden ${expanded ? '' : 'h-0 opacity-0'}`}>
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
