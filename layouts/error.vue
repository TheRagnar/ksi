<template>
	<section class="page404">
		<div class="container">
			<div class="page404__flex">
				<div class="page404__left">
					<div class="page404__image"><img src="/img/404.png" alt=""></div>
				</div>
				<div class="page404__right">
					<div class="page404__form">
						<div class="page404__title">Данной страницы не существует</div>
						<div class="page404__text">Попробуйте ввести название еще раз или исправьте ошибку</div>
						<a href="" class="btn btn--two">Заявить о проблеме</a>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Warframe from '~/components/Warframe.vue'

export default {
	components: {
		AppLogo,
		Warframe
	}
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/page404.scss";
</style>

