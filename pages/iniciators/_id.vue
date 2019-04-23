<template>
  <section class="iniciator">
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="iniciator__white">
        <div class="iniciator__info">
          <div class="iniciator__image">
            <img v-bind:src="iniciator.avatar ? iniciator.avatar : '/img/noimage.jpg'" alt>
          </div>
          <div class="iniciator__contacts">
            <div class="iniciator__row" v-if="iniciator.phone">
              <div class="iniciator__icon">
                <svg>
                  <use xlink:href="/sprite.svg#phone"></use>
                </svg>
              </div>
              <a
                v-bind:href="`tel:${iniciator.phone}`"
                class="iniciator__link"
              >{{ iniciator.phone }}</a>
            </div>
            <hr v-if="iniciator.phone">
            <div class="iniciator__row">
              <div class="iniciator__icon">
                <svg>
                  <use xlink:href="/sprite.svg#mail"></use>
                </svg>
              </div>
              <a
                v-bind:href="`mailto:${iniciator.email}`"
                class="iniciator__link"
              >{{ iniciator.email }}</a>
            </div>
          </div>
        </div>
        <div class="iniciator__content">
          <div class="iniciator__title">Инициатор:</div>
          <div class="iniciator__name">{{ iniciator.fullname }}</div>
          <div class="iniciator__obl">{{ iniciator.t_city_title }}</div>
          <div class="iniciator__bold">Описание</div>
          <div class="iniciator__text" v-html="iniciator.description"></div>
        </div>
      </div>
      <div class="iniciator__name">Организованные проекты</div>
      <div class="iniciator__tabs" v-if="projects">
        <div class="iniciator__tabnames">
          <div
            class="iniciator__tabname"
            v-for="(fil,index) in filters"
            v-bind:key="index"
            v-bind:class="{ active: fil==filter}"
            v-on:click="chageFilter(fil)"
          >{{ fil }}</div>
        </div>
        <div class="iniciator__items">
          <div
            class="projectz"
            v-for="project in projects"
            v-bind:key="project.id"
            v-show="filter === 'Все'  || filter === project.status"
          >
            <div class="projectz__status">{{ project.status }}</div>
            <router-link
              v-bind:to="`/projects/${project.id}`"
              class="projectz__name"
            >{{ project.name }}</router-link>
            <div class="projectz__position">
              <div class="projectz__icon">
                <svg>
                  <use xlink:href="/sprite.svg#map"></use>
                </svg>
              </div>
              <div class="projectz__text">{{ project.position }}</div>
            </div>
            <div class="projectz__price">
              <div class="projectz__text">Общий бюджет</div>
              <div class="projectz__totalprice">{{ project.price }}</div>
            </div>
          </div>
          <div class="projectz projectz--clear" v-if="!projectsHave">
            <div class="projectz__name">Нет проектов с заданным статусом</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
export default {
  components: {
    Breadcrumbs
  },
  data: function() {
    return {
      items: [
        { to: "/", text: "Главная" },
        { to: "/iniciator", text: "Инициаторы" }
      ],
      iniciator: {}
    };
  },
  created: function() {
    this.$axios
      .$get(
        `${this.$store.state.lang.current}/initiators/${this.$route.params.id}`
      )
      .then(response => {
        this.iniciator = response;
      })
      .catch(error => {
        this.$store.dispatch(
          "errors/add",
          {
            code: "Ошибка",
            show: true,
            message: "Ошибка при запросе инициатора: this.$axios.$get(`/iniciator`)"
          },
          { root: true }
        );
      });
  },
  methods: {
    chageFilter: function(filter) {
      this.filter = filter;
      if (
        this.projects.find(x => x.status === this.filter) !== undefined ||
        this.filter === "Все"
      ) {
        this.projectsHave = true;
      } else {
        this.projectsHave = false;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/pages/iniciator.scss";
</style>