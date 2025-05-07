<template>
	<div :class="`col-span-${areaGridColumns}`">
		<slot />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	columnSpan: number;
	rowSpan: number;
	areaGridColumns: number;
}>();
</script>
