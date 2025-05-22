import { join } from 'node:path';
import type { NuxtConfig } from 'nuxt/config';

export default {
	modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
	devtools: {
		enabled: false
	},
	alias: {
		'~pages': join(import.meta.dirname, 'components/umbraco/document-types/pages'),
		'~blocks': join(import.meta.dirname, 'components/umbraco/document-types/blocks')
	},
	imports: {
		scan: true,
		dirs: ['lib/**', 'composables/**']
	},
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4
	}
} satisfies NuxtConfig;
