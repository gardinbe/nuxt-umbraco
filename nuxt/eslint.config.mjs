// @ts-check
import { withNuxt } from './.nuxt/eslint.config.mjs';

export default withNuxt({
	ignores: ['**/.data,.nuxt,.output/**'],
	rules: {
		'vue/html-self-closing': ['error', { html: { void: 'always' } }],
		'vue/multi-word-component-names': 'off',
		'vue/no-v-html': 'off',
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/no-multiple-template-root': 'off'
	}
});
