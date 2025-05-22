<template>
	<header>
		<UmbracoDocumentTypesGlobalNavigation
			v-if="data.navigation.properties"
			v-bind="data.navigation.properties"
		/>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<UmbracoDocumentTypesGlobalFooter
			v-if="data.footer.properties"
			v-bind="data.footer.properties"
		/>
	</footer>
</template>

<script setup lang="ts">
// retrieves global content from umbraco cd api
const data = await useUmbracoGlobalContent();
</script>
