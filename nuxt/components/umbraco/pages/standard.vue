<template>
	<UmbracoBlockgrid
		v-if="body"
		v-bind="body"
	/>
</template>

<script setup lang="ts">
// UStandardPage
const props = defineProps<{
	readonly pageMetaTitle: string | null;
	readonly pageMetaDescription: string | null;
	readonly body: {
		gridColumns: number;
		items: {
			rowSpan: number;
			columnSpan: number;
			areaGridColumns: number;
			areas: unknown[];
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			content: any;
			settings: unknown;
		}[];
	} | null;
}>();
umbraco.useMeta(props);
</script>
