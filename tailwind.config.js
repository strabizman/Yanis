/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss,cjs,mjs,jsx,tsx}', // Assurez-vous que les fichiers Angular sont bien inclus
  ],
  theme: {
    extend: {
      navbar: {
        DEFAULT: '#FF8C00', // Couleur par défaut
        hover: '#FFA500',   // Couleur au survol
      },
    },
  },
  plugins: [],
}

