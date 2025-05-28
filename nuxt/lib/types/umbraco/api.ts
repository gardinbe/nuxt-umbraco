export type UDataType<T> = {
	readonly [K in keyof T]: T[K];
};

export type UDocumentType<T> = {
	readonly [K in keyof T]: T[K] | null;
};

export type UComposition<T> = UDocumentType<UDataType<T>>;

export type UContent<T extends POJO = POJO> = Prettify<
	components['schemas']['IApiContentResponseModel'] & {
		readonly properties?: T;
	}
>;

export type UMediaWithCrops =
	components['schemas']['IApiMediaWithCropsResponseModel'];
