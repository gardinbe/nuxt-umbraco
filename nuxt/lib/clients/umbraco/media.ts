export const umbracoMedia = {
	/**
	 * Returns the full URL for an Umbraco media item path.
	 * @param path - Media item path.
	 * @returns Full URL.
	 */
	url: (path?: string | null | undefined): string =>
		path ? `http://localhost:55235${path}` : ''
} as const;
