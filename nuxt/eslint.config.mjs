// @ts-check
import { withNuxt } from './.nuxt/eslint.config.mjs';

export default withNuxt({
	ignores: ['**/.data,.nuxt,.output/**'],
	rules: {
		'@typescript-eslint/no-namespace': 'off',
		'vue/html-self-closing': ['error', { html: { void: 'always' } }],
		'vue/multi-word-component-names': 'off',
		'vue/no-v-html': 'off',
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/no-multiple-template-root': 'off',
		'import/order': 'error',
		'import/first': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/newline-after-import': [
			'error',
			{
				count: 1,
				exactCount: true,
				considerComments: true
			}
		],
		'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
		'import/no-duplicates': ['error', { 'prefer-inline': false }],
		'import/no-unresolved': 'off'
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json'
			},
			node: {
				extensions: ['.js', '.ts', '.vue']
			}
		}
	}
});
