<template>
	<div class="std-container">
		<h1>{{ error.statusCode }}</h1>
		<p>{{ error.message }}</p>
		<button
			class="link"
			@click="clearError({ redirect: '/' })"
		>
			Return to homepage
		</button>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

defineProps<{
	error: NuxtError;
}>();
</script>
