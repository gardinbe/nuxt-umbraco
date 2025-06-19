import type { LayoutKey } from '#build/types/layouts';

export type ComponentMap = {
	[key: string]: Component;
};

export type LayoutMap = {
	[key: string]: LayoutKey;
};

export const umbracoResolver = {
	/**
	 * Returns the block component for a given Umbraco content type alias.
	 * @param alias - Block content type alias.
	 * @returns Block component, or null.
	 */
	resolveBlock: (alias: string | null | undefined): Component | null =>
		(alias && (umbracoComponents.blocks as ComponentMap)[alias]) || null,

	/**
	 * Returns the page component for a given Umbraco content type alias.
	 * @param alias - Page content type alias.
	 * @returns Page component, or null.
	 */
	resolvePage: (alias: string | null | undefined): Component | null =>
		(alias && (umbracoComponents.pages as ComponentMap)[alias]) || null,

	/**
	 * Returns the layout key for a given Umbraco page content type alias.
	 * @param alias - Umbraco page content type alias.
	 * @returns Layout key.
	 */
	resolveLayoutKey: (alias: string | null | undefined): LayoutKey =>
		(alias && (umbracoComponents.layouts as LayoutMap)[alias]) ||
		'umbraco-default'
} as const;
