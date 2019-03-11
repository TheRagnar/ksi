<template>
	<div class="select" v-bind:class="{ active: isActive }">
		<select>
			<option v-for="(variant, index) in variants" v-bind:key="index" :value="variant.val">{{variant.name}}</option>
		</select>
		<div class="select__select" v-on:click="isActive=!isActive">
			<div class="select__current">{{variants[index].name}}</div>
			<div class="select__lists">
				<div class="select__item" v-for="(variant, index) in variants" v-bind:key="index" :value="variant.val" v-on:click="click(index)">{{variant.name}}</div>
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
	},
	methods: {
		click: function (index) {
			this.index = index;
		}
	}
}
</script>


<style lang="scss">
	@import "~/assets/styles/components/select.scss";	
</style>
