<template>
	<div class="article">
		<router-link v-bind:to="`/news/${article.slug}`" class="article__name">{{ article.t_title }}</router-link>
		<div class="article__content" v-html="article.t_content"></div>
		<div class="article__footer">
			<div class="article__box">
				<div class="article__icon"><svg><use xlink:href="/sprite.svg#comments"></use></svg></div>
				{{ article.article_comments_count }}
			</div>
			<div class="article__box">
				<div class="article__icon"><svg><use xlink:href="/sprite.svg#views"></use></svg></div>
				{{ article.views_count }}
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		article: Object,
	},
}
</script>
<style lang="scss">
	@import "~/assets/styles/components/article.scss";
</style>
