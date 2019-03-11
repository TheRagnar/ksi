<template>
	<section class="iniciator">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="iniciator__white">
				<div class="iniciatro__image">
					<img v-bind:src="iniciator.image ? iniciator.image : '/img/noimage.jpg'" alt="">
				</div>
				<div class="iniciator__content">
					<div class="iniciator__title">Инициатор:</div>
					<div class="iniciator__name">{{ iniciator.name }}}</div>
					<div class="iniciator__obl">{{ iniciator.city }}</div>
					<div class="iniciator__bold">Описание</div>
					<div class="iniciator__text" v-html="iniciator.content"></div>
				</div>
				<div class="iniciator__contacts">
					<div class="iniciator__row">
						<div class="iniciator__icon"><svg><use xlink:href="/sprite.svg#phone"></use></svg></div>
						<a v-bind:href="`tel:${iniciator.phone}`" class="iniciator__link">{{ iniciator.phone }}</a>
					</div>
					<div class="iniciator__row">
						<div class="iniciator__icon"><svg><use xlink:href="/sprite.svg#mail"></use></svg></div>
						<a v-bind:href="`mailto:${iniciator.phone}`" class="iniciator__link">{{ iniciator.phone }}</a>
					</div>
				</div>
			</div>
			<div class="iniciator__title">Организованные проекты</div>
			<div class="iniciator__tabs">
				<div class="iniciator__tabnames">
					<div class="iniciator__tabname" v-for="(fil,index) in filters" v-bind:key="index" v-bind:class="{ active: fil==filter}" v-bind:click="chageFilter(fil)">
						{{ fil }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
export default {
	components: {
		Breadcrumbs
	},
	data: function(){
		return {
			items: [{to: "/", text: "Главная"}, {to: "/iniciators", text: "Павлодарская область",}, {to:"/iniciatos/3", text: "Клуб добряков"}],
			iniciator: {
				name: "“Клуб добряков”",
				city: "Павлодарская область г. Павлодар",
				phone: "8 777 198 76 74",
				mail: "adminknsmodera@mail.ru",
				content: "Благотворитель Вильгельм Александр Филиппович построил  детский сад  на  50 мест  в  с.Львовка  Качирского  района сдать объект планируют в конце этого года. После того, как здание детского сада будет полностью готово, застройщик – глава сельскохозяйственного предприятия Александр Вильгельм – планирует передать его в коммунальную собственность. После того, как здание детского сада будет полностью готово, застройщик – глава сельскохозяйственного ",
				image: "http://ruh.kz/storage/20/20af92798b2e3352e40a1bae30d2118a.png",
				projects: [
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "Завершённые",
					},
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "Новые",
					},
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "Новые",
					},
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "Завершённые",
					},
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "Завершённые",
					},
					{
						name: "Строительство детского сада на 50 мест",
						city: "Павлодарская область, Качирский район, с. Львовка",
						price: "50 000 000 тг",
						status: "В процессе",
					}
				]
			},
			filters: ["Все", "Новые", "В процессе", "Завершенные"],
			filter: "Все"
		}
	},
	methods: {
		chageFilter: function(filter){
			console.log(1);
			this.filter = filter;
		}
	}
}
</script>
