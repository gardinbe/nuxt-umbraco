import type { UserConfig } from '@hey-api/openapi-ts';

export default {
	input: 'http://localhost:55235/umbraco/swagger/delivery/swagger.json',
	output: {
		lint: 'eslint',
		format: 'prettier',
		path: '.umbraco'
	},
	plugins: ['@hey-api/client-fetch']
} satisfies UserConfig;
