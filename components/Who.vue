<template>
	<div class="who">
		<div class="who__image"><img v-bind:src="image ? image : '/img/noimage.jpg'" alt=""></div>
		<div class="who__content">
			<div class="who__title" v-html="title"></div>
			<div class="who__text" v-html="text"></div>
			<div class="who__btn btn btn--base">{{btn}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		image: String,
		title: String,
		text: String,
		btn: String
	}
}
</script>

<style lang="scss">
	@import '~/assets/styles/components/who.scss';
</style>
