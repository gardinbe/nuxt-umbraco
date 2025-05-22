<template>
	<component
		:is="component"
		v-if="component && data.properties"
		v-bind="data.properties"
	/>
	<h1
		v-else
		class="text-red-600"
	>
		Unknown page content type alias: {{ data.contentType }}
	</h1>
</template>

<script setup lang="ts">
// gets the current path
const route = useRoute();
// retrieves page content for current path from umbraco cd api
const data = await useUmbracoContent(route.path);
// resolves the component for the page's content type alias
const component = resolveUmbracoComponent(data.value.contentType);
</script>
