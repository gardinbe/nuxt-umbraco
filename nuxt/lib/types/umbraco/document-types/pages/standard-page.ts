import type { IUmbracoPageMetaComposition } from '#imports';

export interface IUmbracoStandardPage extends IUmbracoPageMetaComposition {
	body: IUmbracoBlockGrid | null;
}
