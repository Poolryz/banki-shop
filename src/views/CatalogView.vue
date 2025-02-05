<template>
  <section class="catalog">
    <div class="catalog__body">
      <div class="catalog__content _container">
        <h1 class="catalog__title">Картины эпохи Возрождения</h1>
        <ul class="catalog__list list">
          <ItemComponent
            v-for="item in products"
            :key="item.id"
            :title="item.title"
            :sold="item.sold"
            :sell="item.sell"
            :preventPrice="item.preventPrice"
            :price="item.price"
            :image="item.image"
            :inCard="item.inCard"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import ItemComponent from "../components/ItemComponent.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  name: "CatalogView",
  components: {
    ItemComponent,
  },
  computed: {
    ...mapGetters(["productsItem"]),
    products() {
      return this.productsItem;
    },
  },
});
</script>
<style lang="scss">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
</style>
