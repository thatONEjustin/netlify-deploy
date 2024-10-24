/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'nf-symbols': ['Symbols Nerd Font'],
      'belanosima': ['belanosima', 'serif']
    },
    colors: {
      transparent: 'transparent',
      black: '#0e0d11'
    },
    extend: {
      spacing: {
        "unset": "unset",
      },
      maxWidth: {
        "unset": "unset",
      },
      width: {
        "unset": "unset",
      },
    }
  },
  plugins: [
    require('tailwind-dracula')()
  ],
}
