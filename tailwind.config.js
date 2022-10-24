/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {

    fontFamily: {
      heading_cta_header_navbar: '"Raleway", "sans-serif"',
      body: '"Open Sans", "sans-serif"'
    },

    extend: {
      colors: {
        primary: {
          dark_blue_Intro_Email: "hsl(217, 28%, 15%)",
          dark_blue_MainBG: "hsl(218, 28%, 13%)",
          dark_blue_Footer: "hsl(216, 53%, 9%)",
          dark_blue_Testimonials: "hsl(219, 30%, 18%)",
        },
        accent: {
          cyan_cta_Gradient: "hsl(176, 68%, 64%)",
          blue_cta_Gradient: "hsl(198, 60%, 50%)",
          light_red_ERROR: "hsl(0, 100%, 63%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
        }
      }
    },
  },
  plugins: [],
}
