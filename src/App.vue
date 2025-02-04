<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default Vue.extend({
  name: "App",
  components: {
    HeaderComponent,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");
* {
  font-family: "Merriweather", sans-serif;
}

._container {
  max-width: 1216px;
  margin: 0 auto;

  @media screen and (max-width: 1232px) {
    padding: 0 16px;
  }
}
h1,
h2 {
  line-height: 150%;
}
h1 {
  font-size: 1.5rem;
  font-weight: 700;
}
h2 {
  font-size: 1.125rem;
  font-weight: 400;
}
.btn {
  min-width: 122px;
  width: 100%;
  border: none;
  background-color: #403432;
  color: #ffffff;
  padding: 14px 0;
  cursor: pointer;
  font-weight: 700;
  line-height: 150%;
  font-size: 0.875rem;
}
</style>
