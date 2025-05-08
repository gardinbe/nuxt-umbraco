<template>
	<div class="flex items-center">
		<UmbracoDataTypesRichText
			v-if="text"
			v-bind="text"
		/>
	</div>
</template>

<script setup lang="ts">
import type { IUmbracoFooter } from '#imports';

defineProps<IUmbracoFooter>();
</script>
