/**
 * Composable to generate a HTML title composed of the given parts.
 * @param parts - Title parts.
 * @returns HTML title.
 */
export const useTitle = (...parts: unknown[]) => {
	const config = useRuntimeConfig();
	return [config.public.siteName]
		.concat(parts.map(String).filter((p) => !!p))
		.join(' • ');
};
