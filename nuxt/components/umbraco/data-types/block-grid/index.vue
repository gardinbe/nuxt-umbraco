<template>
	<UmbracoDataTypesBlockGridRow :grid-columns="gridColumns">
		<UmbracoDataTypesBlockGridColumn
			v-for="block in blocks"
			:key="block.data.content.id"
			:column-span="block.data.columnSpan"
			:row-span="block.data.rowSpan"
			:area-grid-columns="gridColumns"
		>
			<Component
				:is="block.component"
				v-if="block.component"
				v-bind="block.data.content.properties"
			/>
			<h1
				v-else
				class="text-red-600"
			>
				Unknown block type: {{ block.data.content.contentType }}
			</h1>
		</UmbracoDataTypesBlockGridColumn>
	</UmbracoDataTypesBlockGridRow>
</template>

<script setup lang="ts">
import { getUmbracoBlockComponent } from '~/umbraco/utils/get-component';
import type { BlockGrid } from '~/umbraco/types/data-types/block-grid';

const props = defineProps<BlockGrid>();
const blocks = props.items.map((item) => ({
	data: item,
	component: getUmbracoBlockComponent(item.content.contentType)
}));
</script>
