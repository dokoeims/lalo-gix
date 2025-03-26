import React, { useRef, useEffect } from 'react';
import { createScrollAnimation } from '../utils/initializeGSAP';
import { TOUR_NAME, EVENTS } from '../config/artistConfig';

const EventsSection = () => {
  const sectionRef = useRef(null);
  const eventsListRef = useRef(null);
  
  useEffect(() => {
    
    const section = sectionRef.current;
    const eventsList = eventsListRef.current;
    
    if (!section || !eventsList) return;
    
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
      
      // Event items animation
      const eventItems = eventsList.querySelectorAll('.event-item');
      if (eventItems.length) {
        createScrollAnimation(
          eventItems,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 },
          { trigger: section }
        );
      }
    } catch (error) {
      console.error('Error in EventsSection animations:', error);
    }
  }, []);
  
  return (
    <section 
      id="events" 
      ref={sectionRef}
      className="py-24 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-12">{TOUR_NAME}</h2>
        
        {/* Events list */}
        <div ref={eventsListRef} className="max-w-4xl mx-auto">
          {EVENTS.map(event => (
            <div 
              key={event.id} 
              className="event-item bg-white bg-opacity-5 rounded-md p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-opacity-10 transition-all duration-300"
            >
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
                <div className="text-xl md:text-2xl font-montserrat font-medium text-accent mb-2 md:mb-0 md:w-24">
                  {event.date}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-400">{event.location}</p>
                  <p className="text-gray-500 text-sm mt-1 italic">{event.note}</p>
                </div>
              </div>
              
              <a 
                href={event.ticketLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-2 bg-accent bg-opacity-20 border border-accent rounded-full text-white hover:bg-opacity-30 transition-all duration-300 text-center md:text-left"
              >
                COMPRAR ENTRADAS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
