<template>
	<div class="new">
		<router-link v-bind:to="`/news/${slug}`" class="new__image">
			<div class="new__date">
				{{ date }}
			</div>
			<img v-bind:src="image ? image : '/img/noimage.jpg'" alt="">
		</router-link>
		<div class="new__content">
			<router-link v-bind:to="`/news/${slug}`" class="new__name">{{ name }}</router-link>
			<div class="new__footer">
				<div class="new__box">
					<div class="new__icon"><svg><use xlink:href="/sprite.svg#comments"></use></svg></div>
					{{ comments }}
				</div>
				<div class="new__box">
					<div class="new__icon"><svg><use xlink:href="/sprite.svg#views"></use></svg></div>
					{{ views }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		id: Number,
		slug: String,
		image: String,
		date: String,
		name: String,
		comments: Number,
		views: Number
	},
}
</script>
<style lang="scss">
	@import "~/assets/styles/components/new.scss";
</style>
