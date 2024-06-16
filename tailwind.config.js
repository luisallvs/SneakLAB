// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				body: ['Inter', 'sans-serif'],
				logo: ['Chakra Petch', 'sans-serif'],
				title: ['GT', 'sans-serif'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			addCommonColors: true,
			customProperties: true,
			themes: {
				light: {
					colors: {
						primary: '#3a5a40',
						secondary: '#ccc5b9',
						white: '#fffcf2',
						bone: '#ccc5b9',
						black: '#252422',
						dark: '#0d0d0d',
					},
				},
			},
		}),
	],
};
