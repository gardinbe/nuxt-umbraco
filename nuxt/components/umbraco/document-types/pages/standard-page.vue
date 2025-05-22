<template>
	<UmbracoDataTypesBlockGrid
		v-if="body"
		v-bind="body"
	/>
</template>

<script setup lang="ts">
import type { IUmbracoStandardPage } from '#imports';

const props = defineProps<IUmbracoStandardPage>();
useUmbracoHead(props);
</script>
