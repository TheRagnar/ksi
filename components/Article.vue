<template>
	<div class="article">
		<router-link v-bind:to="`/news/${id}`" class="article__name">{{ name }}</router-link>
		<div class="article__content" v-html="content"></div>
		<div class="article__footer">
			<div class="article__box">
				<div class="article__icon"><svg><use xlink:href="/sprite.svg#comments"></use></svg></div>
				{{ comments }}
			</div>
			<div class="article__box">
				<div class="article__icon"><svg><use xlink:href="/sprite.svg#views"></use></svg></div>
				{{ views }}
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		id: Number,
		name: String,
		comments: Number,
		views: Number,
		content: String,
	},
}
</script>
<style lang="scss">
	@import "~/assets/styles/components/article.scss";
</style>
