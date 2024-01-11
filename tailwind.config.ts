import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{ts,tsx,mdx}', './public/**/*.svg'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['var(--font-inter)'],
				'sans-display': ['var(--font-inter-display)']
			},
			keyframes: {
				'background-pulse': {
					from: { opacity: '0.75' },
					to: { opacity: '0.8' }
				},
				'background-spin': {
					to: { transform: 'rotate(360deg)' }
				},
				'ping': {
					'75%, 100%': {
						transform: 'scale(var(--ping-scale, 2))',
						opacity: '0'
					}
				},
				'slideUpAndFade': {
					from: { opacity: '0', transform: 'translateY(2px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				background:
					'background-pulse 6s ease-in-out infinite alternate, background-spin 120s linear infinite',
				ping: 'ping var(--ping-duration, 1s) cubic-bezier(0, 0, 0.2, 1) infinite',
				slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
export default config;
