<template>
	<UmbracoDataTypesBlockGridRow :grid-columns="gridColumns">
		<UmbracoDataTypesBlockGridColumn
			v-for="[data, component] in blocks"
			:key="data.content.id!"
			:column-span="data.columnSpan"
			:row-span="data.rowSpan"
			:area-grid-columns="gridColumns"
		>
			<Component
				:is="component"
				v-if="component && data.content.properties"
				v-bind="data.content.properties"
			/>
			<h1
				v-else
				class="text-red-600"
			>
				Unknown block content type: {{ data.content.contentType }}
			</h1>
		</UmbracoDataTypesBlockGridColumn>
	</UmbracoDataTypesBlockGridRow>
</template>

<script setup lang="ts">
import { getUmbracoBlockComponent } from '~/umbraco/utils/get-component';
import type { IBlockGrid } from '~/umbraco/types/data-types/block-grid';

const props = defineProps<IBlockGrid>();
const blocks = props.items.map(
	(i) => [i, getUmbracoBlockComponent(i.content.contentType)] as const
);
</script>
