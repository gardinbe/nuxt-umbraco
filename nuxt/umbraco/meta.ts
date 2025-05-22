import type { UseHeadInput } from '@unhead/vue';

type MetaCompositionWithUndefined =
	| {
			[K in keyof IUmbracoPageMetaComposition]: IUmbracoPageMetaComposition[K] | undefined;
	  }
	| null
	| undefined;

/**
 * Returns a `useHead` object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` object.
 */
export const createUmbracoHead = (data: MetaCompositionWithUndefined): UseHeadInput => {
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
