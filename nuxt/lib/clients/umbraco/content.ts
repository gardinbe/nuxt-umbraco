import createClient from 'openapi-fetch';

const client = createClient<paths>({
	// todo: update depending on environment
	baseUrl: 'http://localhost:55235'
});

export const content = {
	/**
	 * Umbraco UContent Delivery API client.
	 */
	client,

	/**
	 * Requests and returns the Umbraco content item for a given path.
	 * @param path - Path of the Umbraco content item.
	 * @returns Umbraco content item, or null.
	 */
	get: async <P extends POJO = POJO>(
		path: string
	): Promise<Result<UContent<P>>> => {
		const { data, error } = await client.GET(
			'/umbraco/delivery/api/v2/content/item/{path}',
			{
				params: {
					path: { path }
				}
			}
		);

		if (error || !data) {
			return [
				null,
				createError({
					statusCode: error.status ?? 500,
					statusMessage: error.title ?? 'Unknown error, please try again later'
				})
			];
		}

		return [data as UContent<P>, null];
	}
} as const;
