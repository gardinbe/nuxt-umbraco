<template>
	<div class="std-container py-4">
		<template v-if="isDev">
			<h1 v-html="error.statusCode" />
			<p
				v-if="!error.stack"
				v-html="error.message"
			/>
			<code
				v-else
				class="std-codeblock"
				v-html="error.stack"
			/>
		</template>
		<template v-else-if="error.statusCode === 404">
			<h1>404</h1>
			<p class="text-xl">
				We're sorry, but the page you’re looking for doesn’t exist or may have
				been moved.
			</p>
			<p>
				Please double check the URL or
				<button
					class="link"
					@click="clearError({ redirect: '/' })"
				>
					return to the home page</button
				>.
			</p>
			<p>
				If you need assistance, feel free to
				<NuxtLink to="/">reach out directly</NuxtLink>.
			</p>
		</template>
		<template v-else>
			<h1>Error</h1>
			<p>The application has encountered an error. Please try again later.</p>
		</template>
		<button
			class="link"
			@click="clearError({ redirect: '/' })"
		>
			Return to homepage
		</button>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const isDev = import.meta.dev;

defineProps<{
	error: NuxtError;
}>();
</script>
