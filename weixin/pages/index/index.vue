<template>
	<view class="container">
		{{hello}}
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const hello = ref("Hello Fish");
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>