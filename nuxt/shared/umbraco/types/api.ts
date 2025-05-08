export interface IUmbracoGlobalContent {
	navigation: IUmbracoContent<IUmbracoNavigation>;
	footer: IUmbracoContent<IUmbracoFooter>;
}

export type IUmbracoContent<T extends Pojo = Pojo> = Prettify<
	components['schemas']['IApiContentResponseModel'] & {
		readonly properties?: T;
	}
>;

export type IUmbracoMediaWithCrops =
	components['schemas']['IApiMediaWithCropsResponseModel'];
