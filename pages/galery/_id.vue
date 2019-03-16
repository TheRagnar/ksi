<template>
	<section class="gal">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="gal__flex">
				<div class="gal__images">
					<div class="gal__mainimage">
						<img v-bind:src="image ? image : images[0]" alt="">
					</div>
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(img, index) in images" v-bind:key="index" v-on:click="image = img">
								<img v-bind:src="img" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="gal__content">
					<div class="gal__name" v-html="name"></div>
					<div class="html" v-html="html"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import $ from 'jquery';
import Swiper from 'swiper';
import Breadcrumbs from '~/components/Breadcrumbs';

export default {
	components: {
		Breadcrumbs
	},
	data: function () {
		return {
			image: null,
			images: ["http://mockimage.markello.info/700/640/kazakh", "http://mockimage.markello.info/700/650/kazakh", "http://mockimage.markello.info/600/600/kazakh", "http://mockimage.markello.info/800/640/kazakh", "http://mockimage.markello.info/900/620/kazakh"],
			name: "В Казахстане увеличилось<br> количество предпринимателей",
			items: [{to: "/", text: "Главная"}, {to: "/galery", text: "Галерея выполненых проектов"}],
			html: "<p>г. Павлодар</p><p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. <br>С другой стороны новая модель организационной деятельности играет важную роль в формировании.</p><p>Разнообразный и богатый опыт реализация намеченных плановых заданий <b>требуют от нас анализа существенных</b> финансовых и административных условий. Повседневная практика показывает, развитие различных форм деятельности представляет собой интересный.</p><p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. </p> <p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. </p><p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. <br>С другой стороны новая модель организационной деятельности играет важную роль в формировании.</p><p>Разнообразный и богатый опыт реализация намеченных плановых заданий <b>требуют от нас анализа существенных</b> финансовых и административных условий. Повседневная практика показывает, развитие различных форм деятельности представляет собой интересный.</p><p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. </p> <p>С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Таким образом реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. </p>",
			galerries: [
				{
					id: 0,
					image: "http://baurzhan.kz/wp-content/uploads/2018/06/PMNL8854.jpg",
					name: "Навстречу мечте (2018)",
					city: "г. Алматы",
					year: 2018,
					comment: 0,
					raiting: 8,
					photos: ["http://baurzhan.kz/wp-content/uploads/2018/06/PMNL8854.jpg", "http://baurzhan.kz/wp-content/uploads/2018/06/PMNL8157.jpg", "http://baurzhan.kz/wp-content/uploads/2018/06/PMNL7981.jpg", "http://baurzhan.kz/wp-content/uploads/2018/06/PMNL7764.jpg", "http://baurzhan.kz/wp-content/uploads/2018/05/UmTS8mGmnoE.jpg", "http://baurzhan.kz/wp-content/uploads/2018/05/khou9Nndeco.jpg", "http://baurzhan.kz/wp-content/uploads/2018/05/EIE4Pz2uR3o.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL7198.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL7147.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL7051.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL6922.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL6903.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL6860.jpg", "http://baurzhan.kz/wp-content/uploads/2018/04/PMNL6326.jpg"],
					content: null
				},
				{
					id: 1,
					image: "http://zhakiya.kz/imagine/gallery_photo/IMG_3378.jpg",
					name: "Урок гигиены в детском доме &quot;Перзент&quot;",
					city: "г. Алматы",
					year: 2018,
					comment: 0,
					raiting: 8,
					photos: ["http://zhakiya.kz/imagine/gallery_photo/IMG_3378.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3378.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3391.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3397.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3839.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3874.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3419_1.jpg", "http://zhakiya.kz/imagine/gallery_photo/IMG_3426_1.jpg"],
					content: "В детском доме семейного типа &laquo;Перзент&raquo; проходит &laquo;Урок гигиены&raquo;"
				},
				{	
					id: 2,
					image: "http://vlige.kz/upload/images/65479_498572_04.JPG",
					name: "Универсиада",
					city: "г. Алматы",
					year: 2017,
					comment: 0,
					raiting: 10,
					photos: ["http://vlige.kz/upload/images/65479_498572_04.JPG", "http://vlige.kz/upload/images/76670_274777_04.JPG", "http://vlige.kz/upload/images/41022_309519_04.JPG", "http://vlige.kz/upload/images/54211_404991_04.JPG", "http://vlige.kz/upload/images/24188_648339_04.JPG", "http://vlige.kz/upload/images/35776_75901_04.JPG", "http://vlige.kz/upload/images/13491_130134_04.JPG", "http://vlige.kz/upload/images/43576_140688_04.jpg", "http://vlige.kz/upload/images/97464_222252_04.jpg"],
					content: "Универсиада"
				},
				{
					id: 3,
					image: "http://zhakiya.kz/imagine/gallery_photo/IMG_3378.jpg",
					name: "ПРЕМЬЕРА ФИЛЬМА И КНИГИ &quot;АУТИЗМ ПОБЕДИМ&quot;",
					city: "г. Алматы",
					year: 2015,
					comment: 0,
					raiting: 7,
					photos: ["http://detdom.kz/i_data/1430383487.jpg", "http://detdom.kz/i_data/1430383642.jpg", "http://detdom.kz/i_data/1430383824.jpg", "http://detdom.kz/i_data/1430383928.jpg", "http://detdom.kz/i_data/1430384040.jpg", "http://detdom.kz/i_data/1430384133.jpg", "http://detdom.kz/i_data/1430384248.jpg", "http://detdom.kz/i_data/1430384365.jpg"],
					content: "ПРЕМЬЕРА ФИЛЬМА И КНИГИ &quot;АУТИЗМ ПОБЕДИМ&quot;"
				}
			]
		}
	},
	created: function () {
		var id = this.$route.params.id;
		this.images = this.galerries[id].photos;
		this.name = this.galerries[id].name;
		this.items[this.items.length - 1].to = `/galery/${id}`;
		this.html = this.galerries[id].content;
	},
	mounted () {
		var mySwiper = new Swiper ('.gal .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 10
		})
	}
}
</script>

<style lang="scss">
	@import "swiper/dist/css/swiper.min.css";
	@import "~/assets/styles/pages/gal.scss";
</style>