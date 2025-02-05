<template>
  <li :class="!sold ? 'list__item' : 'list__item list__item-sold'">
    <img class="list__img" :src="image" alt="Картина" />
    <h2 class="list__title">{{ title }}</h2>
    <div class="list__block">
      <div v-if="!sold" class="list__block-price">
        <p v-if="sell" class="list__old-price">{{ preventPrice }} $</p>
        <p class="list__price">{{ price }} $</p>
      </div>
      <button v-if="inCard" class="list__btn btn">
        <img src="../../public/icon/feather_check.svg" alt="" /> В корзине
      </button>
      <p v-else-if="sold" class="list__p">Продана на аукционе</p>
      <button v-else class="list__btn btn btn-card">Купить</button>
    </div>
  </li>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ItemComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    preventPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sell: {
      type: Boolean,
      required: true,
    },
    inCard: {
      type: Boolean,
      required: true,
    },
    sold: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.list {
  &__item {
    max-width: 280px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &-sold {
      opacity: 0.5;
    }
  }

  &__img {
  }

  &__title {
    margin: 20px 0 22px 24px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
    flex-grow: 1;
  }
  &__block-price {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &__old-price {
    text-decoration: line-through;
    color: gray;
    font-weight: 300;
    font-size: 0.875rem;
    margin: 0 0 0 0;
  }
  &__price {
    line-height: 150%;
    margin: 0 0 -0.75rem 0;
  }

  &__btn {
    flex: 0 0;
  }
}
</style>
