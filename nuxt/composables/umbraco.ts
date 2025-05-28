import type { UseHeadInput } from '@unhead/vue';

type MaybeMetaUComposition =
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
const createHead = (data: MaybeMetaUComposition): UseHeadInput => {
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

export const umbraco = {
	/**
	 * Composable to fetch the Umbraco content item for a given path from the Umbraco Content Delivery
	 * API.
	 * @param path - Path of the Umbraco content item.
	 * @returns Umbraco content item.
	 */
	use: async <P extends POJO = POJO>(path: string): Promise<UContent<P>> => {
		const { data, error } = await useAsyncData(
			path,
			async () => {
				const [data, error] = await content.get<UContent<P>>(path);

				if (error) {
					throw error;
				}

				return data;
			},
			{
				deep: false,
				lazy: true
			}
		);

		if (error.value) {
			throw error.value;
		}

		if (import.meta.dev && import.meta.client) {
			console.log(path, JSON.parse(JSON.stringify(data.value)));
		}

		return data.value as UContent<P>;
	},

	/**
	 * Composable to create a `useHead` result object using the Umbraco meta composition for a page.
	 * @param data - Umbraco Meta composition.
	 * @returns `useHead` result object.
	 * @see https://nuxt.com/docs/api/composables/use-head
	 */
	useMeta: (data: MaybeMetaUComposition) => useHead(createHead(data))
} as const;
