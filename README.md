# Your Wedding Story 💕

A beautiful, animated digital wedding invitation website for Shivam & Avantika's wedding celebration on **February 21, 2026**.

## 🎨 Features

- **Opening Animation**: Elegant curtain reveal animation with heart icon
- **Couple Section**: Stunning animated display of the bride and groom with Hindi text (शुभ विवाह - Shubh Vivah)
- **Countdown Timer**: Live countdown to the wedding day with animated number changes
- **Wedding Details**: Multi-event timeline including:
  - Mehndi & Sangeet (Feb 20)
  - Wedding Ceremony (Feb 21)
  - Reception (Feb 21)
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **Venue Map**: Location details and nearby accommodations information
- **Floating Petals**: Animated marigold petals falling across the screen
- **Responsive Design**: Fully responsive across all devices
- **Indian Wedding Theme**: Marigold and gold color scheme with Hindi cultural elements

## 🛠️ Technologies

This project is built with modern web technologies:

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Vitest** - Unit testing

## 🚀 Getting Started

### Prerequisites

- Node.js & npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Installation

```sh
# Clone the repository
git clone https://github.com/Am10aN16/wedding-invite


# Install dependencies
npm i
```

### Development

```sh
# Start the development server with hot reload
npm run dev
```

The application will be available at `http://localhost:8080` with automatic reload on file changes.

### Building

```sh
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CountdownTimer.tsx       # Live countdown animation
│   ├── CoupleSection.tsx         # Couple introduction with images
│   ├── FloatingPetals.tsx        # Animated falling petals
│   ├── Footer.tsx               # Footer with couple initials
│   ├── OpeningAnimation.tsx      # Curtain reveal animation
│   ├── PhotoGallery.tsx         # Interactive photo gallery
│   ├── RSVPSection.tsx          # RSVP form (optional)
│   ├── VenueMap.tsx             # Venue details and map
│   ├── WeddingDetails.tsx       # Event timeline
│   └── ui/                      # shadcn/ui components
├── pages/
│   ├── Index.tsx                # Main wedding page
│   └── NotFound.tsx             # 404 page
├── assets/                      # Images and media
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── App.tsx                      # App router setup
└── main.tsx                     # Entry point
```

## 🎯 Key Components

### Floating Petals
Animated marigold petals that float down the screen with rotation and horizontal movement. Positioned globally to overlay all content.

### Countdown Timer
Real-time countdown displaying days, hours, minutes, and seconds until the wedding. Features animated number transitions and flipping animations.

### Photo Gallery
Interactive image gallery with lightbox functionality. Click images to view in full screen with smooth animations.

### Opening Animation
Welcome sequence with heart icon animation and curtain reveal effect before showing main content.

## 🎨 Customization

### Colors
Edit the Tailwind color theme in `tailwind.config.ts`:
- Marigold: Primary color (#FFA500)
- Gold: Accent color
- Royal Red: Highlight color
- Cream: Background color

### Fonts
Custom fonts are configured in `tailwind.config.ts`:
- `script` - Great Vibes (for couple names)
- `display` - Cormorant Garamond (for headings)
- `body` - Montserrat (for body text)

### Wedding Details
Update event details in `src/components/WeddingDetails.tsx`:
```tsx
const events = [
  {
    title: "Event Name",
    date: "Date",
    time: "Time",
    venue: "Venue",
  },
  // ...
];
```

### Couple Information
Modify couple details in:
- `src/components/CoupleSection.tsx` - Names and images
- `src/pages/Index.tsx` - Wedding date

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)

## 🧪 Testing

```sh
# Run tests once
npm test

# Run tests in watch mode
npm test:watch
```

## ✅ Code Quality

```sh
# Run ESLint
npm run lint
```

## 🌐 Deployment

### Build & Preview
```sh
npm run build
npm run preview
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify
1. Push to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Custom Domain
After deployment, connect your custom domain in your hosting provider's settings.

## 📝 Notes

- The wedding date is set to **February 21, 2026** in `src/pages/Index.tsx`
- Venue location: **The Royal Palace Gardens, Jaipur, Rajasthan**
- Theme colors are based on traditional Indian wedding aesthetics
- Hindi text is included for cultural authenticity

## 🎊 Special Features

- **Opening Animation**: Creates an engaging first impression
- **Smooth Transitions**: Framer Motion ensures buttery smooth animations
- **Accessible Design**: WCAG compliant components from shadcn/ui
- **Performance Optimized**: Fast load times with Vite
- **SEO Friendly**: Meta tags for social sharing

## 📄 License

This project is created as a wedding invitation website for personal use.

## 💌 Contact & Support

For customizations or issues, please reach out to the development team.

---

**Made with ❤️ for Shivam & Avantika**
# YasminWedsAhmed
