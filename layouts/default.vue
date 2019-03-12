<template>
  <div>
    <!-- <Errors/> -->
    <Header/>
    <nuxt/>
    <Footer/>
    <Copyr/>
  </div>
</template>

<script>
import Header from '~/components/Header';
// import Errors from '~/components/errors/Errors';
import Footer from '~/components/Footer';
import Copyr from '~/components/Copyr';

export default {
  components: {
    Header,
    // Errors,
    Footer,
    Copyr
  },
  created() {
  }
}
</script>

<style lang="scss">
  @import "~/assets/styles/global.scss";
  @import "~/assets/styles/mixins.scss";
</style>

