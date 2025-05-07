export type UBlockGrid<I extends UBlockGridItem = UBlockGridItem> = {
	readonly gridColumns: number;
	readonly items: I[];
};

export type UBlockGridItem<C extends UContent = UContent> = {
	readonly rowSpan: number;
	readonly columnSpan: number;
	readonly areaGridColumns: number;
	readonly areas: unknown[];
	readonly content: C;
	readonly settings: unknown;
};
