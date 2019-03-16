<template>
	<section class="galery">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="galery__title">{{title}}</div>
			<div class="galery__flex">
				<div class="galery__content">
					<div class="galery__filters">
					<div class="galery__filter" v-for="(fil,index) in filter" v-bind:key="index">
						<div class="galery__filtername">{{ fil.filterName }}</div>
						<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="fil.filterValue" :options="fil.filterItems" :placeholder="fil.filterPlaceholder" :searchable="false"></multiselect>
					</div>
				</div>
				<div class="galery__items">
					<div class="galery__galery" v-for="galery in galerries" v-bind:key="galery.id">
						<div class="galery__year">{{ galery.year }}</div>
						<div class="galery__raiting">{{ galery.raiting }}</div>
						<router-link to="/galery/1" class="galery__image">
							<img v-bind:src="galery.image ? galery.image : '/img/noimage.jpg'" alt="">
						</router-link>
						<div class="galery__white">
							<router-link class="galery__name" v-bind:to="`/galery/${galery.id}`" v-html="galery.name"></router-link>
							<div class="galery__footer">
								<div class="galery__city">{{ galery.city }}</div>
								<div class="galery__comments">
									<div class="galery__icon"><svg><use xlink:href="/sprite.svg#comments"></use></svg></div>
									<div class="galery__comment">{{ galery.comment }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<div class="galery__aside">
					<SubscribeFrom/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
import Multiselect from 'vue-multiselect';
import SubscribeFrom from '~/components/SubscribeFrom';
export default {
	components: {
		Breadcrumbs, Multiselect, SubscribeFrom
	},
	data: function () {
		return {
			items: [{to: "/", text: "Главная"}, {to: "/galery", text: "Галерея выполненых проектов"}],
			title: "Галерея выполненых проектов",
			filter: [
				{
					filterValue: '',
					filterName: 'По региону:',
					filterPlaceholder: 'Выберите регион',
					filterItems: ['Акмолинская область', 'Актюбинская область', 'Алматинская область', 'Атырауская область', 'Восточно-Казахстанская область', 'Жамбылская область', 'Западно-Казахстанская область', 'Карагандинская область', 'Костанайская область', 'Кызылординская область', 'Мангистауская область', 'Павлодарская область', 'Северо-Казахстанская область', 'Туркестанская область']
				},
				{
					filterValue: '',
					filterName: 'Статус проекта:',
					filterPlaceholder: 'Выберите статус',
					filterItems: ['Завершен', 'Начат', 'В производстве']
				},
				{
					filterValue: '',
					filterName: 'Сортировка',
					filterPlaceholder: 'По рейтингу',
					filterItems: ['По возростанию рейтинга', 'По убыванию рейтинга']
				}
			],
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
	}
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/galery.scss";
</style>
