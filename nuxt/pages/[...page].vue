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
		const page = await useUmbraco(to.path);
		useState('page').value = page;

		// useAsyncData does de-duplicate requests, but not between middleware execution and page
		// rendering. so we need to set the response data from the middleware into a state accessible
		// by the client and read it within the page component, so as to not send two api requests when
		// changing route on the client.

		const layout = umbracoResolver.resolveLayoutKey(page.contentType);

		if (import.meta.server || useNuxtApp().isHydrating) {
			to.meta.layout = layout;
			return;
		}

		setPageLayout(layout);
	}
});

const page = useState<UContent>('page').value;
const component = umbracoResolver.resolvePage(page.contentType);
</script>
