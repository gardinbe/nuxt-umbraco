<template>
	<div
		v-if="body"
		v-html="body.markup"
	/>
</template>

<script setup lang="ts">
import type { ContentBlock } from '~/umbraco/types/document-types/blocks/content-block';

defineProps<ContentBlock>();
</script>
