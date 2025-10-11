import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class', // important for theme switching
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// Gruvbox Light
				gruvboxLight: {
					bg: '#fbf1c7',
					fg: '#3c3836',
					primary: '#458588',
					secondary: '#b16286',
					accent: '#d79921',
					neutral: '#a89984',
					muted: '#7c6f64',
					red: '#cc241d',
					green: '#98971a',
					blue: '#458588',
					yellow: '#d79921',
					orange: '#d65d0e',
					purple: '#b16286',
					aqua: '#689d6a'
				},

				// Gruvbox Dark
				gruvboxDark: {
					bg: '#282828',
					fg: '#ebdbb2',
					primary: '#83a598',
					secondary: '#d3869b',
					accent: '#fabd2f',
					neutral: '#928374',
					muted: '#7c6f64',
					red: '#fb4934',
					green: '#b8bb26',
					blue: '#83a598',
					yellow: '#fabd2f',
					orange: '#fe8019',
					purple: '#d3869b',
					aqua: '#8ec07c'
				}
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;

