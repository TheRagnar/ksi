<template>
	<section class="regions">
		<HeaderContent v-bind:items="items" v-bind:title="title"/>
		<div class="container">
			<div class="regions__flex">
				<div class="regions__left">
					<div class="regions__filter filter">
						<div class="filter__row">
							<div class="filter__title">{{filter.regionTitle}}</div>
							<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.regionSelect" :options="filter.regionLists" :placeholder="filter.regionPlaceholder" :searchable="false"></multiselect>
						</div>
						<div class="filter__row" v-if="filter.regionSelect">
							<div class="filter__title">{{filter.cityTitle}}</div>
							<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.citySelect" :options="filter.cityLists" :placeholder="filter.cityPlaceholder" :searchable="false"></multiselect>
						</div>
						
						<hr>
						<div class="filter__row">
							<div class="filter__title">{{filter.statusTitle}}</div>
							<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.statusSelect" :options="filter.statusLists" :placeholder="filter.statusPlaceholder" :searchable="false"></multiselect>
						</div>
						<div class="filter__row">
							<div class="filter__title">{{filter.directionTitle}}</div>
							<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.directionSelect" :options="filter.directionLists" :placeholder="filter.directionPlaceholder" :searchable="false"></multiselect>
						</div>
						<div class="filter__row">
							<div class="filter__title">{{filter.stageTitle}}</div>
							<multiselect selectLabel="" selectedLabel="" deselectLabel="" v-model="filter.stageSelect" :options="filter.stageLists" :placeholder="filter.stagePlaceholder" :searchable="false"></multiselect>
						</div>
						<div class="filter__submit">
							<button class="btn btn--base">Применить</button>
							<button class="btn btn--clear">Сбросить</button>
						</div>
					</div>
				</div>
				<div class="regions__right">
					<div class="projects">
						<div class="project" v-for="(project, index) in projects" v-bind:key="index">
							<div class="project__image">
								<img :src="project.image ? project.image : '/img/noimage.jpg'" :alt="project.name">
								<div class="project__price">
									<div class="project__text">Общий бюджет:</div>
									<div class="project__totalPrice">{{ project.price }}</div>
								</div>
							</div>
							<div class="project__content">
								<router-link :to="`/projects/${project.id}`" class="project__name" v-html="project.name"></router-link>
								<div class="project__status" v-if="project.status">{{ project.status }}</div>
								<div class="project__rows">
									<div class="project__row" v-if="project.region || project.city">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#map"></use></svg></div>
										<div class="project__type">Расположение:</div>
										<div class="project__desc">{{ project.region }}, {{ project.city }}</div>
									</div>
									<div class="project__row" v-if="project.direction">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#direction"></use></svg></div>
										<div class="project__type">Направление:</div>
										<div class="project__desc">{{ project.direction }}</div>
									</div>
									<div class="project__row" v-if="project.time_start">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#calendar"></use></svg></div>
										<div class="project__type">Срок реализации:</div>
										<div class="project__desc">{{ project.time_start }} - {{ project.time_end }}</div>
									</div>
									<div class="project__row" v-if="project.assist_start">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#users"></use></svg></div>
										<div class="project__type">Кол-во участников в проекте:</div>
										<div class="project__desc">{{ project.assist_start }} - {{ project.assist_end }}</div>
									</div>
									<div class="project__row" v-if="project.user_start">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#users"></use></svg></div>
										<div class="project__type">Получатели:</div>
										<div class="project__desc">{{ project.user_start }} - {{ project.user_end }}</div>
									</div>
									<div class="project__row" v-if="project.protect">
										<div class="project__icon"><svg><use xlink:href="/sprite.svg#danger"></use></svg></div>
										<div class="project__type">Уровень безопасности:</div>
										<div class="project__desc">{{ project.protect }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import HeaderContent from '~/components/HeaderContent';
import Multiselect from 'vue-multiselect'

export default {
	components: {
		HeaderContent, Multiselect
	},
	data: function() {
		return {
			title: "Регионы",
			items: [{to: "/", text: "Главная"}, {to: "/projects", text: "Регионы"}],
			filter: {
				regionTitle: 'Область',
				regionPlaceholder: 'Выберите область',
				regionSelect: null,
				regionLists: ['Акмолинская область', 'Актюбинская область', 'Алматинская область', 'Атырауская область', 'Восточно-Казахстанская область', 'Жамбылская область', 'Западно-Казахстанская область', 'Карагандинская область', 'Костанайская область', 'Кызылординская область', 'Мангистауская область', 'Павлодарская область', 'Северо-Казахстанская область', 'Туркестанская область'],
				cityTitle: 'Населенный пункт',
				cityPlaceholder: 'Выберите город',
				citySelect: null,
				cityLists: ['Астана', 'Алма-ата', 'Чимкент', 'Кызылорда', 'Павлодар'],
				statusTitle: 'Статус',
				statusPlaceholder: 'Укажите статус',
				statusSelect: null,
				statusLists: ['Все', 'В процессе', 'Завершенные'],
				directionTitle: 'Направление',
				directionPlaceholder: 'Выберите направление',
				directionSelect: null,
				directionLists: ['IT', 'Helpdesk'],
				stageTitle: 'Проект на стадии',
				stagePlaceholder: 'Выберите стадию проекта',
				stageSelect: null,
				stageLists: ['Инициированные', 'Поиск волонтеров', 'Завершение', 'Проверка комиссией']
				
			},
			projects: [
				{
					id: 1,
					name: "Экологическая акция 'Туған мекен'",
					region: "Акмолинская область",
					city: "Астана",
					price: "Без фенансирования",
					direction: "Охрана окружающей среды",
					image: "http://ruh.kz/storage/3c/3c304d26a1e2ddc627702441d21ea6fb.png",
					status: null,
					time_start: null,
					time_end: "Декабрь 2022",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: " Руководитель / инициатор Шалалимов Шасалим",
					adres: "Город Астана, поселки Косшы и Коянды (город Астана) аул Косшы",
					content: "Провести экологическую акцию на территории города Астаны и в пригородной зоне ежеквартально на безвозмездной основе. Экологическая акция «Туған мекен» на территории Астаны и в пригородной зоне проводится на системной основе Альянсом автоклубов Астаны. Цели акции - очистка территории от бытового и производственного мусора, формирование экологического мышления у молодежи, пропаганда бережного отношения к природе. В данной акции принимают участие более 300 членов автоклуба и их семей, которые занимаются не только проведением субботников, но и благоустройством территории (установлено 3 беседки, 5 информационных баннеров, выпущено в Вячеславское водохранилище 9 тысяч мальков). В 2017 году было вывезено 50 тонн мусора. Данное мероприятие проводится без финансирования."
				},
				{
					id: 2,
					name: "Акция «Қайырымдылық. Доброта: «1000 и 1 спасибо»! Поддержка социально уязвимых граждан.",
					region: "Акмолинская область",
					city: "Астана",
					price: "100 000 тг",
					direction: "Поддержка социально уязвимых слоев населения, помощь детям-сиротам, из неполных многодетных семей",
					image: "http://ruh.kz/storage/56/56228809122873ee176ccbf0e3f1f75e.jpeg",
					status: null,
					time_start: "Декабрь 2017",
					time_end: "по настоящее время",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "город Астана, ул. Коктал, 18 (город Астана) улица Коктал, 18",
					content: "В столице открылся отдел одежды с символичным названием «Қайырымдылық. Доброта», где нет никаких ценников. Инициатором социального проекта выступил директор ТОО «Астана-Қамқор» Тимур Уразаков, который открыл первый бутик с бесплатной одеждой для малоимущих людей. Любой желающий может принести в специальный бутик одежду, обувь, игрушки и книги.С момента открытия (январь т.г.) порядка более 300 граждан (семей) смогли через социальный бутик 'Кайырымдылық. Доброта' передать более 500 гражданам (семьям) необходимые им б/у одежды книги, школьные принадлежности, обувь и бытовую технику.Единственное условие от организаторов благотворительного проекта - все вещи должны быть чистыми и поглаженными.Все, кто захочет поделиться вещами, могут приносить их в бутик «Қайырымдылық. Доброта» в хорошем состоянии в любой день, кроме воскресенья по адресу: ул. Коктал, 18, универсальный рынок автозапчастей «Көктал», здание СТО."
				},
				{
					id: 3,
					name: "Социальная акция по предоставлению продуктов питания на бесплатной основе нуждающимся",
					region: "Акмолинская область",
					city: "Астана",
					price: "1 000 000 тг",
					direction: "Поддержка социально уязвимых слоев населения, помощь детям-сиротам, из неполных многодетных семей",
					image: "http://ruh.kz/storage/20/20af92798b2e3352e40a1bae30d2118a.png",
					status: null,
					time_start: "Декабрь 2017",
					time_end: "по настоящее время",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: "Директор ТОО 'Бахус-Астана' Ким Алмаз Феликсович, Директор ТОО 'Коммунальный рынок Шапағат' Есболганов Мухтар Кенеханович",
					adres: "ул. Есенберлина, 2; пр. Женис, 55; ул. Богенбая батыра 69 (город Астана) улица Илияса Есенберлина, 2А",
					content: "Поддержка социально уязвимых слоев населения, помощь детям-сиротам, из неполных многодетных семей по предоставлению продуктов питания на бесплатной основе нуждающимся, малоимущим семьям в крупных сетях, рынках, пред"
				},
				{
					id: 4,
					name: "Строительство &quot;Триатлон Парк Астана&quot;",
					region: "Акмолинская область",
					city: "Астана",
					price: "Без финансирования",
					direction: "Иные инфраструктурные, социальные проекты",
					image: "http://ruh.kz/storage/b4/b4533869c7fa1e8b44a1a4795bc0789f.png",
					status: "Завершен",
					time_start: null,
					time_end: "Январь 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: "Руководитель проекта - Айдын Рахимбаев",
					adres: "Город Астана, район Алматы (город Астана), Астана Триатлон парк",
					content: "Провести экологическую акцию на территории города Астаны и в пригородной зоне ежеквартально на безвозмездной основе. Экологическая акция &quot;Туған мекен&quot; на территории Астаны и в пригородной зоне проводится на системной основе Альянсом автоклубов Астаны. Цели акции - очистка территории от бытового и производственного мусора, формирование экологического мышления у молодежи, пропаганда бережного отношения к природе. В данной акции принимают участие более 300 членов автоклуба и их семей, которые занимаются не только проведением субботников, но и благоустройством территории (установлено 3 беседки, 5 информационных баннеров, выпущено в Вячеславское водохранилище 9 тысяч мальков). В 2017 году было вывезено 50 тонн мусора. Данное мероприятие проводится без финансирования."
				},
				{
					id: 5,
					name: "Акция &quot;Ардагерлерді ардақтайық&quot; по уборке дворов и квартир пожилых людей.",
					region: "Акмолинская область",
					city: "Астана",
					price: "Без финансирования",
					direction: "Поддержка социально уязвимых слоев населения, помощь детям-сиротам, из неполных многодетных семей",
					image: "http://ruh.kz/storage/2d/2d4dd39bd057ff4191896f525847ee46.png",
					status: "Реализуется",
					time_start: null,
					time_end: "Декабрь 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: "Руководитель акции - Оралов Асхат Раздыкович",
					adres: "город Астана, ул. Медеу, № 14, 25, 25/1, 26, 26а, 45, 48, 62 (город Астана) улица Медеу, 12",
					content: "Целью данного акции является укрепление в обществе чувства солидарности, патриотизма, традиций и уважения к старшему поколению через заботу о ветеранах, тружениках тыла, одиноких пожилых людях, а также проведение работы по выявлению и приему на социальное обслуживание данного контингента, утративших способность к самообслуживанию и нуждающихся по состоянию здоровья в социальном обслуживании. <br>Особого внимания требует также категория одиноких пожилых людей, большинство из которых нуждается не только в уходе, лечении и улучшении жизненных условий, но и в простом человеческом внимании.<br>Уборка снега в 45 дворах и домах пожилых людей и ветеранов, вывоз 3 тонн снега с участием более 700 человек. Уборка 15 домов и квартир пожилых людей и ветеранов более 200 волонтеров.  Посещение дома престарелых 2 раза. Участники акции представители Молодежное крыло &quot;Жас Отан&quot; партии &quot;Нур Отан&quot;, УВМП, ОФ &quot;Қолғанат&quot;. Руководитель акции - Оралов Асхат Раздыкович."
				},
				{
					id: 6,
					name: "Строительство трех детских садиков",
					region: "Акмолинская область",
					city: "Астана",
					price: "2 700 000 000 тенге",
					direction: "Поддержка в сфере образования и науки",
					image: "http://ruh.kz/storage/50/50011213382ad511030ed24e34bd3ccf.png",
					status: "Реализуется",
					time_start: null,
					time_end: "Январь 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "Город Астана ул. Е 320, 321, 347, 348 (&quot;Самрук Энерго&quot;), Ул. Каркабат № 45 (АО &quot;НАК &quot;Казатомпром&quot;), Ул. 203а, 202 Мирзояна пересичения Байтурсынова (АО &quot;KEGOK&quot;) (город Астана) улица Амман, 7",
					content: "Строительство детских садиков начато согласно меморандуму между акиматом города и АО &quot;НАК &quot;Казатомпром&quot;, а также АО &quot;Самрук Энерго&quot; и АО &quot;KEGOС&quot;.  Строительство осуществляются за счет средств акционерных обществ, с последующей передачей в коммунальную собственность города. Для строительства детского сада АО &quot;НАК &quot;Казатомпром&quot; выделил 832 млн. тенге (с последующим безвозмездной передачей государству) срок реализации 2015-2017, для строительства второго десткого садика АО &quot;Самрук Энерго&quot; выделил 1,2 млрд. тенге (с последующим безвозмездной передачей государству) срок реализации 2015-2018. Директор управления закупом и запасами Маширов Ерик Канышбекович. Для строительства третьего десткого садика  АО &quot;KEGOС&quot; выделил 675 млн.тенге (с последующим безвозмездной передачей государству) срок реализации 2015-2018."
				},
				{
					id: 7,
					name: "Строительство и содержание лыжно-роллерной трассы",
					region: "ВКО",
					city: "п. Первомайский",
					price: "1 700 000 тенге",
					direction: "Спорт и пропаганда ЗОЖ",
					image: "http://ruh.kz/storage/56/56d8e610254bea123ea66caf7efc0454.jpg",
					status: "Завершен",
					time_start: null,
					time_end: "Сентябрь 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "Восточно-Казахстанская область, Шемонаихинский район, п. Первомайский, ул. Ленина (Восточно-Казахстанская область) поселок Первомайский",
					content: "С целью создания условий для занятий лыжероллерным спортом директор ТОО &quot;Востоксельхозпродукт&quot; Глушков Сергей Алексеевич реализовал социальный проект &quot;Строительство роллерной трассы&quot; на сумму 10 млн. тенге.<br>Роллерная трасса предназначена не только для тренировок воспитанников &quot;Школы зимних видов спорта&quot;, которые занимаются лыжными гонками, но и для любителей, для ветеранов спорта, молодежи поселка, для активного отдыха жителей. Протяженность твердого покрытия трассы составляет 1,0 км.<br>Вблизи стартовой площадки располагается административное здание с комнатой для судей, раздевалками и помещением для спортивного инвентаря. Проведен текущий ремонт спортивного зала. Имеется большой стадион.<br>Вдоль роллерного трека будет установлено освещение – заниматься можно будет даже в вечернее время."
				},
				{
					id: 8,
					name: "Строительство парка &quot;Нұрлы Жол&quot;",
					region: "ВКО",
					city: "г. Усть-Каменогорск",
					price: "846 000 000 тенге",
					direction: "Иные инфраструктурные, социальные проекты",
					image: "http://ruh.kz/storage/b4/b4533869c7fa1e8b44a1a4795bc0789f.png",
					status: "Завершен",
					time_start: null,
					time_end: "Декабрь 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "ВКО, г. Усть-Каменогорск, пр. Сатпаева, 55 а (Восточно-Казахстанская область)",
					content: "В областном центре в июле 2017 года открыт современный парк отдыха  &quot;Нұрлы жол&quot;. Строительство осуществлялось на средства крупных предприятий области - ТОО &quot;Казцинк&quot;, АО &quot;Полиметалл&quot;, Группа KAZ Minerals. Общая сумма инвестиций 846 млн. тенге.<br>Парк &quot;Нурлы  жол&quot; спроектирован с учетом современных тенденций в ландшафтной архитектуре. Ориентация основных коммуникаций парка устроена вокруг зеленых зон и полностью учитывает все потребности отдыхающих. Периметр территории обрамляет декоративное и прозрачное ограждение для придания защищенности и спокойствия.<br>Вертикальная планировка учитывает потребности малоподвижных граждан, обеспечена &quot;безбарьерная среда&quot;.<br>Современная стилистика парка направлена на использование натуральных и экологичных материалов, таких как гранит, дерево и естественно озелененный грунт.<br>Специальным способом высажены 500 деревьев.<br>На создание монумента &quot;Нурлы жол&quot;, который является украшением нового городского парка, автора архитектора Сарсена Сиитова вдохновила национальная идея &quot;Мәңгілік Ел&quot;.<br>Все элементы монумента олицетворяют собой объединение, сплочение и согласие казахстанского народа. Это стеллы цвета государственного флага высотой 22 метра, шанырак и парящий орел из сусального золота. <br>Две стеллы монумента &quot;Нурлы жол&quot; бирюзового цвета символизируют соприкосновение двух континентов Европы и Азии.<br>Ярким завершением композиции является орел, который в миропонимании казахов занимает особое место, как символ свободы, силы духа казахстанцев, стремления к цели, полёт в будущее."
				},
				{
					id: 9,
					name: "&quot;Өндірісі өрге басқан ауыл Ноғайбай&quot;",
					region: "Жамбылская область",
					city: "село Ногайбай",
					price: "Без финансирования",
					direction: "Иные инфраструктурные, социальные проекты",
					image: null,
					status: "Инициирован",
					time_start: null,
					time_end: "Декабрь 2018",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "Жамбылская область, Кордайский район (Жамбылская область)",
					content: "Еще до запуска ГМК на развитие региона компания планирует текущии ремонт дороги  ул. Малдыбай и Сарыбастау ул. Подгорная,освещение улицы Подгорная селе Сарыбастау, обучение 6 детей района по получению высшего оброзования по металургическим специальностям за счет компаний. Запуск ГМК позволит повысить доходы жителей района и уровень жизни."
				},
				{
					id: 10,
					name: "Спортивная эстафета среди детей с ограниченными возможностями &quot;Победим Вместе&quot;",
					region: "Жамбылская область",
					city: "г. Тараз",
					price: "Без финансирования",
					direction: "Поддержка социально уязвимых слоев населения, помощь детям-сиротам, из неполных многодетных семей",
					image: null,
					status: "Завершен",
					time_start: null,
					time_end: "Июль 2017",
					assist_start: null,
					assist_end: null,
					user_start: null,
					user_end: null,
					protect: null,
					director: null,
					adres: "Жамбылская область, город Тараз (Жамбылская область)",
					content: "Интеграция детей с ограниченными возможностями в жизнь общества путем вовлечения их в спортивные мероприятия. Совершенствовать двигательные умения и навыки, прыгучесть, выносливость. Способствовать развитию положительных эмоций, чувства взаимопомощи, дружбы, сопереживания.Развитие ловкости движений, умения координировать действия с действиями партнеров, сплотить детей. Воспитание любви к Родине , чувства товарищества и взаимопомощи."
				}
			]
		}
	}
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
	@import "~/assets/styles/pages/projects.scss";
</style>
