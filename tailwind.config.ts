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
			},
			animation: {
				"bounce-short": "bounceShort 0.3s 1"
			},
			keyframes: {
				bounceShort: {
					"0%, 100%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
					},
					"50%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
					}
				}
			}
		}
	},
	plugins: []
} satisfies Config
