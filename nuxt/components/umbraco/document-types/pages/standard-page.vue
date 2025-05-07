<template>
	<UmbracoDataTypesBlockGrid
		v-if="body"
		v-bind="body"
	/>

	<div class="container mx-auto px-4">
		<NuxtLink to="/">Return to homepage</NuxtLink>
		<NuxtLink to="/about">About page</NuxtLink>
		<NuxtLink to="/typography">Typography page</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { StandardPage } from '~/umbraco/types/document-types/pages/standard-page';
import { createUmbracoHead } from '~/umbraco/utils/create-meta';

const props = defineProps<StandardPage>();

useHead(createUmbracoHead(props));
</script>
