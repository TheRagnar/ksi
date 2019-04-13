<template>
	<div class="select" v-bind:class="{ active: isActive }">
		<select>
			<option v-for="(variant, index) in variants" v-bind:key="index" :value="variant.locale">{{variant.title}}</option>
		</select>
		<div class="select__select" v-on:click="isActive=!isActive">
			<div class="select__current">{{variants[index].title}}</div>
			<div class="select__lists">
				<div class="select__item" v-for="(variant, index) in variants" v-bind:key="index" :value="variant.locale" v-on:click="click(index)">{{variant.title}}</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data: function () {
		return {
			index: 0,
			isActive: false
		}	
	},
	props: {
		variants: Array
	},
	created: function () {
		this.index = this.variants.findIndex((element) => element.locale === this.$store.state.lang.current);
	},
	methods: {
		click: function (index) {
			this.index = index;
			this.$store.dispatch('lang/changeCurrent', this.variants[index].locale)
		}
	}
}
</script>


<style lang="scss">
	@import "~/assets/styles/components/select.scss";	
</style>
