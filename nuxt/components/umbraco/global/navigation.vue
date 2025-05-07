<template>
	<nav class="flex items-center h-16 px-5 py-3 gap-8 bg-slate-900">
		<NuxtLink
			class="flex h-full"
			to="/"
		>
			<img
				v-if="img"
				class="w-auto h-full object-contain"
				:src="url(img.url)"
				:alt="img.name ?? ''"
				:title="img.name ?? ''"
				:width="img.width ?? ''"
				:height="img.height ?? ''"
			/>
		</NuxtLink>
		<menu class="flex items-center gap-7 h-full">
			<li
				v-for="(link, i) in navigationLinks"
				:key="i"
			>
				<NuxtLink :to="link.route?.path ?? link.url ?? ''">
					{{ link.title }}
				</NuxtLink>
			</li>
		</menu>
	</nav>
</template>

<script setup lang="ts">
import type { UNavigationComposition } from '#imports';

const { url } = useUmbracoMedia();

const props = defineProps<UNavigationComposition>();
const img = props.navigationLogo?.[0];
</script>
