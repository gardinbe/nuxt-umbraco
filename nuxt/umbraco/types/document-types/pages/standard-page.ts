import type { IBlockGrid } from '~/umbraco/types/data-types/block-grid';
import type { IPageMetaComposition } from '~/umbraco/types/document-types/pages/compositions/page-meta';

export interface IStandardPage extends IPageMetaComposition {
	body: IBlockGrid | null;
}
