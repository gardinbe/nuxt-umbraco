import type { NuxtError } from 'nuxt/app';
import createClient from 'openapi-fetch';

/**
 * Composable to handle Umbraco API requests.
 * @returns Umbraco API client.
 */
export const useUmbracoApi = () => {
	const config = useRuntimeConfig();

	const client = createClient<paths>({
		baseUrl: config.public.umbracoUrl
	});

	return {
		/**
		 * OpenAPI-fetch client for the Umbraco API.
		 */
		client,

		/**
		 * Requests and returns the Umbraco content item for a given path.
		 * @param path - Path of the Umbraco content item.
		 * @returns Result with the content item or an error.
		 */
		get: async <P extends POJO = POJO>(
			path: string
		): Promise<Result<UContent<P>, NuxtError>> => {
			const { data, error } = await useAsyncData(
				path,
				async () => {
					const { data, error } = await client.GET(
						'/umbraco/delivery/api/v2/content/item/{path}',
						{
							params: {
								path: { path }
							}
						}
					);

					if (error) {
						throw createError({
							statusCode: error.status ?? 500,
							statusMessage:
								error.detail ??
								`Unknown error occurred during Umbraco request to '${path}'`
						});
					}

					return data;
				},
				{
					deep: false
				}
			);

			if (error.value) {
				return [null, error.value];
			}

			return [data.value as UContent<P>, null];
		}
	} as const;
};
