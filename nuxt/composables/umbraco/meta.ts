import type { UseHeadInput } from '@unhead/vue';

type MaybeMetaComposition =
	| {
			[K in keyof IUmbracoPageMetaComposition]: IUmbracoPageMetaComposition[K] | undefined;
	  }
	| null
	| undefined;

/**
 * Returns a `useHead` result object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` result object.
 * @see https://nuxt.com/docs/api/composables/use-head
 */
export const useUmbracoHead = (data: MaybeMetaComposition) =>
	useHead(createUmbracoHead(data));

/**
 * Returns a `useHead` input object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` input object.
 * @see https://nuxt.com/docs/api/composables/use-head
 */
const createUmbracoHead = (data: MaybeMetaComposition): UseHeadInput => {
	return {
		title: createMetaTitle(data?.metaTitle),
		meta: [
			{
				name: 'description',
				content: data?.metaDescription
			}
		]
	};
};
