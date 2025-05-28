<template>
	<component
		:is="component"
		v-if="component && page.properties"
		v-bind="page.properties"
	/>
	<h1
		v-else
		class="text-red-600"
	>
		Unknown page content type alias: {{ page.contentType }}
	</h1>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: async (to) => {
		const page = await umbraco.use(to.path);
		const layout = resolve.layout(page.contentType);

		if (import.meta.server || useNuxtApp().isHydrating) {
			to.meta.layout = layout;
			return;
		}

		setPageLayout(layout);
	}
});

const route = useRoute();
const page = await umbraco.use(route.path);
const component = resolve.component(page.contentType);
</script>
