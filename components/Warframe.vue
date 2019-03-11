<template>
<div class="warframe" >
	<div class="container">
		<!-- <button v-on:click="add()">Добавить сраную модалку</button> -->
		<h2>Каждый может внести свой вклад в развитие региона</h2>
		<p>Значимость этих проблем настолько очевидна, что укрепление и развитие структуры влечет <br>за собой процесс внедрения и модернизации соответствующий условий активизации</p>
		<router-link to="/projects"><img src="/img/map.png" alt=""></router-link>
		
		<p>Сайт находится в разработке</p>
		<p> <a href="http://halyqbastama.kz/" target="_blank">Скачать приложение</a></p>
	</div>
</div>
</template>

<script>
export default {
	methods: {
		add(){
			// this.$store.dispatch('modules/errors/addError', {code: 404, message: 'lol kek pek 222'});
		}
	},
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/warframe.scss";	
	.warframe{
		padding-top: 50px;
		padding-bottom: 100px;
		img{
			margin-bottom: 40px;
		}
	}
	
</style>
