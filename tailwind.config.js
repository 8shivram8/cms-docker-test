/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#050337',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#050337","400":"#60a5fa","500":"#050337","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#050337","950":"#172554"}
      }
    },
  },
  plugins: [],
}

