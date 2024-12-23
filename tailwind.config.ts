import type { Config } from "tailwindcss"

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				"mint-bricks-main": "#b6e2e1",
				"mint-bricks-alt": "#095647"
			}
		}
	},
	plugins: []
} satisfies Config
