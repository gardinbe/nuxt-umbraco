export type IUmbracoMultiUrlPicker = IUmbracoMultiUrlPickerItem[];

export interface IUmbracoMultiUrlPickerItem {
	url: string | null;
	queryString: string | null;
	title: string;
	target: string | null;
	destinationId: `${string}-${string}-${string}-${string}-${string}`;
	destinationType: string;
	route: {
		path: string;
		startItem: {
			id: `${string}-${string}-${string}-${string}-${string}`;
			path: string;
		};
	};
	linkType: string;
}
