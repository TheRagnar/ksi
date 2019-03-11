<template>
	<nav class="breadcrumbs">
		<router-link v-for="(item, index) in items" :to="item.to" v-bind:key="index">{{item.text}}</router-link>
	</nav>
</template>

<script>
export default {
	props: {
		items: Array
	}
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/breadcrumbs.scss";
</style>
