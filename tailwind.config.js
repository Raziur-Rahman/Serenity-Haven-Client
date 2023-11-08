/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('https://i.ibb.co/YDh38RQ/bgImg.jpg')",
        'bgImg_2': "url('https://i.ibb.co/Xb9kLJR/image1.jpg')",
        'bgImg_3': "url('https://i.ibb.co/F8qmSyS/featured-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

