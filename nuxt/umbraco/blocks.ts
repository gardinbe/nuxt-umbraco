import type { ComponentMap } from '~/umbraco/utils/get-component';

/**
 * Map of all block components.
 *
 * Keys are the content type aliases, and values are the associated components.
 */
export default {
	contentBlock: () =>
		import('~/components/umbraco/document-types/blocks/content-block.vue')
} satisfies ComponentMap;
