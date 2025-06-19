export type UContent<T extends POJO = POJO> =
	components['schemas']['IApiContentResponseModel'] & {
		readonly properties?: T;
	};

export type UMediaWithCrops =
	components['schemas']['IApiMediaWithCropsResponseModel'];
