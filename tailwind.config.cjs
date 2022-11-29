/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/assets/*.svg', './src/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			primary: ['Inter', 'Arial', 'sans-serif'],
		},
		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px',
			},
		},

		extend: {
			colors: {
				primary: {
					100: '#f1f7fd',
					300: '#DCE9F4',
					400: '#2864FF',
					700: '#243158',
				},
				bodyText: '#333339',
				gray: '#BDBDBD',
			},
			maxWidth: {
				'2x96': '800px',
				image: '1003px',
			},
			height: {
				image: '800px',
			},
			borderRadius: {
				'5xl': '32px',
			},
		},
	},
	plugins: [],
};
