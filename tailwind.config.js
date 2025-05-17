// /** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'], // Enable dark mode based on class or data attribute
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{md,mdx}',
    './docusaurus.config.js',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  