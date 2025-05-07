/**
 * Prettifies a type by flattening it.
 * @template T - Type to prettify.
 */
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

/**
 * Represents a Plain Old JavaScript Object.
 */
export type POJO = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
};
