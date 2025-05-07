export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type Pojo = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
