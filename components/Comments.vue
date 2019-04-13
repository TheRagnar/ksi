<template>
  <div class="comments">
    <div class="comments__title">Комментарии</div>
    <div class="comments__box">
      <form class="comments__form">
        <div class="comments__text input">
          <textarea placeholder="Напишите ваш отзыв"></textarea>
        </div>
        <div class="comments__btn">
          <button type="submit" class="btn btn--base">Отправить</button>
        </div>
      </form>
      <div class="comments__inside">
        <div class="comments__lists" v-if="comments.length > 0">
          <div
            class="comments__comment comment"
            v-for="comment in comments"
            v-bind:key="comment.id"
          >
            <div class="comment__image">
              <img
                v-bind:src="comment.user_avatar ? comment.user_avatar : '/img/noimage.jpg'"
                v-bind:alt="comment.user_name"
              >
            </div>
            <div class="comment__content">
              <div class="comment__header">
                <div class="comment__name">{{ comment.user_name }}</div>
                <div class="comment__date">{{ comment.formatted_created_at }}</div>
              </div>
              <div class="comment__html html" v-html="comment.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/components/comments.scss";
</style>
