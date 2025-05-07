<template>
	<UmbracoBlockgrid
		v-if="body"
		v-bind="body"
	/>
</template>

<script setup lang="ts">
import type { UDefaultPage } from '#imports';

const props = defineProps<UDefaultPage>();
useUmbracoMeta(props);
</script>
