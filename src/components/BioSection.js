import React, { useRef, useEffect, useState } from 'react';
import { initializeGSAP, createScrollAnimation } from '../utils/initializeGSAP';

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
          <p className="mb-6 leading-relaxed">
            Lalo Gix, ingeniero de software de día y "productor musical" de noche, emerge como una 
            figura reconocida en su sala de estar, donde crea música experimental cuando los bugs del código son demasiado obstinados y necesita desahogar sus frustraciones rítmicamente.
          </p>
          
          <p className="mb-6 leading-relaxed">
            Nunca ha ganado el prestigioso premio Grammy, ni el Billboard, ni siquiera una mención 
            honorífica en el concurso de talentos local, principalmente porque nunca ha sido invitado 
            a participar en ninguno de ellos. Su música resuena profundamente con sus más fieles seguidores: 
            su novia, su mamá, y ocasionalmente, su amigo Luis cuando logra pagar su suscripción a Spotify.

          </p>
          
          <div ref={expandedContentRef} className={`overflow-hidden ${expanded ? '' : 'h-0 opacity-0'}`}>
            <p className="mb-6 leading-relaxed">
              Su próxima gira "Mi Casa Es Tu Casa Tour 2025" incluye presentaciones exclusivas en su sala, 
              su cocina y, si el clima lo permite, en el patio trasero donde sus perros son el público más 
              leal. Ellos nunca se pierden una sesión de estudio, demostrando que el verdadero talento se 
              reconoce incluso entre especies.
            </p>
            
            <p className="mb-6 leading-relaxed">
              Con su MacBook desgastado y GarageBand como aliados, conectados heroicamente a un piano digital 
              y un micrófono comprado en oferta, Lalo define lo que significa ser un artista independiente 
              en el sentido más literal del término. Su estudio, situado estratégicamente entre la lavadora 
              y el refrigerador, le proporciona la acústica perfecta para sus composiciones atmosféricas y 
              el fácil acceso a refrigerios durante las largas sesiones nocturnas.
            </p>
            
            <p className="mb-6 leading-relaxed">
            Lalo Gix creó esta página web con la esperanza de que otros artistas independientes pudieran 
              encontrarla útil como plantilla. El repositorio es código abierto en su GitHub, porque 
              compartir es vivir, especialmente cuando no se tienen contratos discográficos exclusivos que lo impidan.
            </p>
            <p className="mb-6 leading-relaxed">
              A pesar de su falta de fama internacional o incluso reconocimiento en su vecindario, 
              Lalo sigue dedicado a su arte, feliz de compartir su música con las personas que conoce 
              y le importan. Porque al final del día, ¿no es eso lo que realmente importa? (Eso, y que 
              los perros no ladren durante la grabación).
            </p>

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
