/**
 * Checks if a value is Promise-like.
 * @param value - Value to check.
 * @returns True if the value is Promise-like.
 */
export const isPromiseLike = <T>(
	value: T | PromiseLike<T>
): value is PromiseLike<T> => {
	return typeof value === 'object' && value !== null && 'then' in value;
};
