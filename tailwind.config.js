module.exports = {
  purge: [
    './app/components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'Noto Sans',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      colors: {
        primary: '#EF2A82',
        secondary: '#0088F0',
        base: '#172755',
        chart: '#EEEEF6',
        'primary-text': '#172755',
        'secondary-text': '#8794BA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
