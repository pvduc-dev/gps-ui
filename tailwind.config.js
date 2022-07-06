module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#333',
        white: '#fff',
        primary: '#1D5EFF',
        info: '#11cdef',
        success: '#2dce89',
        danger: '#FF5252',
        warning: '#FFAD43',
        secondary: '#f4f5f7',
      },
    },
    fontFamily: {
      'sans': ['Helvetica Neue']
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
