/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#ff5400',  // Flame Orange
        secondary: '#6f3ff5',  // Vivid Violet
        tertiary:  '#0031db',  // Deep Blue
        cyan:      '#00b4ff',  // Electric Cyan
        mint:      '#19ffbd',  // Neon Mint
        surface:   '#0a0a0a',  // Neutral Background
        onSurface: '#ededed',  // Light Text/Surface
      },
      keyframes: {
        slowGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        slowGradient: 'slowGradient 15s ease infinite',
      },
    },
  },
  plugins: [],
};
