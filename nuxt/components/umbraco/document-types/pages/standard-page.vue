<template>
	<header>
		<UmbracoDocumentTypesGlobalNavigation
			v-if="global.navigation.properties"
			v-bind="global.navigation.properties"
		/>
	</header>
	<main>
		<UmbracoDataTypesBlockGrid
			v-if="page.properties?.body"
			v-bind="page.properties.body"
		/>
	</main>
	<footer />
</template>

<script setup lang="ts">
import type { Data } from '~/middleware/content';
import type { IStandardPage } from '~/umbraco/types/document-types/pages/standard-page';
import { createUmbracoHead } from '~/umbraco/utils/create-meta';

const props = defineProps<Data<IStandardPage>>();

useHead(createUmbracoHead(props.page.properties));
</script>
