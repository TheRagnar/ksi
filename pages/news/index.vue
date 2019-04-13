<template>
	<section class="news">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="news__title">{{ title }}</div>
			<div class="news__double">
				<div class="news__content">
					<div class="news__flex" v-if="getData">
						<New v-for="news_item in getData" v-bind:key="news_item.id" v-bind:slug="news_item.slug" v-bind:image="news_item.thumbnail" v-bind:id="news_item.id" v-bind:date="news_item.small_created_at"  v-bind:name="news_item.t_title" v-bind:comments="news_item.article_comments_count" v-bind:views="news_item.views_count"/>
					</div>
					<Pagination v-bind:total="getTotal" v-bind:offset="getOffset" v-bind:current="currentPage" v-bind:limit="getLimit" v-on:goToPage="goToPage"/>
				</div>
				<div class="news__aside">
					<PopularArticle/>
					<div class="news__box">
						<SubscribeFrom/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
import New from '~/components/New';
import Article from '~/components/Article';
import SubscribeFrom from '~/components/SubscribeFrom';
import Pagination from '~/components/Pagination';
import PopularArticle from '~/components/PopularArticle';

export default {
	components: {
		Breadcrumbs, New, Article, SubscribeFrom, Pagination, PopularArticle
	},
	data: function () {
		return {
			items: [{to: "/", text: "Главная"}, {to: "/news", text: "Новости"}],
			title: "Новости",
			articlename: "Популярные статьи",
			currentPage: null,
		}
	},
	mounted() {
		this.currentPage = +(this.$route.query.page ? this.$route.query.page : 1);
		this.$store.dispatch('articles/chageOffset', this.getTotalOffset);
		this.$store.dispatch('articles/fetchArticles');
	},
	computed: {
		getData() {
			return this.$store.state.articles.list.data;
		},
		getLimit() {
			return this.$store.state.articles.params.limit;
		},
		getOffset() {
			return this.$store.state.articles.params.offset;
		},
		getTotal() {
			return this.$store.state.articles.params.total;
		},
		getFetching() {
			return this.$store.state.articles.params.fetching;
		},
		getTotalOffset() {
			return this.currentPage === 1 ? 0 : (this.currentPage - 1)*this.getLimit;
		}
	},
	methods: {
		goToPage(page) {
			this.$router.push({ query: {...this.$router.query, page: page}})
			this.currentPage = page;
			this.$store.dispatch('articles/chageOffset', this.getTotalOffset);
			this.$store.dispatch('articles/fetchArticles');
		}
	}
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/news.scss";
</style>
