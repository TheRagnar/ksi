<template>
	<div class="information" ref="container">
		<div class="container">
			<div class="information__title">Отрасли реализуемых проектов</div>
			<div class="information__flex">
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/1.png" alt=""></div>
					<div class="information__text">Строительство</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/2.png" alt=""></div>
					<div class="information__text">Здравоохранение</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/3.png" alt=""></div>
					<div class="information__text">Экология и окружающая среда</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/4.png" alt=""></div>
					<div class="information__text">Культура и спорт</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/5.png" alt=""></div>
					<div class="information__text">ЖКХ</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/6.png" alt=""></div>
					<div class="information__text">Туризм </div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/7.png" alt=""></div>
					<div class="information__text">Безопасность</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/8.png" alt=""></div>
					<div class="information__text">Общество </div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/9.png" alt=""></div>
					<div class="information__text">Образование</div>
				</div>
				<div class="information__box" ref="box">
					<div class="information__icon"><img src="/img/10.png" alt=""></div>
					<div class="information__text">ЧС</div>
				</div>
			</div>
			<div class="information__textbox">
				<p>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют определения и уточнения модели развития.</p>
			</div>
			<div class="information__title">Кем являетесь Вы?</div>
			<div class="information__who">
				<Who v-for="wh in who" v-bind:key="wh.id" v-bind:image="wh.image" v-bind:title="wh.title" v-bind:btn="wh.btn" v-bind:text="wh.text" />
			</div>
		</div>
	</div>
</template>

<script>
import Who from '~/components/Who';
export default {
	components:{
		Who
	},
	data: function(){
		return {
			who: [
				{
					id: 0,
					title: "Инициатор",
					text: "Лицо или организация, заявляющая о социальной проблеме/возможности <br>и предлагающее свое видение по ее решению/развитию.",
					btn: "Моя инициатива",
					image: "/img/iniciator.png"
				},
				{
					id: 1,
					title: "Владелец  ресурсов <span>(бизнесмены, меценаты, волонтеры и т.п.)</span>",
					text: "Лицо или организация готовая предоставить различные ресурсы: финансовые, человеческие, административные, материальные, интеллектуальные",
					btn: "мой вклад",
					image: "/img/vladelec.png"
				},
			]
		}
	},
	mounted(){
	},
	created(){
	}
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/information.scss";
</style>
