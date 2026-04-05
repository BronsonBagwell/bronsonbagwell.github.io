import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#f4f4f5',
        muted: '#a1a1aa',
        border: 'rgba(255,255,255,0.1)',
        card: 'rgba(255,255,255,0.04)',
        accent: '#e4e4e7',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 38%)',
      },
    },
  },
  plugins: [],
}

export default config
