import { defineAsyncComponent as dac } from 'vue';

/**
 * Map of Umbraco content type aliases to page components.
 */
export default {
	standardPage: dac(() => import('~pages/standard-page.vue'))
} as const satisfies ComponentMap;
