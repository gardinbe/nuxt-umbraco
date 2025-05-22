import createClient from 'openapi-fetch';

/**
 * Umbraco Content Delivery API client.
 */
export const umbracoContentClient = createClient<paths>({
	// todo: update depending on environment
	baseUrl: 'http://localhost:55235'
});

/**
 * Requests and returns the Umbraco content item for a given path.
 * @param path - Path of the Umbraco content item.
 * @returns Umbraco content item, or null.
 */
export const getUmbracoContent = async <P extends POJO = POJO>(
	path: string
): Promise<IUmbracoContent<P>> => {
	const { data, error } = await umbracoContentClient.GET(
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
			statusMessage: error.title ?? 'Unknown error, please try again later'
		});
	}

	// todo: proper validation
	return data as IUmbracoContent<P>;
};
