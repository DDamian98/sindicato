/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#c21717',
        secundary: '#0a0a0a',
        white: '#ffffff',
        bgprimary: '#174c9c',
        border: '#ee9e21',
        cupon: '#f29120',
        bgadmin: '#202e55',
        tarjeta: '#f29021',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
