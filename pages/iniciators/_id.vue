<template>
	<section class="iniciator">
		<div class="container">
			<Breadcrumbs :items="items"/>
			<div class="iniciator__white">
				<div class="iniciator__info">
					<div class="iniciator__image">
						<img v-bind:src="iniciator.image ? iniciator.image : '/img/noimage.jpg'" alt="">
					</div>
					<div class="iniciator__contacts">
						<div class="iniciator__row">
							<div class="iniciator__icon"><svg><use xlink:href="/sprite.svg#phone"></use></svg></div>
							<a v-bind:href="`tel:${iniciator.phone}`" class="iniciator__link">{{ iniciator.phone }}</a>
						</div>
						<hr>
						<div class="iniciator__row">
							<div class="iniciator__icon"><svg><use xlink:href="/sprite.svg#mail"></use></svg></div>
							<a v-bind:href="`mailto:${iniciator.phone}`" class="iniciator__link">{{ iniciator.phone }}</a>
						</div>
					</div>
				</div>
				<div class="iniciator__content">
					<div class="iniciator__title">Инициатор:</div>
					<div class="iniciator__name">{{ iniciator.name }}</div>
					<div class="iniciator__obl">{{ iniciator.city }}</div>
					<div class="iniciator__bold">Описание</div>
					<div class="iniciator__text" v-html="iniciator.content"></div>
				</div>
				
			</div>
			<div class="iniciator__name">Организованные проекты</div>
			<div class="iniciator__tabs" v-if="projects">
				<div class="iniciator__tabnames">
					<div class="iniciator__tabname" v-for="(fil,index) in filters" v-bind:key="index" v-bind:class="{ active: fil==filter}" v-on:click="chageFilter(fil)">
						{{ fil }}
					</div>
				</div>
				<div class="iniciator__items">
					<div class="projectz" v-for="project in projects" v-bind:key="project.id" v-show="filter === 'Все'  || filter === project.status">
						<div class="projectz__status">{{ project.status }}</div>
						<router-link v-bind:to="`/projects/${project.id}`" class="projectz__name">{{ project.name }}</router-link>
						<div class="projectz__position">
							<div class="projectz__icon"><svg><use xlink:href="/sprite.svg#map"></use></svg></div>
							<div class="projectz__text">{{ project.position }}</div>
						</div>
						<div class="projectz__price">
							<div class="projectz__text">Общий бюджет</div>
							<div class="projectz__totalprice">{{ project.price }}</div>
						</div>
					</div>
					<div class="projectz projectz--clear" v-if="!projectsHave">
						<div class="projectz__name">Нет проектов с заданным статусом</div>
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
			],
			filters: ["Все", "Новый", "В процессе", "Завершенные"],
			filter: "Все",
			projects: [{
				id: 0,
				status: "Новый",
				name: "Строительство детского сада на 50 мест",
				position: "Павлодарская область, Качирский район, с. Львовка",
				price: "50 000 000 тг"
			},
			{
				id: 1,
				status: "В процессе",
				name: "Строительство детского сада на 3050 мест",
				position: "Успенка",
				price: "10 000 000 тг"
			}],
			projectsHave: true
		}
	},
	created: function () {
		this.projects.length > 0 ? this.projectsHave = true : this.projectsHave = false;
		this.iniciator = this.iniciators[this.$route.params.id];
	},
	methods: {
		chageFilter: function(filter){
			this.filter = filter;
			if(this.projects.find(x => x.status === this.filter) !== undefined || this.filter === 'Все'){
				this.projectsHave = true
			} else {
				this.projectsHave = false
			}
		}
	}
}
</script>
<style lang="scss">
	@import "~/assets/styles/pages/iniciator.scss";
</style>