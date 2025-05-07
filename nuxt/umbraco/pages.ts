import type { ComponentMap } from '~/umbraco/utils/get-component';
import { defineAsyncComponent as def } from 'vue';

/**
 * Map of all page components.
 *
 * Keys are the content type aliases, and values are the associated components.
 */
export default {
	standardPage: def(
		() => import('~/components/umbraco/document-types/pages/standard-page.vue')
	)
} satisfies ComponentMap;
