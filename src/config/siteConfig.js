/**
 * Site Configuration
 * 
 * Este archivo centraliza toda la información personalizable del sitio web.
 * Puedes modificar estos valores para adaptar el sitio a tu propio artista o banda.
 */

// Información general del artista
export const ARTIST = {
  name: 'LALO GIX',
  tagline: 'SONIDOS IMPERFECTOS',
  email: 'soy@lalogix.me',
  location: 'CDMX, México',
  copyright: `© ${new Date().getFullYear()} Todos los derechos reservados.`,
  repoUrl: 'https://github.com/dokoeims/lalo-gix',
};

// Biografía del artista (corta y expandida)
export const BIO = {
  short: [
    'Lalo Gix, ingeniero de software de día y "productor musical" de noche, emerge como una figura reconocida en su sala de estar, donde crea música experimental cuando los bugs del código son demasiado obstinados y necesita desahogar sus frustraciones rítmicamente.',
    'Nunca ha ganado el prestigioso premio Grammy, ni el Billboard, ni siquiera una mención honorífica en el concurso de talentos local, principalmente porque nunca ha sido invitado a participar en ninguno de ellos. Su música resuena profundamente con sus más fieles seguidores: su novia, su familia, y ocasionalmente, su amigo Luis cuando logra pagar su suscripción a Spotify.'
  ],
  expanded: [
    'Su próxima gira "Mi Casa Es Tu Casa Tour 2025" incluye presentaciones exclusivas en su sala, su cocina y, si el clima lo permite, en el patio trasero donde sus perros son el público más leal. Ellos nunca se pierden una sesión de estudio, demostrando que el verdadero talento se reconoce incluso entre especies.',
    'Con su MacBook desgastado y GarageBand como aliados, conectados heroicamente a un piano digital y un micrófono comprado en oferta, Lalo define lo que significa ser un artista independiente en el sentido más literal del término. Su estudio, situado estratégicamente entre la lavadora y el refrigerador, le proporciona la acústica perfecta para sus composiciones atmosféricas y el fácil acceso a refrigerios durante las largas sesiones nocturnas.',
    'Lalo Gix creó esta página web con la esperanza de que otros artistas independientes pudieran encontrarla útil como plantilla. El repositorio es código abierto en su GitHub, porque compartir es vivir, especialmente cuando no se tienen contratos discográficos exclusivos que lo impidan.',
    'A pesar de su falta de fama internacional o incluso reconocimiento en su vecindario, Lalo sigue dedicado a su arte, feliz de compartir su música con las personas que conoce y le importan. Porque al final del día, ¿no es eso lo que realmente importa? (Eso, y que los perros no ladren durante la grabación).'
  ]
};

// Links de redes sociales
export const SOCIAL_LINKS = {
  soundcloud: 'https://on.soundcloud.com/YrNvtUJVVFx6T1MCA',
  spotify: 'https://open.spotify.com/playlist/0rNqNAfvMJmgcFIf2K8p2v',
  appleMusic: 'https://music.apple.com/mx/artist/lalo-gix/1802348702',
  tidal: 'https://tidal.com/browse/playlist/05b3f02c-7c2b-4041-9c55-ee46e4d1f06e',
  youtubeMusic: 'https://music.youtube.com/playlist?list=PLHIvrTlxasADGC6Eb55HBsM59pN-3v2sb&si=d6U8JX_RbJrmadUq',
  amazonMusic: 'https://music.amazon.com.mx/artists/B0F1KL7LL4',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
};

const siteConfig = {
  ARTIST,
  BIO,
  SOCIAL_LINKS,
};

export default siteConfig;
