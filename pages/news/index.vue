<template>
	<section class="news">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="news__title">{{ title }}</div>
			<div class="news__double">
				<div class="news__content">
					<div class="news__flex">
						<New v-for="news_item in news" v-bind:key="news_item.id" v-bind:image="news_item.image" v-bind:day="news_item.day" v-bind:id="news_item.id" v-bind:mount="news_item.mount"  v-bind:name="news_item.name" v-bind:comments="news_item.comments" v-bind:views="news_item.views"/>
					</div>
				</div>
				<div class="news__aside">
					<div class="news__box">
						<div class="news__subtitle">{{ articlename }}</div>
						<div class="news__articles">
							<Article v-for="article in articles" v-bind:key="article.id"  v-bind:content="article.content" v-bind:mount="article.mount"  v-bind:name="article.name" v-bind:comments="article.comments" v-bind:views="article.views"/>
						</div>
					</div>
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
export default {
	components: {
		Breadcrumbs, New, Article, SubscribeFrom
	},
	data: function () {
		return {
			items: [{to: "/", text: "Главная"}, {to: "/news", text: "Новости"}],
			title: "Новости",
			articlename: "Популярные статьи",
			news: [
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане увеличилось количество предпринимател...",
					comments: 45,
					views: 34
				},
				{
					id: 1,
					image: "http://mockimage.markello.info/400/500/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане ожидается похолодание",
					comments: 5,
					views: 345
				},
				{
					id: 2,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "Рисковал политическим будущим. Назарбаев рассказ...",
					comments: 45,
					views: 34
				},
				{
					id: 3,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане увеличилось количество предпринимател...",
					comments: 45,
					views: 34
				},
				{
					id: 4,
					image: "http://mockimage.markello.info/400/500/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане ожидается похолодание",
					comments: 5,
					views: 345
				},
				{
					id: 5,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "Рисковал политическим будущим. Назарбаев рассказ...",
					comments: 45,
					views: 34
				},
				{
					id: 6,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане увеличилось количество предпринимател...",
					comments: 45,
					views: 34
				},
				{
					id: 7,
					image: "http://mockimage.markello.info/400/500/nature",
					day: "28",
					mount: "04",
					name: "В Казахстане ожидается похолодание",
					comments: 5,
					views: 345
				},
				{
					id: 8,
					image: "http://mockimage.markello.info/400/400/nature",
					day: "28",
					mount: "04",
					name: "Рисковал политическим будущим. Назарбаев рассказ...",
					comments: 45,
					views: 34
				},
			],
			articles: [
				{
					id: 0,
					name: "В Казахстане увеличилось количество предпринимател...",
					content: "Организация, предоставляет на запросы инициатора, каса...",
					comments: 45,
					views: 34
				},
				{
					id: 2,
					name: "В Казахстане увеличилось количество предпринимател...",
					content: "Организация, предоставляет на запросы инициатора, каса...",
					comments: 45,
					views: 34
				},
				{
					id: 3,
					name: "Государственный орган",
					content: "Организация, предоставляет на запросы инициатора, каса...",
					comments: 45,
					views: 34
				},
			]
		}
	}
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/news.scss";
</style>
