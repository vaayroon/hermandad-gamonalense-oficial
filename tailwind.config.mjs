import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#26dce4',
				'secondary': '#ddd',
				'tertiary': '#000',
				'primary-50': '#edfefd',
				'primary-100': '#d1fcfc',
				'primary-200': '#a9f7f8',
				'primary-300': '#6eeff2',
				'primary-400': '#26dce4',
				'primary-500': '#0fc0cb',
				'primary-600': '#109aaa',
				'primary-700': '#147c8a',
				'primary-800': '#196471',
				'primary-900': '#1a525f',
				'primary-950': '#0b3741',
				'twitch': "var(--color-twitch)",
			},
		},
	},
	plugins: [
		animations,
		function ({
			addVariant
		}) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}
