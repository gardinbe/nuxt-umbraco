<template>
	<div :class="`grid grid-cols-${gridColumns} gap-4`">
		<slot />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	gridColumns: number;
}>();
</script>
