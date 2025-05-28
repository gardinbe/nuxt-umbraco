<template>
	<div class="std-container">
		<h1 v-html="error.statusCode" />
		<p v-html="error.message" />
		<code
			v-if="isDev && error.stack"
			class="std-codeblock"
			v-html="error.stack"
		/>
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
