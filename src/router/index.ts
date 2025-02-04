import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "../views/CardView.vue";
import CatalogView from "../views/CatalogView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
