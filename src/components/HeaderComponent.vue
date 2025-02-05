<template>
  <header class="header">
    <div class="header__body">
      <div class="header__content _container">
        <nav class="header__nav nav">
          <router-link class="nav__item" to="/catalog">Каталог</router-link>
          <router-link class="nav__item" to="/404">Доставка</router-link>
          <router-link class="nav__item" to="/404">Оплата</router-link>
          <router-link class="nav__item" to="/404">Контакты</router-link>
          <router-link class="nav__item" to="/404">О компании</router-link>
        </nav>
        <div class="header__right-block">
          <input
            placeholder="Поиск по названию картины"
            class="header__input"
            type="text"
          />
          <button class="header__btn btn">Найти</button>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HeaderComponent",
});
</script>
<style lang="scss">
.header {
  margin: 0 0 48px 0;
  &__body {
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #e1e1e1;
      position: absolute;
      bottom: 0;
    }
  }
  &__content {
    min-height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    margin: 0 0 0 96px;
  }
  &__right-block {
    display: flex;
  }
  &__input {
    border: solid 1px #e1e1e1;
    border-radius: none;
    margin: 0 -1px 0 0;
    padding: 14px 0 14px 16px;
    width: 100%;
    min-width: 294px;
    &:placeholder {
      color: #9f9f9f;
    }

    &:focus {
      outline: none;
    }
  }
  &__btn {
  }
}
.nav {
  &__item {
    font-weight: 400;
    line-height: 150%;
    font-size: 0.875rem;
    padding: 5px;

    text-decoration: none;
    color: #343030;
    transition: all 0.5s ease;

    &:hover {
      color: #131111;
      box-shadow: 0 2px 0 0 #131111;
    }

    &:not(:last-child) {
      margin-right: 48px;
    }
  }
}
</style>
