export type UMultiUrlPicker = UMultiUrlPickerItem[];

export type UMultiUrlPickerItem = {
	readonly url: string | null;
	readonly queryString: string | null;
	readonly title: string;
	readonly target: string | null;
	readonly destinationId:
		| `${string}-${string}-${string}-${string}-${string}`
		| null;
	readonly destinationType: string | null;
	readonly route: {
		readonly path: string | null;
		readonly startItem: {
			readonly id: `${string}-${string}-${string}-${string}-${string}` | null;
			readonly path: string | null;
		};
	} | null;
	readonly linkType: string | null;
};
