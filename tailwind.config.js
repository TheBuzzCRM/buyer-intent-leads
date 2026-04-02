/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F4EF',
        'section-alt': '#EFECE6',
        surface: '#FFFFFF',
        'primary-text': '#1A1A1A',
        'secondary-text': '#5C5A57',
        accent: '#C2A06F',
        border: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.03)',
        'hover': '0 8px 30px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}