/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#17BBDE',
          50: '#B5F7F7',
          100: '#A3F3F5',
          200: '#7EEAF2',
          300: '#59DFEE',
          400: '#34D1EA',
          500: '#17BBDE',
          600: '#1396B9',
          700: '#0F7394',
          800: '#0C536F',
          900: '#08354A',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
