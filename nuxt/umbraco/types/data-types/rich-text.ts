import type { IContent } from '~/umbraco/client/client';

export interface IRichText {
	blocks: IContent[];
	markup: string;
}
