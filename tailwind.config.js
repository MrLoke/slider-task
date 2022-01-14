module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      primaryWhite: '#ECECEC',
      secondaryWhite: '#DADADA',
      yellow: '#F1C40F',
      green: '#2ECC71',
      black: '#000000',
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '16px',
      sm: '18px',
      lg: '27px',
      xl: '44px',
      '2xl': '60px',
    },
    letterSpacing: {
      primary: '1.19px',
    },
    extend: {
      height: {
        '100v': '100vh',
        mobileMenuH: '63px',
        menuH: '105px',
      },
    },
  },
  plugins: [],
}
