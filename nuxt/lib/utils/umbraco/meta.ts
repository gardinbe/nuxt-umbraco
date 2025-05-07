import type { UseHeadInput } from '@unhead/vue';

export type MaybeUPageMetaComposition =
	| {
			[K in keyof UPageMetaComposition]: UPageMetaComposition[K] | undefined;
	  }
	| null
	| undefined;

/**
 * Returns a `useHead` input object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` input object.
 * @see https://nuxt.com/docs/api/composables/use-head
 */
export const createHead = (data: MaybeUPageMetaComposition): UseHeadInput => {
	return {
		title: createMetaTitle(data?.pageMetaTitle),
		meta: [
			{
				name: 'description',
				content: data?.pageMetaDescription
			}
		]
	};
};
