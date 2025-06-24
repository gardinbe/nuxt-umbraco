export type MaybeUPageMetaComposition =
	| {
			[K in keyof UPageMetaComposition]:
				| UPageMetaComposition[K]
				| null
				| undefined;
	  }
	| null
	| undefined;

/**
 * Composable to create a `useHead` entry using an Umbraco meta composition.
 * @param data - Umbraco Meta composition.
 * @returns `useHead` entry.
 * @see https://nuxt.com/docs/api/composables/use-head
 */
export const useUmbracoHead = (data: MaybeUPageMetaComposition) =>
	useHead({
		title: useTitle(data?.pageMetaTitle),
		meta: [
			{
				name: 'description',
				content: data?.pageMetaDescription
			}
		]
	});
