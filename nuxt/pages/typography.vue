<template>
	<div class="std-container py-4">
		<h1>Heading One</h1>
		<p>Paragraph One</p>
		<h2>Heading Two</h2>
		<p>Paragraph Two</p>
		<h3>Heading Three</h3>
		<p>Paragraph Three</p>
		<h4>Heading Four</h4>
		<p>Paragraph Four</p>
		<h5>Heading Five</h5>
		<p>Paragraph Five</p>
		<h6>Heading Six</h6>
		<p>Paragraph Six</p>
		<ul>
			<li>Unordered List One</li>
			<li>Unordered List Two</li>
			<li>Unordered List Three</li>
		</ul>
		<ol>
			<li>Ordered List One</li>
			<li>Ordered List Two</li>
			<li>Ordered List Three</li>
		</ol>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'umbraco-default'
});
useHead({
	title: createMetaTitle('Typography')
});
</script>
