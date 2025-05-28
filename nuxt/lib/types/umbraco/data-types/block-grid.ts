export type UBlockGrid<I extends UBlockGridItem = UBlockGridItem> =
	/* @vue-ignore */ UDataType<{
		gridColumns: number;
		items: I[];
	}>;

export type UBlockGridItem<C extends UContent = UContent> =
	/* @vue-ignore */ UDataType<{
		rowSpan: number;
		columnSpan: number;
		areaGridColumns: number;
		areas: unknown[];
		content: C;
		settings: unknown;
	}>;
