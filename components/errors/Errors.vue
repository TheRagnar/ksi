<template>
	<div class="errors" v-if="this.$store.getters['modules/errors/getCount']">
		<transition-group name="list" class="errors__scroll" tag="div">
			<Error 
				v-for="error in this.$store.getters['modules/errors/getList']"
					:id="error.id"
					:key="error.id"
					:code="error.code"
					:show="error.show"
					:message="error.message"
			/>
		</transition-group>
	</div>
</template>

<script>
import Error from '~/components/errors/Error'
export default {
	components: {
		Error
	},
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/errors/errors.scss";	
</style>

