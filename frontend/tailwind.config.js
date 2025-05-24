/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Rutas correctas SIN el prefijo "src/"
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Si tienes una carpeta 'pages' fuera de 'app' (para API routes o páginas antiguas, aunque con App Router es menos común para UI):
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // Si tienes otros directorios con clases de Tailwind, añádelos también:
    // './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}