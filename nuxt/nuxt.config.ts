import { join } from 'node:path';
import type { NuxtConfig } from 'nuxt/config';

export default {
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
	devtools: {
		enabled: false
	},
	alias: {
		'~pages': join(import.meta.dirname, 'components/umbraco/pages'),
		'~blocks': join(import.meta.dirname, 'components/umbraco/blocks')
	},
	imports: {
		dirs: ['lib/**', 'composables/**']
	},
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4
	},
	experimental: {
		asyncContext: true
	},
	runtimeConfig: {
		public: {
			siteName: 'Appius',
			umbracoUrl: process.env.UMBRACO_URL || 'http://localhost:55235'
		}
	}
} satisfies NuxtConfig;
