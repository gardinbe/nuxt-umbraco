<template>
	<div class="flex items-center">
		<div
			v-if="footerContent"
			v-html="footerContent.markup"
		/>
	</div>
</template>

<script setup lang="ts">
import type { UGlobal } from '#imports';

defineProps<UGlobal>();
</script>
