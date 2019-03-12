<template>
	<header class="header">
		<div class="container">
			<a class="header-logo" href="/"><img src="/img/logo.png" alt=""></a>
			<nav class="header-nav">
				<ul class="nav-lists">
					<li class="nav-item"><nuxt-link to="/">Регионы</nuxt-link></li>
					<li class="nav-item"><nuxt-link to="/iniciators">Инициаторы</nuxt-link></li>
					<li class="nav-item"><nuxt-link to="/vlad">Владельцы ресурсов</nuxt-link></li>
					<li class="nav-item"><nuxt-link to="/news">новости</nuxt-link></li>
					<li class="nav-item"><nuxt-link to="/galery">Галерея</nuxt-link></li>
					<li class="nav-item"><nuxt-link to="/contacts">Контакты</nuxt-link></li>
				</ul>
			</nav>
			<div class="header__select">
				<div class="header-lang">
					<div class="nav-swich">
						<!-- <Select v-if="$store.getters['modules/languages/getList'].length > 0" v-bind:variants="$store.getters['modules/languages/getList']"></Select> -->
					</div>
				</div>
				<div class="header-login">
					<a href="http://ksi-admin.markello.info/kk/login" class="login-link">
						<div class="login-link-icon">
							<svg><use xlink:href="/sprite.svg#user"></use></svg>
						</div>
						Войти
					</a>
				</div>
			</div>
			<div class="header-hamburger">
				<div class="header-line"></div>
				<div class="header-line"></div>
				<div class="header-line"></div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
	// @import "~/assets/styles/components/mixins.scss";
	@import "~/assets/styles/components/header.scss";
</style>

<script>
import Select from '~/components/resourse/Select.vue';

export default {
	components: {
		Select
	},
	data: function () {
		return {
			
		}
	},
	created () {
		
	}
}
</script>