/**
 * Composable to create a `useHead` result object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` result object.
 * @see https://nuxt.com/docs/api/composables/use-head
 */
export const useUmbracoMeta = (data: MaybeUPageMetaComposition) =>
	useHead(createHead(data));
