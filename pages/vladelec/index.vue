<template>
  <section class="iniciators">
    <header class="header-content">
      <div class="container">
        <Breadcrumbs :items="items"/>
        <div class="header-content__title">{{ title }}</div>
        <div class="iniciators__filters">
          <div class="iniciators__filter">
            <div class="iniciators__filtername">{{filterRegion.title}}</div>
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
            ></multiselect>
          </div>
          <div class="iniciators__filter input">
            <div class="iniciators__filtername"></div>
            <input type="text" placeholder="Имя или название организации">
          </div>
          <div class="iniciators__filter button">
            <div class="iniciators__filtername"></div>
            <button class="btn btn--base">Показать</button>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="iniciators__flex">
        <div class="iniciators__box" v-for="ini in getData" v-bind:key="ini.id">
          <div class="iniciators__image">
            <img v-bind:src="ini.avatar ? ini.avatar : '/img/noimage.jpg'" alt>
          </div>
          <div class="iniciators__content">
            <div class="iniciators__name" v-html="ini.fullname"></div>
            <div class="iniciators__city">{{ ini.t_city_title }}</div>
            <div class="iniciators__phone" v-if="ini.phone">
              <div class="iniciators__icon">
                <svg>
                  <use xlink:href="/sprite.svg#phone"></use>
                </svg>
              </div>
              <a :href="`tel:${ini.phone}`" class="iniciators__c">{{ ini.phone }}</a>
            </div>
            <div class="iniciators__phone" v-if="ini.email">
              <div class="iniciators__icon">
                <svg>
                  <use xlink:href="/sprite.svg#mail"></use>
                </svg>
              </div>
              <a :href="`mailto:${ini.email}`" class="iniciators__c">{{ ini.email }}</a>
            </div>
          </div>
        </div>
      </div>
      <Pagination v-bind:total="getTotal" v-bind:offset="getOffset" v-bind:current="currentPage" v-bind:limit="getLimit" v-on:goToPage="goToPage"/>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import Multiselect from "vue-multiselect";
import Pagination from "~/components/Pagination";
export default {
  components: {
    Breadcrumbs,
    Multiselect,
    Pagination
  },
  data: function() {
    return {
      items: [
        { to: "/", text: "Главная" },
        { to: "/galery", text: "Владельцы ресурса" }
      ],
      title: "Владельцы ресурса",
      filterRegion: {
        title: "По региону:",
        placeholder: "Выберите регион",
        value: null,
      },
      iniciators: [],
      currentPage: null
    };
  },
  mounted() {
    this.currentPage = +(this.$route.query.page ? this.$route.query.page : 1);
    this.$store.dispatch("vladelec/chageOffset", this.getTotalOffset);
    this.$store.dispatch("vladelec/fetchVladelec");
  },
  computed: {
    getData() {
      return this.$store.state.vladelec.list.data;
    },
    getLimit() {
      return this.$store.state.vladelec.params.limit;
    },
    getOffset() {
      return this.$store.state.vladelec.params.offset;
    },
    getTotal() {
      return this.$store.state.vladelec.params.total;
    },
    getFetching() {
      return this.$store.state.vladelec.params.fetching;
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
      this.$store.dispatch("vladelec/chageOffset", this.getTotalOffset);
      this.$store.dispatch("vladelec/fetchVladelec");
    },
    changeFilter() {
      this.$store.dispatch("vladelec/changeFilter", this.filterRegion.value.id !== 0 ? this.filterRegion.value.id : null);
      this.currentPage = +(this.$route.query.page ? this.$route.query.page : 1);
      this.$store.dispatch("vladelec/chageOffset", this.getTotalOffset);
      this.$store.dispatch("vladelec/fetchVladelec");
    }
  }
};
</script>


<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import "~/assets/styles/pages/iniciators.scss";
</style>
