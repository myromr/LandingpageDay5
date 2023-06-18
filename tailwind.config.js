/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    //break points
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        'river': {
          '50': '#eefdfd',
          '100': '#d5f7f8',
          '200': '#b0eef1',
          '300': '#79e2e7',
          '400': '#3ccad4',
          '500': '#20afba',
          '600': '#1d8d9d',
          '700': '#1e7280',
          '800': '#215d69',
          '900': '#1b424c',
          '950': '#10333c',
      },      
      }
    },
  },
  plugins: [],
}

