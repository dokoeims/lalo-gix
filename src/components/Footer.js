import React from 'react';
import { ARTIST_INFO, STREAMING_PLATFORMS, SOCIAL_MEDIA } from '../config/artistConfig';

const Footer = () => {
  return (
    <footer className="bg-darker-bg py-12 px-4">
      <div className="container mx-auto">
        <div className="border-b border-gray-800 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold font-montserrat">LALO GIX</a>
            <p className="text-gray-400 mt-2 text-sm">Template React.js de código abierto para artistas musicales. <a href="https://github.com/dokoeims/lalo-gix" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Disponible en GitHub</a>.</p>
            <p className="text-gray-500 mt-2">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Conectar</h3>
              <ul className="space-y-2">
                <li><a href={`mailto:${ARTIST_INFO.email}`} className="text-gray-400 hover:text-accent transition-colors">Email</a></li>
                <li><a href={`mailto:${ARTIST_INFO.bookingEmail}`} className="text-gray-400 hover:text-accent transition-colors">Booking</a></li>
                <li><a href={`mailto:${ARTIST_INFO.pressEmail}`} className="text-gray-400 hover:text-accent transition-colors">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Música</h3>
              <ul className="space-y-2">
                {Object.values(STREAMING_PLATFORMS).map(platform => (
                  <li key={platform.name}>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Términos de Uso</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">Creado con amor en CDMX</p>
          
          <div className="flex space-x-4">
            {Object.entries(SOCIAL_MEDIA).map(([platform, url]) => (
              <a 
                key={platform}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-opacity-10 transition-all duration-300"
                aria-label={platform}
              >
                {/* Simplified social icons - in a real project, use actual platform icons */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  {platform === 'instagram' ? (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  ) : platform === 'twitter' ? (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  ) : platform === 'youtube' ? (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  ) : platform === 'facebook' ? (
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  ) : platform === 'tiktok' ? (
                    <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  ) : (
                    /* Default icon for other platforms */
                    <circle cx="12" cy="12" r="10" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-accent bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
