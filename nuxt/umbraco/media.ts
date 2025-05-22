/**
 * Returns the full URL for an Umbraco media item path.
 * @param path - Media item path.
 * @returns Full URL.
 */
export const getUmbracoMediaUrl = (path?: string | null | undefined): string =>
	path ? `http://localhost:55235${path}` : '';
