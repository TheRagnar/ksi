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
						<router-link class="iniciators__name" v-bind:to="`/iniciators/${ini.id}`" v-html="ini.name"></router-link>
						<div class="iniciators__city">{{ ini.city }}</div>
						<div class="iniciators__phone" v-if="ini.phone">
							<div class="iniciators__icon">
								<svg><use xlink:href="/sprite.svg#phone"></use></svg>
							</div>
							<a :href="`tel:${ini.phone}`" class="iniciators__c">{{ ini.phone }}</a>
						</div>
						<div class="iniciators__phone" v-if="ini.email">
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
					phone: "8 707 128 97 75 ",
					email: "test@mail.ru",
					status: "В процессе",
					name: "Строительство детского сада на 80 мест",
					position: "Успенка",
					price: "10 000 000 тг"
				},
				{
					id: 1,
					image: "http://vlige.kz/upload/images/big/96678_732215_21.jpg",
					name: "Общественный фонд &laquo;Лига волонтеров&raquo;",
					city: "г. Алматы, Жарокова 289а",
					phone: "8 707 128 97 75",
					email: "volunteers.almaty@gmail.com",
					status: "Завершено",
					name: "Посадка деревьев",
					position: "Ботанический сад города Алматы",
					price: null
				},
				{
					id: 2,
					image: "http://volunteer.kz/wp-content/themes/volunteer/images/new-logo-main.png",
					name: "Координационный Центр Добровольцев &laquo;Команда SOS&raquo;",
					city: "г. Алматы",
					phone: "8 701 739 60 02",
					email: "komandasos@gmail.com",
					status: "В процессе",
					name: "Помощь приюту для бездомных животных &laquo;Белый Бим&raquo;",
					position: "пос. «Мынбаев»",
					price: null
				},
				{
					id: 3,
					image: "http://detdom.kz/images/logo.gif",
					name: "Добровольное общество &laquo;Милосердие&raquo;",
					city: "г. Алматы",
					phone: "8 7272 676 646",
					email: "info@detdom.kz",
					status: "В процессе",
					name: "Редкая болезнь у Кан Полины",
					position: "г. Тараз",
					price: "12 000 USD - 4 528 320 тг"
				},
				{
					id: 4,
					image: "http://zhakiya.kz/images/img-hands.png",
					name: "Благотворительный фонд &laquo;Жакия&raquo;",
					city: "г. Алматы",
					phone: "8 7273 555 111",
					email: "sabirova@zhakiya.kz",
					status: "Завершено",
					name: "Программа стоматологической помощи &quot;Подари улыбку&quot;",
					position: "г. Алматы",
					price: null
					},
				{
					id: 5,
					image: "http://baurzhan.kz/wp-content/uploads/2017/11/%D0%BB%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D0%BD%D0%B4%D0%B0-.png",
					name: "Благотворительный фонд &laquo;Бауыржан&raquo;",
					city: "г. Алматы",
					phone: "8 7273 151 511",
					email: "info@baurzhan.kz",
					status: "Запланировано",
					name: "АЛТЫН ЖҮРЕК",
					position: "г.Алматы, ул. Толе би, 12",
					price: null
				},
				{
					id: 6,
					image: "http://www.kotodog.kz/img/header-bg.png",
					name: "Фонд помощи бездомным животным &laquo;КотоПес&raquo;",
					city: "г. Алматы",
					phone: "8 707 124 88 04",
					email: null,
					status: "Завершено",
					name: "Весений драйленд &quot;Весенний Драйв 2018!!!&quot;",
					position: "г.Алматы",
					price: null
				},
				{
					id: 7,
					image: "http://mockimage.markello.info/400/400/kazakh",
					name: "Фонд Добрых Дел Алматы",
					city: "г. Алматы",
					phone: "8 701 822 92 22", 
					email: null,
					status: "Завершено",
					name: "ФОНД ДОБРЫХ ДЕЛ АЛМАТЫ",
					position: "г.Алматы",
					price: null		
				},
				{
					id: 8,
					image: "https://redcrescent.kz/wp-content/uploads/2017/11/3F9A9482-min.jpg",
					name: "Красный полумесяц Казахстана",
					city: "г. Алматы, ул. Кунаева, 86",
					phone: "8 7272 910 291",
					email: "info@redcrescent.kz"
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
