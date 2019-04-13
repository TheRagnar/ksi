<template>
	<div class="errors" v-if="getList.length > 0">
		<transition-group name="list" class="errors__scroll" tag="div">
			<Error 
				v-for="error in getList"
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
	created() {
	},
	computed: {
		getCount() {
			return this.$store.state.errors.count
		},
		getList() {
			return this.$store.state.errors.list
		}
	}
}
</script>

<style lang="scss">
	@import "~/assets/styles/components/errors/errors.scss";	
</style>

