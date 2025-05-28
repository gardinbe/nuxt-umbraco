<template>
	<div
		v-if="body"
		v-html="body.markup"
	/>
</template>

<script setup lang="ts">
import type { UContentBlock } from '#imports';

defineProps<UContentBlock>();
</script>
