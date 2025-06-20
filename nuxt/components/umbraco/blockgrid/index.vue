<template>
	<UmbracoBlockgridRow :grid-columns="gridColumns">
		<UmbracoBlockgridColumn
			v-for="{ data, component } in blocks"
			:key="data.content.id!"
			:column-span="data.columnSpan"
			:row-span="data.rowSpan"
			:area-grid-columns="gridColumns"
		>
			<component
				:is="component"
				v-if="component && data.content.properties"
				v-bind="data.content.properties"
			/>
			<h1
				v-else
				class="text-red-600"
			>
				Unknown block content type alias: {{ data.content.contentType }}
			</h1>
		</UmbracoBlockgridColumn>
	</UmbracoBlockgridRow>
</template>

<script setup lang="ts">
import type { UBlockGrid } from '#imports';

const { getBlock } = useUmbracoResolver();

const props = defineProps<UBlockGrid>();
const blocks = props.items.map((i) => ({
	data: i,
	component: getBlock(i.content.contentType)
}));
</script>
