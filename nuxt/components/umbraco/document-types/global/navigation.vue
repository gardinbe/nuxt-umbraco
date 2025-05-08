<template>
	<nav class="flex items-center h-20 p-5 gap-8 bg-slate-900">
		<NuxtLink
			class="flex h-full"
			to="/"
		>
			<img
				v-if="img"
				class="w-auto h-full object-contain"
				:src="getUmbracoMediaUrl(img.url)"
				:alt="img.name ?? ''"
				:title="img.name ?? ''"
				:width="img.width ?? ''"
				:height="img.height ?? ''"
			/>
		</NuxtLink>
		<menu class="flex items-center gap-8 h-full">
			<li
				v-for="link in links"
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
import type { IUmbracoNavigation } from '#imports';

const props = defineProps<IUmbracoNavigation>();
const img = props.logo[0];
</script>
