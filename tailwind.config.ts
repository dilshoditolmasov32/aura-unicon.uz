import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],

  theme: {
    extend: {
      screens: {
        xs: '393px',
        tablet: '768px',
        desktop: '1280px',
      },
    },
  },

  plugins: [],
} satisfies Config  