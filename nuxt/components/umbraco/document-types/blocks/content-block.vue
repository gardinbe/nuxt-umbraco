<template>
	<UmbracoDataTypesRichText
		v-if="body"
		v-bind="body"
	/>
</template>

<script setup lang="ts">
import type { IContentBlock } from '~/umbraco/types/document-types/blocks/content-block';

defineProps<IContentBlock>();
</script>
