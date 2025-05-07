import type { UPageMetaComposition } from '#imports';

export type UDefaultPage = UPageMetaComposition & {
	readonly body: UBlockGrid | null;
};
