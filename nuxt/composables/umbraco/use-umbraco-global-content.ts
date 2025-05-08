/**
 * Returns the Umbraco global content items.
 * @returns The global content items.
 */
export const useUmbracoGlobalContent = async (): Promise<
	Ref<IUmbracoGlobalContent>
> => {
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
