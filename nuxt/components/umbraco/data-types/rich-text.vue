<template>
	<div
		v-if="markup"
		v-html="markup"
	/>
</template>

<script setup lang="ts">
import type { IUmbracoRichText } from '#imports';

defineProps<IUmbracoRichText>();
</script>
