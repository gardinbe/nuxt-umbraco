<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import type { LayoutKey } from '#build/types/layouts';

const layout = useState<LayoutKey>('layout', () => 'umbraco-default');
</script>
