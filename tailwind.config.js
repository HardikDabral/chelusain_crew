/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#1F3A2E', // deep forest
          hover: '#162A21',
        },
        luxury: {
          bg: '#F5F3EE',
          bgSoft: '#ECE7DF',
          primary: '#1F3A2E',
          primaryHover: '#162A21',
          text: '#1A1A1A',
          textSoft: '#6E6E6E',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 12vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.05em', fontWeight: '800' }],
        'hero-title': ['clamp(1.875rem, 10vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'hero-subtitle': ['clamp(0.9375rem, 2vw, 1.125rem)', { lineHeight: '1.6', fontWeight: 400 }],
        'section-title': ['clamp(1.25rem, 6vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'card-title': ['clamp(1rem, 3vw, 1.25rem)', { lineHeight: '1.4', fontWeight: '700' }],
        'body-text': ['clamp(0.8125rem, 2vw, 1rem)', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },


      spacing: {
        'section': 'clamp(4rem, 10vw, 7.5rem)',
      },

      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'subtle': '500ms',
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blink': 'blink 2s infinite',
        'branding-up': 'brandingSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-zoom': 'slowZoom 20s infinite alternate ease-in-out',
      },
      borderRadius: {
        'luxury': '12px',
        'full': '9999px',
      },
      boxShadow: {
        'luxury-soft': '0 10px 30px rgba(0,0,0,0.05)',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        brandingSlideUp: {
          'from': { transform: 'translateY(40%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '0.95' },
        }
      }
    },
  },
  plugins: [],
}
