import type { BlockGrid } from '~/umbraco/types/data-types/block-grid';
import type { PageMetaComposition } from '~/umbraco/types/document-types/pages/compositions/page-meta';

export interface StandardPage extends PageMetaComposition {
	body: BlockGrid | null;
}
