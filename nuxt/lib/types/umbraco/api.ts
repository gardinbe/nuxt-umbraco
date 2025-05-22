export interface IUmbracoGlobalContent {
	navigation: IUmbracoContent<IUmbracoNavigation>;
	footer: IUmbracoContent<IUmbracoFooter>;
}

export type IUmbracoContent<T extends POJO = POJO> = Prettify<
	components['schemas']['IApiContentResponseModel'] & {
		readonly properties?: T;
	}
>;

export type IUmbracoMediaWithCrops = components['schemas']['IApiMediaWithCropsResponseModel'];
