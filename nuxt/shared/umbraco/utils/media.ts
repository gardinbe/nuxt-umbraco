/**
 * Returns the full URL for an Umbraco media item's path.
 * @param path - The media item's path.
 * @returns The full URL.
 */
export const getUmbracoMediaUrl = (path?: string | null | undefined) =>
	path ? `http://localhost:55235${path}` : '';
