<template>
  <section class="galery">
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="galery__title">{{title}}</div>
      <div class="galery__flex">
        <div class="galery__content">
          <div class="galery__filters">
            <div class="galery__filter">
              <div class="galery__filtername">{{ filterRegion.title }}</div>
              <multiselect
                selectLabel
                selectedLabel
                deselectLabel
                v-model="filterRegion.value"
                :options="getRegions"
                :placeholder="filterRegion.placeholder"
                :searchable="false"
                :custom-label="filterRegions"
                @input="changeFilter"
              >
              </multiselect>
            </div>
          </div>
          <div class="galery__items">
            <div class="galery__galery" v-for="galery in getData" v-bind:key="galery.id">
              <div class="galery__year">{{ galery.year }}</div>
              <!-- <div class="galery__raiting">{{ galery.raiting }}</div> -->
              <router-link :to="`/galery/${galery.id}`" class="galery__image">
                <img v-bind:src="galery.thumbnail ? galery.thumbnail : '/img/noimage.jpg'" alt>
              </router-link>
              <div class="galery__white">
                <router-link
                  class="galery__name"
                  v-bind:to="`/galery/${galery.id}`"
                  v-html="galery.t_title"
                ></router-link>
                <div class="galery__footer">
                  <div class="galery__city">{{ galery.t_city_title }}</div>
                  <!-- <div class="galery__comments">
                    <div class="galery__icon">
                      <svg>
                        <use xlink:href="/sprite.svg#comments"></use>
                      </svg>
                    </div>
                    <div class="galery__comment">{{ galery.comment }}</div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <Pagination v-bind:total="getTotal" v-bind:offset="getOffset" v-bind:current="currentPage" v-bind:limit="getLimit" v-on:goToPage="goToPage"/>
        </div>
        <div class="galery__aside">
          <SubscribeFrom/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import Multiselect from "vue-multiselect";
import Pagination from "~/components/Pagination";
import SubscribeFrom from "~/components/SubscribeFrom";
export default {
  components: {
    Breadcrumbs,
    Multiselect,
    SubscribeFrom,
    Pagination
  },
  data: function() {
    return {
      items: [
        { to: "/", text: "Главная" },
        { to: "/galery", text: "Галерея выполненых проектов" }
      ],
      title: "Галерея выполненых проектов",
      filterRegion: {
        title: "По региону:",
        placeholder: "Выберите регион",
        value: null,
      },
      currentPage: null
    };
  },
  mounted() {
    this.currentPage = +(this.$route.query.page ? this.$route.query.page : 1);
    this.$store.dispatch("galery/chageOffset", this.getTotalOffset);
    this.$store.dispatch("galery/fetchGalery");
  },
  computed: {
    getData() {
      return this.$store.state.galery.list.data;
    },
    getLimit() {
      return this.$store.state.galery.params.limit;
    },
    getOffset() {
      return this.$store.state.galery.params.offset;
    },
    getTotal() {
      return this.$store.state.galery.params.total;
    },
    getFetching() {
      return this.$store.state.galery.params.fetching;
    },
    getTotalOffset() {
      return this.currentPage === 1
        ? 0
        : (this.currentPage - 1) * this.getLimit;
    },
    getRegions() {
      return [{id: 0, sort_order: 0, t_title: "Все" }, ...this.$store.state.regions.list.data];
    },
  },
  methods: {
    filterRegions({ id, t_title }) {
        return `${t_title}`;
    },
    goToPage(page) {
      this.$router.push({ query: { ...this.$router.query, page: page } });
      this.currentPage = page;
      this.$store.dispatch("galery/chageOffset", this.getTotalOffset);
      this.$store.dispatch("galery/fetchGalery");
    },
    changeFilter() {
      this.$store.dispatch("galery/changeFilter", this.filterRegion.value.id !== 0 ? this.filterRegion.value.id : null);
      this.currentPage = +(this.$route.query.page ? this.$route.query.page : 1);
      this.$store.dispatch("galery/chageOffset", this.getTotalOffset);
      this.$store.dispatch("galery/fetchGalery");
    }
  }
};
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
  @import "~/assets/styles/pages/galery.scss";
</style>
