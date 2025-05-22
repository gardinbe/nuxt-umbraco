/**
 * Map of all page components.
 *
 * Keys are the content type aliases, and values are the associated components.
 */
export default {
	standardPage: defineAsyncComponent(
		() => import('~/components/umbraco/document-types/pages/standard-page.vue')
	)
} satisfies ComponentMap;
