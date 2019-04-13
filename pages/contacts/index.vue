<template>
  <section class="contacts">
    <div class="container">
      <Breadcrumbs :items="items"/>
      <div class="contacts__flex">
        <div class="contacts__content">
          <div class="contacts__title">Контакты</div>
          <div class="html">
            <p>Это сео текст, здесь можно написать что это за проект и зачем он нужен.Благотворитель Вильгельм Александр Филиппович построил детский сад на 50 мест в с.Львовка Качирского района сдать объект планируют в конце этого года. После того, как здание детского сада будет полностью готово, застройщик – глава сельскохозяйственного предприятия Александр Вильгельм – планирует передать его в коммунальную собственность. После того, как здание детского сада будет полностью готово.</p>
          </div>
          <div class="contacts__boxs">
            <div class="contacts__box">
              <div class="contacts__name">Администратор сайта</div>
              <a href="tel:87771987674" class="contacts__row">
                <div class="contacts__circle">
                  <svg>
                    <use xlink:href="/sprite.svg#phone"></use>
                  </svg>
                </div>
                <div class="contacts__text">8 777 198 76 74</div>
              </a>
              <a href="mailto:adminknsmodera@mail.ru" class="contacts__row">
                <div class="contacts__circle">
                  <svg>
                    <use xlink:href="/sprite.svg#mail"></use>
                  </svg>
                </div>
                <div class="contacts__text">adminknsmodera@mail.ru</div>
              </a>
            </div>
            <div class="contacts__box">
              <div class="contacts__name">модератор сайта</div>
              <a href="tel:87771987674" class="contacts__row">
                <div class="contacts__circle">
                  <svg>
                    <use xlink:href="/sprite.svg#phone"></use>
                  </svg>
                </div>
                <div class="contacts__text">8 777 198 76 74</div>
              </a>
              <a href="mailto:adminknsmodera@mail.ru" class="contacts__row">
                <div class="contacts__circle">
                  <svg>
                    <use xlink:href="/sprite.svg#mail"></use>
                  </svg>
                </div>
                <div class="contacts__text">adminknsmodera@mail.ru</div>
              </a>
            </div>
          </div>
        </div>
        <div class="contacts__aside">
          <FormFeedback/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "~/components/Breadcrumbs";
import FormFeedback from "~/components/FormFeedback";
export default {
  components: {
    Breadcrumbs,
    FormFeedback
  },
  data: function() {
    return {
      items: [
        { to: "/", text: "Главная" },
        { to: "/contacts", text: "Контакты" }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import "~/assets/styles/pages/contacts.scss";
</style>
