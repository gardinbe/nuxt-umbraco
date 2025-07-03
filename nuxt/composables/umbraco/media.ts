/**
 * Composable to handle Umbraco media items.
 * @returns Umbraco media client.
 */
export const useUmbracoMedia = () => {
	const config = useRuntimeConfig();

	return {
		/**
		 * Returns the full URL for an Umbraco media item path.
		 * @param path - Media item path.
		 * @returns Full URL.
		 */
		formatUrl: (path?: string | null | undefined): string =>
			path ? config.public.umbracoUrl + path : ''
	} as const;
};
