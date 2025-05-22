/**
 * Returns the component for a given Umbraco content type alias.
 * @param alias - Component content type alias.
 * @returns Component, or null.
 */
export const resolveUmbracoComponent = (alias: string | null | undefined): Component | null =>
	(alias && ((pages as ComponentMap)[alias] || (blocks as ComponentMap)[alias])) || null;

export type ComponentMap = {
	[key: string]: Component;
};
