<template>
  <div class="register">
    <div class="container">
			<Breadcrumbs :items="items"/>
      <div class="register__title">Регистрация</div>
      <div class="register__flex">
        <div class="register__tab">
          <div class="register__tabnames">
            <div
              class="register__tabname"
              v-bind:class="{active: type==='vladelec'}"
              v-on:click="type='vladelec'"
            >Владелец ресурсов</div>
            <div
              class="register__tabname"
              v-bind:class="{active: type==='iniciator'}"
              v-on:click="type='iniciator'"
            >Инициатор</div>
          </div>
          <div class="register__tabs">
            <div class="register__tabinner" v-bind:class="{active: type==='vladelec'}">
              <form class="register__form">
                <label class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#phone"></use>
                    </svg>
                  </div>
                  <input type="text" placeholder="Ваш телефон">
                </label>
                <div class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#key"></use>
                    </svg>
                  </div>
                  <input type="password" placeholder="Придумайте пароль">
                </div>
                <div class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#key"></use>
                    </svg>
                  </div>
                  <input type="password" placeholder="Повторите пароль">
                </div>
                <div class="register__button">
                  <button class="btn btn--base" type="submit">зарегистрироваться</button>
                </div>
                <div class="register__text">
                  Нажимая кнопку "Зарегистрироваться" вы соглашаетесь
                  <br>с
                  <a href>“Политикой обработки конфиденциальных данных”</a>
                </div>
              </form>
            </div>
            <div class="register__tabinner" v-bind:class="{active: type==='iniciator'}">
              <form class="register__form">
                <label class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#phone"></use>
                    </svg>
                  </div>
                  <input type="text" placeholder="Ваш телефон">
                </label>
                <div class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#key"></use>
                    </svg>
                  </div>
                  <input type="password" placeholder="Придумайте пароль">
                </div>
                <div class="input register__input">
                  <div class="input__icon">
                    <svg>
                      <use xlink:href="/sprite.svg#key"></use>
                    </svg>
                  </div>
                  <input type="password" placeholder="Повторите пароль">
                </div>
                <div class="register__button">
                  <button class="btn btn--base" type="submit">зарегистрироваться</button>
                </div>
                <div class="register__text">
                  Нажимая кнопку "Зарегистрироваться" вы соглашаетесь
                  <br>с
                  <a href>“Политикой обработки конфиденциальных данных”</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="register__content">
          <div class="html">
            <h3>Находите и участвуйте в проектах, в которых Вы можете помочь</h3>
            <p>Роль Инициатора - в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу специалистов участие в формировании дальнейших направлений развития.</p>
            <p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs';
export default {
	components: {
		Breadcrumbs
	},
	data: function(){
		return {
			items: [{to: "/", text: "Главная"}, {to: "/register", text: "Регистрация"}],
			type: 'iniciator'
		}
	}
}
</script>

<style lang="scss">
@import "~/assets/styles/pages/register.scss";
</style>
