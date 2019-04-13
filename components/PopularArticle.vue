<template>
	<div class="news__box">
		<div class="news__subtitle">{{ articlename }}</div>
		<div class="news__articles" v-if="articles">
			<Article v-for="article in articles" v-bind:key="article.id" v-bind:article="article"/>
		</div>
	</div>
</template>

<script>
import Article from '~/components/Article';
export default {
	components: {
		Article
	},
	data: function() {
		return {
			articlename: "Популярные статьи",
			articles: null
		}
	},
	mounted: function() {
		this.$axios.$get(`${this.$store.state.lang.current}/articles`, {params: { limit: 3, column: 'views_count', direction: 'desc' }})
			.then(response => {
				this.articles = response.data;
			})
			.catch(error => {
				this.$store.dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе популярных статей"}, {root:true})
			})
	}
}
</script>