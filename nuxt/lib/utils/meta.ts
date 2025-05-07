/**
 * Returns a HTML title composed of the given parts.
 * @param parts - Title parts.
 * @returns HTML title.
 */
export const createMetaTitle = (
	...parts: (string | number | null | undefined)[]
) => {
	return ['Appius'].concat(parts.filter((p): p is string => !!p)).join(' • ');
};
