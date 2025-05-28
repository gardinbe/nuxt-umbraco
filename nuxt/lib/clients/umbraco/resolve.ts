import type { LayoutKey } from '#build/types/layouts';

export type ComponentMap = {
	[key: string]: Component;
};

export type LayoutMap = {
	[key: string]: LayoutKey;
};

export const resolve = {
	/**
	 * Returns the component for a given Umbraco content type alias.
	 * @param alias - Component content type alias.
	 * @returns Component, or null.
	 */
	component: (alias: string | null | undefined): Component | null =>
		(alias &&
			((components.pages as ComponentMap)[alias] ||
				(components.blocks as ComponentMap)[alias])) ||
		null,

	/**
	 * Returns the layout key for a given Umbraco page content type alias.
	 * @param alias - Umbraco page content type alias.
	 * @returns Layout key.
	 */
	layout: (alias: string | null | undefined): LayoutKey =>
		(alias && (components.layouts as LayoutMap)[alias]) || 'umbraco-default'
} as const;
