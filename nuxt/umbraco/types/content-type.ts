export interface ContentType<
	P extends Record<string, unknown> = Record<string, unknown>
> {
	contentType: string;
	id: string;
	properties: P;
}
