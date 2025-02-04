<template>
  <section class="catalog">
    <div class="catalog__body">
      <div class="catalog__content _container">
        <h1 class="catalog__title">Картины эпохи Возрождения</h1>
        <ul class="catalog__list list">
          <li class="list__item">
            <img class="list__img" src="../assets/1.png" alt="Картина" />
            <h2 class="list__title">«Рождение Венеры» Сандро Боттичелли</h2>
            <div class="list__block">
              <p class="list__price">1 000 000 $</p>
              <button class="list__btn btn">Купить</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "CatalogView",
});
</script>
<style lang="scss" scoped>
.catalog {
  &__body {
  }

  &__content {
  }
  &__title {
    margin: 0 0 38px 0;
  }

  &__list {
  }
}
.list {
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  &__item {
    max-width: 280px;
  }

  &__img {
  }

  &__title {
    margin: 20px 0 22px 24px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
  }

  &__price {
  }

  &__btn {
    flex: 0 0;
  }
}
</style>
