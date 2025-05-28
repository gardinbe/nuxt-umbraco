import type { NuxtError } from '#app';

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

/**
 * Represents a value or an error.
 * @template T - Value type.
 * @template E - Error type.
 */
export type Result<T, E extends Error = NuxtError> = [T, null] | [null, E];
