<template>
  <div class="pagination" v-if="total > 0">
    <div class="pagination__btn" v-if="current !== 1" @click="goTo(current-1)">Назад</div>
    <div class="pagination__items">
      <div class="pagination__item" v-for="(item, index) in getPages" v-bind:key="index">
        <div
          v-if="index === 0 || index+1 === getPages || (index >= current - 3 && index <= current + 3) "
          class="pagination__link"
          v-bind:class="{ last : index+1 === getPages && current < getPages - 2, first : index ===0 && current > 3, active : index+1===current}"
          @click="goTo(index+1)"
        >{{index+1}}</div>
      </div>
    </div>
    <div class="pagination__btn" @click="goTo(current+1)" v-if="current !== getPages">Вперед</div>
  </div>
</template>
<script>
export default {
  props: {
    total: Number,
    offset: Number,
    current: Number,
    limit: Number
  },
  computed: {
    getPages() {
      return Math.ceil(this.total / this.limit);
    }
  },
  mounted() {
  },
  methods: {
    goTo(page, event) {
      window.scrollTo(0,0)
      this.$emit("goToPage", page);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/components/pagination.scss";
</style>
