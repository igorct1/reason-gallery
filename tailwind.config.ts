import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-hero.jpg')",
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          from: {
            transform: 'translateX(300px)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
