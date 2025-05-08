export interface IUmbracoBlockGrid<
	I extends IUmbracoBlockGridItem = IUmbracoBlockGridItem
> {
	gridColumns: number;
	items: I[];
}

export interface IUmbracoBlockGridItem<
	C extends IUmbracoContent = IUmbracoContent
> {
	rowSpan: number;
	columnSpan: number;
	areaGridColumns: number;
	areas: unknown[];
	content: C;
	settings: unknown;
}
