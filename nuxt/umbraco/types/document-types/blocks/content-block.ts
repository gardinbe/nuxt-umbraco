import type { RichText } from '~/umbraco/types/data-types/rich-text';

export interface ContentBlock {
	body: RichText | null;
}
