<template>
	<div class="subscribe">
		<div class="subscribe__title">Будьте в курсе всех событий</div>
		<div class="subscribe__input input">
			<div class="subscribe__icon"></div>
			<input type="email" placeholder="Ваш E-mail" name="email">
		</div>
		<div class="subscribe__input input">
			<button type="submit" class="subscribe__btn btn btn--base">Отправить</button>
		</div>
		<div class="subscribe__text">
			Нажимая кнопку "Отправить" вы соглашаетесь с <router-link to="/">“Политикой обработки конфиденциальных данных”</router-link>
		</div>
	</div>
</template>


<style lang="scss">
	@import "~/assets/styles/components/subscribe.scss";
</style>

