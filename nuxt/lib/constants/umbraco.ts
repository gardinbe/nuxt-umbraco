export const components = {
	/**
	 * Map of Umbraco content type aliases to layout keys.
	 */
	layouts: {
		standardPage: 'umbraco-default'
	} as const satisfies LayoutMap,

	/**
	 * Map of Umbraco content type aliases to page components.
	 */
	pages: {
		standardPage: defineAsyncComponent(
			() => import('~/components/umbraco/pages/standard.vue')
		)
	} as const satisfies ComponentMap,

	/**
	 * Map of Umbraco content type aliases to block components.
	 */
	blocks: {
		contentBlock: defineAsyncComponent(
			() => import('~/components/umbraco/blocks/content.vue')
		)
	} as const satisfies ComponentMap
};
