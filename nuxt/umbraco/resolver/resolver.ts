export type ComponentMap = {
	[key: string]: Component;
};

/**
 * Returns the component for a given Umbraco content type alias.
 * @param contentType - Component content type alias.
 * @returns Component, or null.
 */
export const getComponent = (contentType: string | null | undefined): Component | null =>
	(contentType &&
		((pages as ComponentMap)[contentType] || (blocks as ComponentMap)[contentType])) ||
	null;
