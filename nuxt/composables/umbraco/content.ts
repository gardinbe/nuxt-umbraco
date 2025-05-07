/**
 * Composable to handle Umbraco global and page content.
 *
 * `load` must be invoked prior to accessing `page` and `global` properties.
 *
 * (`useAsyncData` does de-duplicate requests, but not between middleware execution and page
 * rendering. and it also feels like a slight mistake to rely entirely on memoization for this
 * purpose. so we need to set the response data from the middleware into a state accessible within
 * the rendering stage so as to not send multiple api requests when changing routes.)
 * @returns Umbraco state client.
 */
export const useUmbraco = () => {
	const { get } = useUmbracoApi();

	const global = useState<UContent<UGlobal>>('global');
	const page = useState<UContent>('page');

	return {
		/**
		 * Global Umbraco content.
		 */
		global,

		/**
		 * Current Umbraco page content.
		 */
		page,

		/**
		 * Loads the Umbraco global and provided page content into shared state.
		 *
		 * Performs request(s) to the Umbraco API if necessary.
		 *
		 * Global content will not be requested if already set, and page content will not be requested
		 * if no path is provided.
		 *
		 * Should be invoked within route middleware or layouts.
		 * @param path - Path of the current page.
		 */
		load: async (path?: string) => {
			if (path && !global.value) {
				[global.value, page.value] = await unwrapAll(
					Promise.all([get<UGlobal>(UmbracoGlobalEndpoint), get(path)])
				);
			} else if (!global.value) {
				global.value = await unwrap(get<UGlobal>(UmbracoGlobalEndpoint));
			} else if (path) {
				page.value = await unwrap(get<UContent>(path));
			}
		}
	} as const;
};
