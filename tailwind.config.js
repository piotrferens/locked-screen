/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0.375rem',
        input: '0.5rem',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        button: {
          pin: {
            DEFAULT: '#FFFFFF',
            hover: '#DEEEF2',
            ring: '#191919',
            border: '#191919',
          },
        },
        input: {
          DEFAULT: '#FFFFFF',
          border: '#C3DEE7',
          hover: '#9BC3D3',
          ring: '#FFCC33',
        },
        red: {
          DEFAULT: '#EB0000',
          dark: '#CC0000',
          light: '#EB00005C',
        },
        gray: {
          light: '#E5E5E5',
        },
      },
      padding: {
        0.2: '0.2rem',
        0.4: '0.4rem',
      },
    },
  },
  plugins: [],
};
