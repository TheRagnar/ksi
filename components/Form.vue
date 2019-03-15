<template>
	<form class="form">
		<div class="form__title">Будьте в курсе всех событий</div>
		<div class="form__input input">
			<label class="input__icon" for="email">
				<svg><use xlink:href="/sprite.svg#mail"></use></svg>
			</label>
			<input type="email" placeholder="Ваш E-mail" id="email">
		</div>
		<div class="form__input">
			<button type="submit" class="btn btn--base form__btn">Отправить</button>
		</div>
		<div class="form__plaetext">
			Нажимая кнопку "Отправить" вы соглашаетесь с <router-link to="/politic">“Политикой обработки конфиденциальных данных”</router-link>
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
