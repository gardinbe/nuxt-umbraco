import type { Component } from 'vue';
import blocks from '~/umbraco/blocks';
import pages from '~/umbraco/pages';

export type ComponentMap = {
	[key: string]: Component;
};

/**
 * Returns the component for a given Umbraco content type alias.
 * @param name - The content type alias.
 * @returns Component, or null.
 */
const getUmbracoComponent = (
	name: string | null | undefined,
	components: ComponentMap
) => (name && components[name]) ?? null;

/**
 * Returns the component for a given Umbraco page content type alias.
 * @param name - The page content type alias.
 * @returns Component, or null.
 */
export const getUmbracoPageComponent = (name?: string | null | undefined) =>
	getUmbracoComponent(name, pages);

/**
 * Returns the component for a given Umbraco block content type alias.
 * @param name - The block content type alias.
 * @returns Component, or null.
 */
export const getUmbracoBlockComponent = (name?: string | null | undefined) =>
	getUmbracoComponent(name, blocks);
