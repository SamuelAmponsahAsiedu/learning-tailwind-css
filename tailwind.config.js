/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark',
  content: ["./dist/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      margin: {
        1: '14px',
        2: '16px',
        3: '18px',
        4: '20px',
      },
      fontSize: {
      xs:'12px',
      sm: '15px',
      base: '18px',
    },
      colors: {
        cusCol: {
          100: "#49e659",
        }
      },
    },
  },
  // theme: {
  //   colors: {
  //     html: {
  //       100: "#49e659",
  //     }
  //   },
  // },
  plugins: [],
}

