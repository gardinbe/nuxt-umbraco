import type { IContent } from '~/umbraco/client/client';

export interface IBlockGrid<I extends IBlockGridItem = IBlockGridItem> {
	gridColumns: number;
	items: I[];
}

export interface IBlockGridItem<C extends IContent = IContent> {
	rowSpan: number;
	columnSpan: number;
	areaGridColumns: number;
	areas: unknown[];
	content: C;
	settings: unknown;
}
