import type { NuxtConfig } from 'nuxt/config';

export default {
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
	devtools: {
		enabled: false
	},
	imports: {
		scan: true,
		dirs: ['shared/**', 'composables/**']
	},
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4
	}
} satisfies NuxtConfig;
