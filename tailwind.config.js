/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'sh-header': '0px 5px 30px 0px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'gr-homestart-bg':
          'linear-gradient(180deg, rgba(255,236,193,1) 0%, rgba(250,243,229,1) 3%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 36%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 100%)',
      },
      daisyui: {
        themes: ['light', 'dark', 'cupcake'],
      },
    },
  },
  plugins: [require('daisyui')],
};
