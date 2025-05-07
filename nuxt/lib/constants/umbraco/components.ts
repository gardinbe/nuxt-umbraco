import { defineAsyncComponent as def } from '#imports';

export const UmbracoComponents = {
	/**
	 * Map of Umbraco content type aliases to layout keys.
	 */
	Layouts: {
		defaultPage: 'umbraco-default'
	} as const satisfies LayoutKeyMap,

	/**
	 * Map of Umbraco content type aliases to page components.
	 */
	Pages: {
		defaultPage: def(() => import('~/components/umbraco/pages/default.vue'))
	} as const satisfies ComponentMap,

	/**
	 * Map of Umbraco content type aliases to block components.
	 */
	Blocks: {
		contentBlock: def(() => import('~/components/umbraco/blocks/content.vue'))
	} as const satisfies ComponentMap
} as const;
