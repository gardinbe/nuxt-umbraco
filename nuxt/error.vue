<template>
	<div class="std-container">
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
