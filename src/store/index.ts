import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catalog: {
      products: [
        {
          id: 1,
          title: "«Рождение Венеры» Сандро Боттичелли",
          sold: false,
          sell: true,
          preventPrice: 2000000,
          price: 1000000,
          image: "../assets/1.png",
          inCard: false,
        },
        {
          id: 2,
          title: "«Тайная вечеря» Леонардо да Винчи",
          sold: false,
          sell: false,
          preventPrice: 0,
          price: 3000000,
          image: "../assets/2.png",
          inCard: false,
        },
        {
          id: 3,
          title: "«Сотворение Адама» Микеланджело",
          sold: false,
          sell: true,
          preventPrice: 6000000,
          price: 5000000,
          image: "../assets/3.png",
          inCard: true,
        },
        {
          id: 4,
          title: "«Урок анатомии»  Рембрандт",
          sold: true,
          sell: true,
          preventPrice: 8000000,
          price: 7000000,
          image: "../assets/4.png",
          inCard: false,
        },
      ],
    },
  },
  getters: {
    productsItem: (state) => state.catalog.products,
  },
  mutations: {},
  actions: {},
  modules: {},
});
