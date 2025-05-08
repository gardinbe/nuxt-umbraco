<template>
	<header>
		<UmbracoDocumentTypesGlobalNavigation
			v-if="navigation.properties"
			v-bind="navigation.properties"
		/>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<UmbracoDocumentTypesGlobalFooter
			v-if="footer.properties"
			v-bind="footer.properties"
		/>
	</footer>
</template>

<script setup lang="ts">
import type { IUmbracoGlobalContent } from '#imports';

defineProps<IUmbracoGlobalContent>();
</script>
