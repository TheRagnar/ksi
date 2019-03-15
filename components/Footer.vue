<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__logo">
				<div class="footer__img">
					<img src="/img/logo.png" alt="">
				</div>
				<a href="" class="footer__oferta">Публичная оферта</a>
			</div>
			<div class="footer__control">
				<div class="footer__menu">
					<nuxt-link class="footer__link" to="/projects">Регионы</nuxt-link>
					<nuxt-link class="footer__link" to="/iniciators">Инициаторы</nuxt-link>
					<nuxt-link class="footer__link" to="/vladelec">Владельцы ресурсов</nuxt-link>
					<nuxt-link class="footer__link" to="/news">новости</nuxt-link>
					<nuxt-link class="footer__link" to="/galery">Галерея</nuxt-link>
					<nuxt-link class="footer__link" to="/contacts">Контакты</nuxt-link>
				</div>
				<div class="footer__dop">
					<div class="footer__links">
						<div class="footer__upper">заказчики: </div>
						<div class="footer__row">МОР РК - <a href=" https://primeminister.kz" target="_blank" class="footer__oferta"> https://primeminister.kz</a></div>
						<div class="footer__row">НАО ЦПГИ - <a href="http://cisc.kz/ru/cisc/"  target="_blank" class="footer__oferta">http://cisc.kz/ru/cisc/</a></div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>


<style lang="scss">
	@import "~/assets/styles/components/footer.scss";
</style>