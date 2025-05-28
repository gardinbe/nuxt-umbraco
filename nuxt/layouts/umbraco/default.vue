<template>
	<header v-if="global.properties">
		<UmbracoGlobalNavigation v-bind="global.properties" />
	</header>
	<main>
		<slot />
	</main>
	<footer v-if="global.properties">
		<UmbracoGlobalFooter v-bind="global.properties" />
	</footer>
</template>

<script setup lang="ts">
import type { UGlobal } from '#imports';

const global = await umbraco.use<UGlobal>('/global');
</script>
