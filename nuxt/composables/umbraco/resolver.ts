import type { LayoutKey } from '#build/types/layouts';

export type ComponentMap = {
	[key: string]: Component;
};

export type LayoutKeyMap = {
	[key: string]: LayoutKey;
};

/**
 * Composable to resolve Umbraco content type aliases to components and layouts.
 * @returns Umbraco resolver client.
 */
export const useUmbracoResolver = () => {
	return {
		/**
		 * Returns the block component for a given Umbraco content type alias.
		 * @param alias - Block content type alias.
		 * @returns Block component, or null.
		 */
		getBlock: (alias: string | null | undefined): Component | null =>
			(alias && (UmbracoComponents.Blocks as ComponentMap)[alias]) || null,

		/**
		 * Returns the page component for a given Umbraco content type alias.
		 * @param alias - Page content type alias.
		 * @returns Page component, or null.
		 */
		getPage: (alias: string | null | undefined): Component | null =>
			(alias && (UmbracoComponents.Pages as ComponentMap)[alias]) || null,

		/**
		 * Returns the layout key for a given Umbraco page content type alias.
		 * @param alias - Umbraco page content type alias.
		 * @returns Layout key.
		 */
		getLayoutKey: (alias: string | null | undefined): LayoutKey =>
			(alias && (UmbracoComponents.Layouts as LayoutKeyMap)[alias]) ||
			'umbraco-default'
	} as const;
};
