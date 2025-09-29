// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite/**/*.js"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fff5f0",
          100: "#ffe0d1",
          200: "#ffc2a3",
          300: "#ffa375",
          400: "#ff8547",
          500: "#ff6633",
          600: "#e65528",
          700: "#cc4422",
          800: "#b3331b",
          900: "#992214",
        },
      },
      fontFamily: {
        body: ['"Playfair Display"', 'serif'],
        heading: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
