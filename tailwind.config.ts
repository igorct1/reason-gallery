import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-hero.jpg')",
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
      animation: {
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
