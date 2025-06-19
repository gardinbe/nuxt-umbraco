<template>
	<div
		v-if="body"
		class="std-container py-4"
		v-html="body.markup"
	/>
</template>

<script setup lang="ts">
import type { UContentBlock } from '#imports';

defineProps<UContentBlock>();
</script>
