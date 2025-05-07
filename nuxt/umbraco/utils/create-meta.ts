import type { UseHeadInput } from '@unhead/vue';
import { createTitle } from '~/shared/utils/create-title';
import type { PageMetaComposition } from '~/umbraco/types/document-types/pages/compositions/page-meta';

type MetaCompositionWithUndefined = {
	[K in keyof PageMetaComposition]: PageMetaComposition[K] | undefined;
};

/**
 * Returns a `useHead` object using the Umbraco meta composition for a page.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` object.
 */
export const createUmbracoHead = (
	data: MetaCompositionWithUndefined
): UseHeadInput => {
	return {
		title: createTitle(data.metaTitle),
		meta: [
			{
				name: 'description',
				content: data.metaDescription
			}
		]
	};
};
