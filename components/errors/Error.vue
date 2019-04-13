<template>
	<div class="error" v-if="show">
		<div class="error__close" v-on:click="close()" ><svg><use xlink:href="/sprite.svg#close"></use></svg></div>
		<div class="error__title">{{code}}</div>
		<div class="error__message">{{message}}</div>
	</div>
</template>


<script>

export default {
	props: {
		id: {
			type: [Number, String]
		},
		show: {
			type: Boolean,
			default: false
		},
		code: {
			type: [Number, String],
			default: 404
		},
		message: {
			type: [Number, String],
			default: 'Ошибка'
		}
	},
	methods: {
		close: function(id) {
			this.$store.dispatch('errors/remove', this.id)
		}
	},
	created: function (){
		
	}
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/errors/error.scss";	
</style>