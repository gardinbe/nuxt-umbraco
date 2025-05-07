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
		const { load, page } = useUmbraco();
		const { getLayoutKey } = useUmbracoResolver();

		await load(to.path);
		const layout = getLayoutKey(page.value.contentType);

		if (import.meta.server || useNuxtApp().isHydrating) {
			to.meta.layout = layout;
			return;
		}

		setPageLayout(layout);
	}
});

const { page } = useUmbraco();
const { getPage } = useUmbracoResolver();

const component = getPage(page.value.contentType);
</script>
