/**
 * Central configuration file for artist information
 * 
 * This file contains all the constant data related to the artist, making it
 * easy to update the website with new information by modifying only this file.
 */

// Assets imports - Note: Import paths are relative to where this file is used
// If you experience import issues, adjust the paths accordingly
import HeroImage from '../assets/covers/danos_causa_natural.jpg';
import CircularProfileImage from '../assets/artist_profile.jpg';

// Streaming service icons
import AppleSVGLogo from '../assets/streaming_icons/Apple_Music_Icon_wht_sm_073120.svg';
import TidalSVGLogo from '../assets/streaming_icons/icons8-tidal.svg';
import AmazonMusicSVGLogo from '../assets/streaming_icons/icons8-amazon-music.svg';
import SoundCloudSVGLogo from '../assets/streaming_icons/icons8-soundcloud-logo.svg';
import SpotifySVGLogo from '../assets/streaming_icons/icons8-spotify-logo.svg';
import YoutubeSVGLogo from '../assets/streaming_icons/icons8-youtube-music.svg';

// Music imports
import CantStopThisFeelingAudio from '../assets/audios/cant_stop_this_feeling.mp3';
import TraslacionAudio from '../assets/audios/traslacion.mp3';
import DanosCausaNaturalAudio from '../assets/audios/danos_causa_natural.mp3';
import FalloCorazonAudio from '../assets/audios/fallo_corazon.mp3';
import UnPoquitoMasAudio from '../assets/audios/un_poquito_mas.mp3';
import ParsecAudio from '../assets/audios/parsec.mp3';
import CroakAudio from '../assets/audios/croak.mp3';

// Album covers
import CantStopThisFeelingCover from '../assets/covers/cant_stop_this_feeling.jpg';
import TraslacionCover from '../assets/covers/traslacion.jpg';
import DanosCausaNaturalCover from '../assets/covers/danos_causa_natural.jpg';
import FalloCorazonCover from '../assets/covers/fallo_corazon.jpg';
import UnPoquitoMasCover from '../assets/covers/un_poquito_mas.jpg';
import ParsecCover from '../assets/covers/parsec.jpg';
import CroakCover from '../assets/covers/croak.jpg';

// Basic artist information
export const ARTIST_INFO = {
  name: 'LALO GIX',
  tagline: 'SONIDOS IMPERFECTOS',
  email: 'soy@lalogix.me',
  bookingEmail: 'soy@lalogix.me',
  pressEmail: 'soy@lalogix.me',
  copyright: `© ${new Date().getFullYear()} Todos los derechos reservados.`,
  location: 'CDMX',
  githubRepo: 'https://github.com/dokoeims/lalo-gix'
};

// Social media links
export const SOCIAL_MEDIA = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
  facebook: 'https://facebook.com',
  tiktok: 'https://tiktok.com'
};

// Streaming platform links
export const STREAMING_PLATFORMS = {
  soundcloud: {
    url: 'https://on.soundcloud.com/YrNvtUJVVFx6T1MCA',
    icon: SoundCloudSVGLogo,
    name: 'SoundCloud'
  },
  spotify: {
    url: 'https://open.spotify.com/playlist/0rNqNAfvMJmgcFIf2K8p2v',
    icon: SpotifySVGLogo,
    name: 'Spotify'
  },
  appleMusic: {
    url: 'https://music.apple.com/mx/artist/lalo-gix/1802348702',
    icon: AppleSVGLogo,
    name: 'Apple Music'
  },
  tidal: {
    url: 'https://tidal.com/browse/playlist/05b3f02c-7c2b-4041-9c55-ee46e4d1f06e',
    icon: TidalSVGLogo,
    name: 'Tidal'
  },
  youtubeMusic: {
    url: 'https://music.youtube.com/playlist?list=PLHIvrTlxasADGC6Eb55HBsM59pN-3v2sb&si=d6U8JX_RbJrmadUq',
    icon: YoutubeSVGLogo,
    name: 'YouTube Music'
  },
  amazonMusic: {
    url: 'https://music.amazon.com.mx/artists/B0F1KL7LL4',
    icon: AmazonMusicSVGLogo,
    name: 'Amazon Music'
  }
};

// Hero section configuration
export const HERO_SECTION = {
  backgroundImage: HeroImage,
  profileImage: CircularProfileImage
};

// Featured release (latest release)
export const LATEST_RELEASE = {
  title: 'CROAK',
  type: 'SENCILLO',
  releaseDate: 'Noviembre 2020',
  coverImage: CroakCover,
  description: 'Eran el dúo dinámico de la laguna, hasta que el amor se escurrió entre sus patas. Ahora, una salta sin mirar atrás, mientras la otra sigue atrapada en el lodo de los recuerdos. 🐸💔',
  tracks: [
    { 
      id: 101, 
      title: 'Croak', 
      duration: '0:30', 
      album: 'Croak - Single',
      audioUrl: CroakAudio,
      spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
      appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
      tidalUrl: 'https://tidal.com/browse/track/424566323',
      youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
      amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
      soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
    },
  ]
};

// Full discography
export const ALBUMS = [
  {
    id: 102,
    title: "CAN'T STOP THIS FEELING (GOING DOWN)",
    type: 'SINGLE',
    year: '2021',
    coverImage: CantStopThisFeelingCover,
    tracks: [
      { 
        id: 202, 
        title: "Can't Stop This Feeling (Going Down)",
        duration: '0:30', 
        album: "Can't Stop This Feeling (Going Down) - Single",
        audioUrl: CantStopThisFeelingAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ]
  },
  {
    id: 104,
    title: 'DAÑOS CAUSA NATURAL',
    type: 'SINGLE',
    year: '2021',
    coverImage: DanosCausaNaturalCover,
    tracks: [
      { 
        id: 204, 
        title: 'Daños Causa Natural', 
        duration: '0:30', 
        album: 'Danos Causa Natural - Single', 
        audioUrl: DanosCausaNaturalAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ],
  },
  {
    id: 105,
    title: 'FALLO CORAZÓN',
    type: 'SINGLE',
    year: '2025',
    coverImage: FalloCorazonCover,
    tracks: [
      { 
        id: 205, 
        title: 'Fallo Corazón', 
        duration: '0:30', 
        album: 'Fallo Corazón - Single', 
        audioUrl: FalloCorazonAudio 
      },
    ],
  },
  {
    id: 106,
    title: 'UN POQUITO MÁS',
    type: 'SINGLE',
    year: '2025',
    coverImage: UnPoquitoMasCover,
    tracks: [
      { 
        id: 206, 
        title: 'Un Poquito Más', 
        duration: '0:30', 
        album: 'Un Poquito Más - Single', 
        audioUrl: UnPoquitoMasAudio 
      },
    ],
  },
  {
    id: 103,
    title: 'TRASLACIÓN',
    type: 'SINGLE',
    year: '2025',
    coverImage: TraslacionCover,
    tracks: [
      { 
        id: 203, 
        title: 'Traslacion', 
        duration: '0:30', 
        album: 'Traslacion - Single', 
        audioUrl: TraslacionAudio,
        spotifyUrl: 'https://open.spotify.com/track/2R12hIKqax4p9pOVuYmEDQ',
        appleMusicUrl: 'https://music.apple.com/mx/album/croak/1802811045?i=1802811046',
        tidalUrl: 'https://tidal.com/browse/track/424566323',
        youtubeMusicUrl: 'https://music.youtube.com/watch?v=MkxLJmHn-c4&si=x__jU7VhUuiDme9q',
        amazonMusicUrl: 'https://music.amazon.com.mx/tracks/B0F1SDXWW3',
        soundcloudUrl: 'https://soundcloud.com/lalo-gix/croak',
      },
    ]
  },
  {
    id: 107,
    title: 'PARSEC',
    type: 'SINGLE',
    year: '2020',
    coverImage: ParsecCover,
    tracks: [
      { 
        id: 207, 
        title: 'Parsec', 
        duration: '0:30', 
        album: 'Parsec - Single', 
        audioUrl: ParsecAudio 
      },
    ],
  }
];

// Artist biography text
export const BIO = {
  shortBio: [
    'Lalo Gix, ingeniero de software de día y "productor musical" de noche, emerge como una figura reconocida en su sala de estar, donde crea música experimental cuando los bugs del código son demasiado obstinados y necesita desahogar sus frustraciones rítmicamente.',
    'Nunca ha ganado el prestigioso premio Grammy, ni el Billboard, ni siquiera una mención honorífica en el concurso de talentos local, principalmente porque nunca ha sido invitado a participar en ninguno de ellos. Su música resuena profundamente con sus más fieles seguidores: su novia, su familia, y ocasionalmente, su amigo Luis cuando logra pagar su suscripción a Spotify.'
  ],
  fullBio: [
    'Su próxima gira "Mi Casa Es Tu Casa Tour 2025" incluye presentaciones exclusivas en su sala, su cocina y, si el clima lo permite, en el patio trasero donde sus perros son el público más leal. Ellos nunca se pierden una sesión de estudio, demostrando que el verdadero talento se reconoce incluso entre especies.',
    'Con su MacBook desgastado y GarageBand como aliados, conectados heroicamente a un piano digital y un micrófono comprado en oferta, Lalo define lo que significa ser un artista independiente en el sentido más literal del término. Su estudio, situado estratégicamente entre la lavadora y el refrigerador, le proporciona la acústica perfecta para sus composiciones atmosféricas y el fácil acceso a refrigerios durante las largas sesiones nocturnas.',
    'Lalo Gix creó esta página web con la esperanza de que otros artistas independientes pudieran encontrarla útil como plantilla. El repositorio es código abierto en su GitHub, porque compartir es vivir, especialmente cuando no se tienen contratos discográficos exclusivos que lo impidan.',
    'A pesar de su falta de fama internacional o incluso reconocimiento en su vecindario, Lalo sigue dedicado a su arte, feliz de compartir su música con las personas que conoce y le importan. Porque al final del día, ¿no es eso lo que realmente importa? (Eso, y que los perros no ladren durante la grabación).'
  ]
};

// Tour/Events information
export const TOUR_NAME = 'MI CASA ES TU CASA TOUR 2025';

// Calculate upcoming dates starting from today, spaced every 2-3 weeks
const generateFutureDates = () => {
  const currentDate = new Date();
  const dates = [];
  
  // First event is today
  const firstDate = new Date(currentDate);
  dates.push(firstDate);
  
  // Second event is in 2 weeks
  const secondDate = new Date(currentDate);
  secondDate.setDate(currentDate.getDate() + 14);
  dates.push(secondDate);
  
  // Third event is in 5 weeks (3 weeks after the second)
  const thirdDate = new Date(currentDate);
  thirdDate.setDate(currentDate.getDate() + 35);
  dates.push(thirdDate);
  
  // Fourth event is in 8 weeks (3 weeks after the third)
  const fourthDate = new Date(currentDate);
  fourthDate.setDate(currentDate.getDate() + 56);
  dates.push(fourthDate);
  
  return dates;
};

// Format date as "MMM DD" (e.g., "MAR 25")
const formatDateForDisplay = (date) => {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

// Generate event dates
const eventDates = generateFutureDates();

// Tour events
export const EVENTS = [
  {
    id: 1,
    date: formatDateForDisplay(eventDates[0]),
    title: 'LIVING ROOM SESSIONS',
    location: 'SALA DE ESTAR, ENTRE EL SOFÁ Y LA TV',
    ticketLink: 'https://example.com/tickets',
    note: 'Traer botana. Silencio durante las melodías contemplativas.'
  },
  {
    id: 2,
    date: formatDateForDisplay(eventDates[1]),
    title: 'BATHROOM ACOUSTICS',
    location: 'REGADERA PRINCIPAL, CON ECO NATURAL',
    ticketLink: 'https://example.com/tickets',
    note: 'Concierto especial con reverberación natural. Toallas incluidas.'
  },
  {
    id: 3,
    date: formatDateForDisplay(eventDates[2]),
    title: 'KITCHEN BEATS & EATS',
    location: 'COCINA, JUNTO AL REFRIGERADOR',
    ticketLink: 'https://example.com/tickets',
    note: 'Sesión acústica con aperitivos. No tocar la comida del artista.'
  },
  {
    id: 4,
    date: formatDateForDisplay(eventDates[3]),
    title: 'BACKYARD FESTIVAL',
    location: 'PATIO TRASERO, CLIMA PERMITIENDO',
    ticketLink: 'https://example.com/tickets',
    note: 'Se suspende en caso de lluvia o si los perros necesitan pasear.'
  }
];

// Website navigation links
export const NAVIGATION_LINKS = [
  { id: 'music', label: 'MÚSICA' },
  { id: 'bio', label: 'BIOGRAFÍA' },
  { id: 'events', label: 'EVENTOS' },
  { id: 'newsletter', label: 'CONTACTO' }
];

// Website theme/branding
export const THEME = {
  primaryColor: '#FF5722', // Accent orange
  darkBackground: '#0F0F0F',
  darkerBackground: '#0A0A0A',
  lightBackground: '#1A1A1A',
  primaryFont: 'Montserrat, sans-serif',
  secondaryFont: 'Inter, sans-serif'
};

export default {
  ARTIST_INFO,
  SOCIAL_MEDIA,
  STREAMING_PLATFORMS,
  HERO_SECTION,
  LATEST_RELEASE,
  ALBUMS,
  BIO,
  TOUR_NAME,
  EVENTS,
  NAVIGATION_LINKS,
  THEME
};
