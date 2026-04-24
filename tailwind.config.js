// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'espresso': '#2D1E22',
        'fox-orange': '#D98A2E',
        'light-gold': '#F2C063',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tight-logo': '-0.02em',
        'wide-logo': '0.15em',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.espresso'),
            maxWidth: '75ch',
            fontSize: '1.05rem',
            lineHeight: '1.75',
            a: {
              color: theme('colors.fox-orange'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.espresso'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.montserrat').join(', '),
              fontWeight: '800',
              fontSize: '2.5rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              lineHeight: '1.2',
            },
            h2: {
              fontFamily: theme('fontFamily.montserrat').join(', '),
              fontWeight: '700',
              fontSize: '1.75rem',
              marginTop: '1.8rem',
              marginBottom: '0.8rem',
              lineHeight: '1.3',
            },
            h3: {
              fontFamily: theme('fontFamily.montserrat').join(', '),
              fontWeight: '700',
              fontSize: '1.35rem',
              marginTop: '1.5rem',
              marginBottom: '0.6rem',
              lineHeight: '1.4',
            },
            h4: {
              fontFamily: theme('fontFamily.montserrat').join(', '),
              fontWeight: '700',
              fontSize: '1.15rem',
              marginTop: '1.2rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginBottom: '1.25rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginBottom: '1.25rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginBottom: '1.25rem',
            },
            li: {
              marginBottom: '0.5rem',
            },
            strong: {
              color: theme('colors.espresso'),
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: theme('colors.fox-orange'),
              borderLeftWidth: '4px',
              fontStyle: 'italic',
              paddingLeft: '1rem',
              color: theme('colors.espresso') + 'cc',
              margin: '1.5rem 0',
            },
            code: {
              backgroundColor: '#F5F5F5',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              fontSize: '0.9em',
              color: theme('colors.espresso'),
            },
            pre: {
              backgroundColor: '#2D1E22',
              color: '#F9F9F9',
              borderRadius: '8px',
              padding: '1.25rem',
              overflowX: 'auto',
              margin: '1.5rem 0',
            },
            img: {
              borderRadius: '8px',
              margin: '1.5rem auto',
            },
            hr: {
              borderColor: '#E0E0E0',
              margin: '2rem 0',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};