/**
 * Requests and returns the Umbraco content item for a given path from the Umbraco Content Delivery
 * API.
 * @param path - Path of the Umbraco content item.
 * @returns Umbraco content item.
 */
export const useUmbraco = async <P extends Pojo = Pojo>(
	path: string
): Promise<Ref<IUmbracoContent<P>>> => {
	const { data, error } = await useAsyncData(path, () => getUmbracoContent(path)!);

	if (error.value) {
		throw error.value;
	}

	if (import.meta.dev && import.meta.client) {
		console.log(path, JSON.parse(JSON.stringify(data.value)));
	}

	return data as Ref<IUmbracoContent<P>>;
};

/**
 * Requests and returns the global Umbraco content items from the Umbraco Content Delivery API.
 * @returns Global Umbraco content items.
 */
export const useUmbracoGlobalContent = async (): Promise<Ref<IUmbracoGlobalContent>> => {
	const { data, error } = await useAsyncData(async () => {
		const [navigation, footer] = await Promise.all([
			getUmbracoContent<IUmbracoNavigation>('/navigation'),
			getUmbracoContent<IUmbracoFooter>('/footer')
		]);

		return { navigation, footer };
	});

	if (error.value) {
		throw error.value;
	}

	if (import.meta.dev && import.meta.client) {
		console.log('global', JSON.parse(JSON.stringify(data.value)));
	}

	return data as Ref<IUmbracoGlobalContent>;
};
