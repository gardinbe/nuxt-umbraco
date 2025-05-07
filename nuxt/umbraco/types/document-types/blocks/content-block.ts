import type { IRichText } from '~/umbraco/types/data-types/rich-text';

export interface IContentBlock {
	body: IRichText | null;
}
