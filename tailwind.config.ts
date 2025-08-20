import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			foundation: '#282828',
			primary: '#282828',
			secondary: '#000000',
			accent: '#ff0000',

			neutral: '#000000',

			primary_text: '#fbf1c7',
			muted_text: '#a89984',
			accent_text: '#fb4934',

			red: '#000000',
			green: '#000000',
			blue: '#83a598',
			yellow: '#000000'
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
