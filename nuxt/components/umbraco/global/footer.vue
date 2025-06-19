<template>
	<div class="flex items-center px-5 py-2 bg-slate-700 text-sm">
		<div
			v-if="footerContent"
			v-html="footerContent.markup"
		/>
	</div>
</template>

<script setup lang="ts">
import type { UFooterComposition } from '#imports';

defineProps<UFooterComposition>();
</script>
