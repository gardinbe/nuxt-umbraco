/**
 * Returns the Umbraco content item for the current URL.
 * @returns The content item.
 */
export const useUmbracoContent = async <P extends Pojo = Pojo>(): Promise<
	Ref<IUmbracoContent<P>>
> => {
	const route = useRoute();

	const { data, error } = await useAsyncData(
		route.path,
		() => getUmbracoContent(route.path)!
	);

	if (error.value) {
		throw error.value;
	}

	if (import.meta.dev && import.meta.client) {
		console.log(route.path, JSON.parse(JSON.stringify(data.value)));
	}

	return data as Ref<IUmbracoContent<P>>;
};
