<template>
	<nav class="flex items-center h-20 p-5 gap-8 bg-slate-900">
		<NuxtLink
			class="flex h-full"
			to="/"
		>
			<img
				v-if="img"
				class="w-auto h-full object-contain"
				:src="media.url(img.url)"
				:alt="img.name ?? ''"
				:title="img.name ?? ''"
				:width="img.width ?? ''"
				:height="img.height ?? ''"
			/>
		</NuxtLink>
		<menu class="flex items-center gap-8 h-full">
			<li
				v-for="link in navigationLinks"
				:key="link.destinationId"
			>
				<NuxtLink
					class="text-xl font-bold"
					:to="link.route.path"
					>{{ link.title }}</NuxtLink
				>
			</li>
		</menu>
	</nav>
</template>

<script setup lang="ts">
import type { UGlobal } from '#imports';

const props = defineProps<UGlobal>();
const img = props.navigationLogo?.[0];
</script>
