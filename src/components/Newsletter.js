import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createScrollAnimation } from '../utils/initializeGSAP';

const Newsletter = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    
    const section = sectionRef.current;
    const form = formRef.current;
    
    if (!section || !form) return;
    
    try {
      // Animation for content
      const animElements = section.querySelectorAll('.animate-in');
      if (animElements.length) {
        createScrollAnimation(
          animElements,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          { trigger: section }
        );
      }
      
      // Form animation
      createScrollAnimation(
        form,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3 },
        { trigger: section }
      );
    } catch (error) {
      console.error('Error in Newsletter animations:', error);
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      setError(t('newsletterSection.validation.required'));
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError(t('newsletterSection.validation.invalid'));
      return;
    }
    
    // Simulate form submission
    setError('');
    setSubmitted(true);
    
    // Reset form after submission (in a real app, you would send this to a server)
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <section 
      id="newsletter" 
      ref={sectionRef}
      className="py-24 px-4 bg-dark-bg"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="animate-in text-2xl md:text-3xl font-montserrat font-bold mb-4">{t('newsletterSection.title')}</h2>
        <p className="animate-in text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('newsletterSection.description')}
        </p>
        
        {submitted ? (
          <div className="animate-in bg-accent bg-opacity-10 border border-accent rounded-lg p-6 mb-8">
            <p className="text-white">{t('newsletterSection.success')}</p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder={t('newsletterSection.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-4 px-6 pr-32 bg-white bg-opacity-5 border border-gray-700 focus:border-accent rounded-full text-white outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-6 bg-accent bg-opacity-20 hover:bg-opacity-30 border border-accent rounded-full transition-all duration-300"
              >
                {t('newsletterSection.button')}
              </button>
            </div>
            {error && (
              <p className="text-red-400 mt-2 text-sm absolute">{error}</p>
            )}
          </form>
        )}
        
        <p className="animate-in text-gray-500 text-sm mt-8">
          {t('newsletterSection.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
