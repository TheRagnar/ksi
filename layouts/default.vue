<template>
  <div>
    <Errors/>
    <Header/>
    <nuxt/>
    <Footer/>
    <Copyr/>
  </div>
</template>

<script>
import Header from '~/components/Header';
import Errors from '~/components/errors/Errors';
import Footer from '~/components/Footer';
import Copyr from '~/components/Copyr';

export default {
  components: {
    Header,
    Errors,
    Footer,
    Copyr
  },
  beforeCreate() {
    this.$store.commit('lang/initLang');
	},
  created() {
    this.$store.dispatch('lang/fetchList');
    this.$store.dispatch('lang/fetchConstants');
    this.$store.dispatch('regions/fetchRegion');
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  @import "~/assets/styles/global.scss";
  @import "~/assets/styles/mixins.scss";
</style>

$('.html').find('a').