/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		colors: {
			cream: "#f3f0e6",
			"light-blue": "#bedbdf",
			blue: "#6da9b2",
			"light-green": "#22664d",
			green: "#013a37",
		},
		fontFamily: {
			sans: ["Josefin Sans", "sans-serif"],
			serif: ["Playfair Display", "serif"],
		},
		extend: {},
	},
	plugins: [],
};
