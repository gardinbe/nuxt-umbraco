<template>
	<NuxtLayout
		v-bind="global"
		name="umbraco-default"
	>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const global = await useUmbracoGlobalContent();
</script>
