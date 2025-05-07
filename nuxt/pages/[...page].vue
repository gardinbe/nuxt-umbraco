<template>
	<Component
		:is="component"
		v-if="component"
		v-bind="{ global, page }"
	/>
	<h1
		v-else
		class="text-red-600"
	>
		Unknown page content type: {{ page.contentType }}
	</h1>
</template>

<script setup lang="ts">
import type { Data } from '~/middleware/content';
import { getUmbracoPageComponent } from '~/umbraco/utils/get-component';

definePageMeta({
	middleware: 'content'
});

const route = useRoute();

// injected by middleware
const { global, page } = route.meta as Data;

if (import.meta.dev && import.meta.client) {
	console.log(route.path, JSON.parse(JSON.stringify(page)));
}

const component = getUmbracoPageComponent(page.contentType);
</script>
