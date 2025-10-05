/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Brand & Text Colors
        brand: {
          coral: '#FA7275',
          'coral-dark': '#EA6365',
          white: '#FFFFFF',
          'dark-blue': '#131524',
          black: '#04050C',
          charcoal: '#333F4E',
          'light-gray': '#A3B2C7',
          'off-white': '#F2F5F9',
          'off-white-alt': '#F2F4F8',
        },
        // Accent Colors
        accent: {
          coral: '#FF7474',
          teal: '#3DD9B3',
          orange: '#F9AB72',
          purple: '#EEA8FD',
          blue: '#56B8FF',
        },
        // Error Colors
        error: {
          DEFAULT: '#B80000',
        },
        // Keep existing primary colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

