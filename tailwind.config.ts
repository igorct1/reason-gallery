import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
