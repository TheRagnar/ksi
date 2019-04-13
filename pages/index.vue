<template>
  <section class="land">
    <First/>
    <Information/>
		<Kto/>
		<Mainnews/>
  </section>
</template>

<script>
import TweenMax from 'gsap';
import First from '~/components/front-page/First';
import Information from '~/components/front-page/Information';
import Kto from '~/components/front-page/Kto';
import Mainnews from '~/components/front-page/Mainnews';
export default {
  components: {
    First, Information, Kto, Mainnews
  },
  mounted() {
    TweenMax.set('.information__box',{
			scaleX: .1,
			scaleY: .1,
			opacity: 0,
		})
		const scene = this.$scrollmagic.scene({
			triggerElement: '.information'
		})
		this.$scrollmagic.addScene(
			scene
				.setTween(
					TweenMax.staggerTo('.information__box', .5,{
						opacity: 1,
						scaleX: 1,
						scaleY: 1,
						ease: Back.easeOut.config(1.7)
					}, .1)
				)
				.addIndicators()
		)
  },
}
</script>
<style lang="scss">
  @import "~/assets/styles/pages/land.scss";
</style>


