/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070512',
        bg2: '#0B0718',
        card: '#110B24',
        cardAlt: '#17102D',
        border: '#38205B',
        borderHi: '#7041A8',
        violet: '#8B3FE8',
        violet2: '#B54DFF',
        magenta: '#E34DFA',
        lightPurple: '#DCA0FF',
        txtPrimary: '#F8F5FF',
        txtSecondary: '#B9ACD0',
        txtMuted: '#827394',
        success: '#3FE2A0',
        danger: '#FF477E',
        warning: '#FFB454',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(227,77,250,0.35)',
        glowSm: '0 0 12px rgba(227,77,250,0.25)',
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(90deg, #C93FF5 0%, #853BE8 100%)',
        'grad-violet': 'linear-gradient(90deg, #B54DFF 0%, #8B3FE8 100%)',
      },
    },
  },
  plugins: [],
};