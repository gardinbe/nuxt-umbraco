import { defineAsyncComponent as dac } from 'vue';

/**
 * Map of Umbraco content type aliases to block components.
 */
export default {
	contentBlock: dac(() => import('~blocks/content-block.vue'))
} as const satisfies ComponentMap;
