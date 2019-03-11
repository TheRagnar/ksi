<template>
	<section class="iniciators">
		<header class="header-content">
			<div class="container">
				<Breadcrumbs :items="items"/>
				<div class="header-content__title">{{ title }}</div>
				<div class="iniciators__filters">
					<div class="iniciators__filter">
						<div class="iniciators__filtername">{{filter.filterName}}</div>
						<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.filterValue" :options="filter.filterItems" :placeholder="filter.filterPlaceholder" :searchable="false"></multiselect>
					</div>
					<div class="iniciators__filter input">
						<div class="iniciators__filtername"></div>
						<input type="text" placeholder="Имя или название организации">
					</div>
					<div class="iniciators__filter button">
						<div class="iniciators__filtername"></div>
						<button class="btn btn--base">Показать</button>
					</div>
				</div>
			</div>
		</header>
		<div class="container">
			<div class="iniciators__flex">
				<div class="iniciators__box" v-for="ini in iniciators" v-bind:key="ini.id">
					<div class="iniciators__image">
						<img v-bind:src="ini.image ? ini.image : '/img/noimage.jpg'" alt="">
					</div>
					<div class="iniciators__content">
						<router-link class="iniciators__name" to="/">{{ ini.name }}</router-link>
						<div class="iniciators__city">{{ ini.city }}</div>
						<div class="iniciators__phone">
							<div class="iniciators__icon">
								<svg><use xlink:href="/sprite.svg#phone"></use></svg>
							</div>
							<a :href="`tel:${ini.phone}`" class="iniciators__c">{{ ini.phone }}</a>
						</div>
						<div class="iniciators__phone">
							<div class="iniciators__icon">
								<svg><use xlink:href="/sprite.svg#mail"></use></svg>
							</div>
							<a :href="`mailto:${ini.email}`" class="iniciators__c">{{ ini.email }}</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
import Multiselect from 'vue-multiselect';
export default {
	components: {
		Breadcrumbs, Multiselect
	},
	data: function () {
		return {
			items: [{to: "/", text: "Главная"}, {to: "/galery", text: "Инициаторы"}],
			title: "Инициаторы",
			filter:  {
						filterValue: '',
						filterName: 'По региону:',
						filterPlaceholder: 'Выберите регион',
						filterItems: ['Акмолинская область', 'Актюбинская область', 'Алматинская область', 'Атырауская область', 'Восточно-Казахстанская область', 'Жамбылская область', 'Западно-Казахстанская область', 'Карагандинская область', 'Костанайская область', 'Кызылординская область', 'Мангистауская область', 'Павлодарская область', 'Северо-Казахстанская область', 'Туркестанская область']
					},
			iniciators: [
				{
					id: 0,
					image: "http://mockimage.markello.info/400/600",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/nature",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/mems",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/politika",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/avatars",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/forest",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/mountains",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/noimage",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				},
				{
					id: 0,
					image: "http://mockimage.markello.info/400/400/noimage",
					name: "Клуб добряков",
					city: "Павлодарская область г. Павлодар",
					phone: "8 800 555 35 35",
					email: "example@email.ru"
				}
			]
		}
	}
}
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/iniciators.scss";
</style>
