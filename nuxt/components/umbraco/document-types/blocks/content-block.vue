<template>
	<UmbracoDataTypesRichText
		v-if="body"
		v-bind="body"
	/>
</template>

<script setup lang="ts">
import type { IUmbracoContentBlock } from '#imports';

defineProps<IUmbracoContentBlock>();
</script>
