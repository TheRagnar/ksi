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
							<router-link class="galery__name" to="/galery/1">{{ galery.name }}</router-link>
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
					image: "http://mockimage.markello.info/400/600",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 1,
					image: "http://mockimage.markello.info/400/400/nature",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 2,
					image: "http://mockimage.markello.info/400/400/mems",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 3,
					image: "http://mockimage.markello.info/400/400/politika",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 4,
					image: "http://mockimage.markello.info/400/400/avatars",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 5,
					image: "http://mockimage.markello.info/400/400/forest",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 6,
					image: "http://mockimage.markello.info/400/400/mountains",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 7,
					image: "http://mockimage.markello.info/400/400/noimage",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
				},
				{
					id: 8,
					image: "http://mockimage.markello.info/400/400/noimage",
					name: "Строительство дома для многодетной семьи",
					city: "Павлодар",
					year: 2012,
					comment: 20,
					raiting: 3,
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
