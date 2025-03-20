# Lalo Gix Artist Website

A modern, interactive website for electronic music artist Lalo Gix, featuring a responsive design with glass morphism effects, audio player integration, and animations.

## Features

- Responsive design with mobile-first approach
- Interactive audio player with waveform visualization
- Glass morphism UI components
- Smooth animations and transitions using GSAP
- SoundCloud integration
- Newsletter signup form
- Tour/event listing
- Music discography display

## Tech Stack

- React.js
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- Howler.js for audio handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lalo-gix-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Project Structure

```
lalo-gix-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── LatestRelease.js
│   │   ├── MusicSection.js
│   │   ├── BioSection.js
│   │   ├── EventsSection.js
│   │   ├── Newsletter.js
│   │   ├── Footer.js
│   │   ├── MiniPlayer.js
│   │   └── SoundCloudPlayer.js
│   ├── utils/
│   │   ├── audioPlayer.js
│   │   ├── AudioContext.js
│   │   └── soundcloudIntegration.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

## Development

### Phase 1: Setup & Core Structure (Completed)
- Project setup and environment configuration
- Basic HTML structure and responsive framework
- Navigation implementation
- Header and footer development

### Phase 2: Main Content Sections (Completed)
- Hero section with parallax effect
- Latest release section
- Music section with carousel
- Bio section

### Phase 3: Interactive Elements (In Progress)
- Audio player integration
- Animation and micro-interaction implementation
- Form validation
- Community/Gallery section

### Phase 4: Refinement & Testing (Pending)
- Cross-browser testing
- Performance optimization
- Accessibility verification
- Content revision and finalization

## Adding Real Content

To replace placeholder content with real data:

1. Update the album data in `MusicSection.js` with actual releases
2. Replace image URLs with actual album artwork
3. Update SoundCloud track links in `soundcloudIntegration.js`
4. Update event data in `EventsSection.js` with actual tour dates
5. Replace placeholder artist bio in `BioSection.js`

## Customization

### Colors
Edit the `tailwind.config.js` file to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      'dark-bg': '#0F0F0F',
      'darker-bg': '#0A0A0A',
      'light-bg': '#1A1A1A',
      'accent': '#FF5722',
    },
  },
},
```

### Fonts
The website uses Montserrat for headings and Inter for body text. To change fonts, update the Google Fonts import in `public/index.html` and the font family settings in `tailwind.config.js`.

## Deployment

To build the website for production:

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` folder that can be deployed to any static hosting service.

## License

[MIT License](LICENSE)
