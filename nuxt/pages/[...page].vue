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
		Unknown page content type: {{ data.contentType }}
	</h1>
</template>

<script setup lang="ts">
const route = useRoute();
const data = await useUmbraco(route.path);
const component = getComponent(data.value.contentType);
</script>
