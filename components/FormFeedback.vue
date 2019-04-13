<template>
	<form class="form">
		<div class="form__title">Есть вопросы?</div>
		<div class="form__text">
			Оставьте свой номер, мы перезвоним вам в течениие <br>
			двух минут и ответим на все вопросы. <br>
			<b>Это бесплатно!</b>
		</div>
		<label class="form__input input">
			<div class="input__icon">
				<svg><use xlink:href="/sprite.svg#user"></use></svg>
			</div>
			<input type="text" placeholder="Ваше имя">
		</label>
		<label class="form__input input">
			<div class="input__icon">
				<svg><use xlink:href="/sprite.svg#phone"></use></svg>
			</div>
			<input type="text" placeholder="Ваш телефон">
		</label>
		<div class="form__input">
			<button type="submit" class="btn btn--base form__btn">Получить консультацию</button>
		</div>
		<div class="form__plaetext">
			Нажимая кнопку "Получить консультацию" вы соглашаетесь с <router-link to="/politic">“Политикой обработки конфиденциальных данных”</router-link>
		</div>
	</form>
</template>

<script>

export default {
	
}
</script>
<style lang="scss">
	@import "~/assets/styles/components/form.scss";
</style>
