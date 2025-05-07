<template>
	<div
		v-if="markup"
		v-html="markup"
	/>
</template>

<script setup lang="ts">
import type { IRichText } from '~/umbraco/types/data-types/rich-text';

defineProps<IRichText>();
</script>
