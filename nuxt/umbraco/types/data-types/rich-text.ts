import type { ContentType } from '~/umbraco/types/content-type';

export interface RichText {
	blocks: ContentType[];
	markup: string;
}
