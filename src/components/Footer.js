import React from 'react';

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
                <li><a href="mailto:soy@lalogix.me" className="text-gray-400 hover:text-accent transition-colors">Email</a></li>
                <li><a href="mailto:soy@lalogix.me" className="text-gray-400 hover:text-accent transition-colors">Booking</a></li>
                <li><a href="mailto:soy@lalogix.me" className="text-gray-400 hover:text-accent transition-colors">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Música</h3>
              <ul className="space-y-2">
                <li><a href="https://on.soundcloud.com/YrNvtUJVVFx6T1MCA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">SoundCloud</a></li>
                <li><a href="https://open.spotify.com/playlist/0rNqNAfvMJmgcFIf2K8p2v" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Spotify</a></li>
                <li><a href="https://music.apple.com/mx/artist/lalo-gix/1802348702" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Apple Music</a></li>
                <li><a href="https://tidal.com/browse/playlist/05b3f02c-7c2b-4041-9c55-ee46e4d1f06e" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Tidal</a></li>
                <li><a href="https://music.youtube.com/playlist?list=PLHIvrTlxasADGC6Eb55HBsM59pN-3v2sb&si=d6U8JX_RbJrmadUq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">YouTube Music</a></li>
                <li><a href="https://music.amazon.com.mx/artists/B0F1KL7LL4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">Amazon Music</a></li>
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
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-opacity-10 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-opacity-10 transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white bg-opacity-5 flex items-center justify-center hover:bg-opacity-10 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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
