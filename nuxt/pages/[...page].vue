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
		Unknown page content type: {{ page.contentType }}
	</h1>
</template>

<script setup lang="ts">
const page = await useUmbracoContent();
const component = getUmbracoPageComponent(page.value.contentType);
</script>
