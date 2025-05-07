import createClient from 'openapi-fetch';
import type { Pojo, Prettify } from '~/shared/types/utils';
import type { components, paths } from '~/umbraco/client/generated';

/**
 * Umbraco HTTP client.
 */
export const umbraco = createClient<paths>({
	// TODO: update depending on environment
	baseUrl: 'http://localhost:55235'
});

/**
 * Returns the full URL for an Umbraco media item's path.
 * @param path - The media item's path.
 * @returns The full URL.
 */
export const getMediaUrl = (path?: string | null | undefined) =>
	path ? `http://localhost:55235${path}` : '';

export type IContent<T extends Pojo = Pojo> = Prettify<
	components['schemas']['IApiContentResponseModel'] & {
		readonly properties?: T;
	}
>;

export type IMediaWithCrops =
	components['schemas']['IApiMediaWithCropsResponseModel'];
