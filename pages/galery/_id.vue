<template>
  <section class="gal">
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="gal__flex" v-if="galery">
        <div class="gal__images">
          <div class="gal__mainimage">
            <img v-bind:src="image ? image : galery.photos[0].src" alt>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(img, index) in galery.photos"
                v-bind:key="index"
                v-on:click="image = img.src"
              >
                <img v-bind:src="img.src" alt>
              </div>
            </div>
          </div>
        </div>
        <div class="gal__content">
          <div class="gal__name" v-html="galery.t_title"></div>
          <div class="html" v-html="galery.t_content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import Swiper from "swiper";
import Breadcrumbs from "~/components/Breadcrumbs";

export default {
  components: {
    Breadcrumbs
  },
  head (){
		return {
			titleTemplate: `%s | ${this.galery ? this.galery.t_meta_title : ""}`,
			meta: [
				{ hid: 'keywords', name: 'keywords', content: this.galery ? (this.galery.t_meta_keywords ? this.galery.t_meta_keywords : "") : "" },
				{ hid: 'description', name: 'description', content: this.galery ? (this.galery.t_meta_description ? this.galery.t_meta_description : "") : "" }
			]
		}
	},
  data: function() {
    return {
      items: [
        { to: "/", text: "Главная" },
        { to: "/galery", text: "Галерея выполненных проектов" }
      ],
      image: null,
      galery: null
    };
  },
  mounted() {
    this.$axios
      .$get(
        `${this.$store.state.lang.current}/galleries/${this.$route.params.id}`
      )
      .then(response => {
        this.galery = response;
        this.items.push({
          to: `/galery/${this.$route.params.id}`,
          text: this.galery.t_title
        });
      })
      .then(() => {
        var mySwiper = new Swiper(".gal .swiper-container", {
          slidesPerView: 3,
          spaceBetween: 10,
        });
      })
      .catch(error => {
        this.$store.dispatch(
          "errors/add",
          {
            code: "Ошибка",
            show: true,
            message: "Ошибка при запросе галереи: this.$axios.$get(`/galery/${id}`)"
          },
          { root: true }
        );
      });
  }
};
</script>

<style lang="scss">
@import "swiper/dist/css/swiper.min.css";
@import "~/assets/styles/pages/gal.scss";
</style>