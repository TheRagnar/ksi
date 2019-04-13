<template>
	<section class="news">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="news__inner" v-if="news !== null">
				<div class="news__title">{{ news.t_title }}</div>
			<div class="news__double">
				<div class="news__content">
					<div class="new-inner">
						<div class="new-inner__image">
							<img v-bind:src="news.thumbnail ? news.thumbnail : '/img/noimage.jpg'" alt="">
						</div>
						<div class="new-inner__double">
							<div class="new-inner__info">
								<div class="new-inner__text">{{ news.full_created_at}}</div>
								<div class="new-inner__box">
									<div class="new-inner__icon"><svg><use xlink:href="/sprite.svg#comments"></use></svg></div>
									{{ news.article_comments_count }}
								</div>
								<div class="new-inner__box">
									<div class="new-inner__icon"><svg><use xlink:href="/sprite.svg#views"></use></svg></div>
									{{ news.views_count }}
								</div>
							</div>
						</div>
						<div class="html new-inner__html" v-html="news.t_content"></div>
						<div class="new-inner__news" v-if="similar">
							<div class="new-inner__title">Похожие статьи</div>
							<div class="news__flex">
								<New v-for="sim in similar" v-bind:key="sim.id" v-bind:slug="sim.slug" v-bind:image="sim.thumbnail" v-bind:id="sim.id" v-bind:date="sim.small_created_at"  v-bind:name="sim.t_title" v-bind:comments="sim.article_comments_count" v-bind:views="sim.views_count"/>
							</div>
						</div>
						<div class="new-inner__comments" v-if="comments">
							<Comments v-bind:comments="comments" />
						</div>
					</div>
				</div>
				<div class="news__aside">
					<PopularArticle/>
					<div class="news__box">
						<SubscribeFrom/>
					</div>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
import Comments from '~/components/Comments';
import New from '~/components/New';
import SubscribeFrom from '~/components/SubscribeFrom';
import PopularArticle from '~/components/PopularArticle';
export default {
	components: {
		Breadcrumbs, New, SubscribeFrom, Comments, PopularArticle
	},
	head (){
		return {
			titleTemplate: `%s | ${this.news ? this.news.t_meta_title : ""}`,
			meta: [
				{ hid: 'keywords', name: 'keywords', content: this.news ? (this.news.t_meta_keywords ? this.new.t_meta_keywords : "") : "" },
				{ hid: 'description', name: 'description', content: this.news ? (this.news.t_meta_description ? this.new.t_meta_description : "") : "" }
			]
		}
	},
	data: function () {
		return {
			items: [{to: "/", text: "Главная"}, {to: "/news", text: "Новости"}],
			articlename: "Популярные статьи",
			news: null,
			similar: null,
			comments: null
		}
	},
	mounted: function() {
		this.$axios.$get(`${this.$store.state.lang.current}/articles/${this.$route.params.slug}`)
			.then(response => {
				this.news = response;
				this.items.push({to:`/news/${this.news.slug}`, text: this.news.t_title})
			})
			.catch(error => {
				this.$store.dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе новости: this.$axios.$get(`/article`)"}, {root:true})
			})
		this.$axios.$get(`${this.$store.state.lang.current}/articles/${this.$route.params.slug}/similar-articles`)
			.then(response => {
				this.similar = response.data;
			})
			.catch(error => {
				this.$store.dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе похожих статей"}, {root:true})
			})
		this.$axios.$get(`${this.$store.state.lang.current}/articles/${this.$route.params.slug}/article-comments`)
			.then(response => {
				this.comments = response.data;
			})
			.catch(error => {
				this.$store.dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе комментариев"}, {root:true})
			})
	}
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/news.scss";
	@import "~/assets/styles/pages/new-inner.scss";
</style>
