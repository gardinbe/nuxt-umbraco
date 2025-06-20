/**
 * Composable to set Umbraco content into shared state.
 *
 * `update` must be invoked prior to accessing `page` and `global` properties.
 *
 * (`useAsyncData` does de-duplicate requests, but not between middleware execution and page
 * rendering. so we need to set the response data from the middleware into a state accessible
 * by the client and read it within the page component, so as to not send two api requests when
 * changing route on the client.)
 * @returns Umbraco state client.
 */
export const useUmbraco = () => {
	const { get, all } = useUmbracoApi();

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
		 * Updates the Umbraco global and page states by performing a request(s) to the Umbraco API if
		 * necessary.
		 *
		 * Should be invoked within route middleware or layouts.
		 * @param path - Path of the current page.
		 */
		update: async (path?: string) => {
			if (path && !global.value) {
				[global.value, page.value] = await unwrap(
					all(get<UGlobal>(UmbracoGlobalEndpoint), get(path))
				);
			} else if (!global.value) {
				global.value = await unwrap(get<UGlobal>(UmbracoGlobalEndpoint));
			} else if (path) {
				page.value = await unwrap(get<UContent>(path));
			}
		}
	} as const;
};
