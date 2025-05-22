<template>
	<NuxtLayout
		v-bind="globalData"
		name="umbraco-default"
	>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const globalData = await useUmbracoGlobal();
</script>
