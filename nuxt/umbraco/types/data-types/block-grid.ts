import type { ContentType } from '~/umbraco/types/content-type';

export interface BlockGrid<I extends BlockGridItem = BlockGridItem> {
	gridColumns: number;
	items: I[];
}

export interface BlockGridItem<C extends ContentType = ContentType> {
	rowSpan: number;
	columnSpan: number;
	areaGridColumns: number;
	areas: unknown[];
	content: C;
	settings: unknown;
}
