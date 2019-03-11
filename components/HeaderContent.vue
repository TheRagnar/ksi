<template>
	<header class="header-content">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="header-content__title">{{ title }}</div>
		</div>
	</header>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';

export default {
	components: {
		Breadcrumbs
	},
	props: {
		title: String,
		items: Array
	},
}
</script>
<style lang="scss">
	@import "~/assets/styles/components/headercontent.scss";
</style>
