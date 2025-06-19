import { defineAsyncComponent as def } from '#imports';

export const umbracoComponents = {
	/**
	 * Map of Umbraco content type aliases to layout keys.
	 */
	layouts: {
		defaultPage: 'umbraco-default'
	} as const satisfies LayoutMap,

	/**
	 * Map of Umbraco content type aliases to page components.
	 */
	pages: {
		defaultPage: def(() => import('~/components/umbraco/pages/default.vue'))
	} as const satisfies ComponentMap,

	/**
	 * Map of Umbraco content type aliases to block components.
	 */
	blocks: {
		contentBlock: def(() => import('~/components/umbraco/blocks/content.vue'))
	} as const satisfies ComponentMap
} as const;
