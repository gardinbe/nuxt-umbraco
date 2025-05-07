<template>
	<Component
		:is="component"
		v-if="component"
		v-bind="content.properties"
	/>
	<h1
		v-else
		class="text-red-600"
	>
		Unknown page type: {{ content.contentType }}
	</h1>
</template>

<script setup lang="ts">
import type { IApiContentResponseModelReadable } from '~/.umbraco';
import { getUmbracoPageComponent } from '~/umbraco/utils/get-component';

definePageMeta({
	middleware: 'content'
});

const route = useRoute();

// content injected by middleware

const content = route.meta.content as
	| IApiContentResponseModelReadable
	| undefined;

if (import.meta.dev && import.meta.client) {
	console.log(route.path, JSON.parse(JSON.stringify(content)));
}

if (!content?.contentType) {
	throw createError({
		statusCode: 500,
		statusMessage: 'Missing or malformed response from API'
	});
}

const component = getUmbracoPageComponent(content.contentType);
</script>
