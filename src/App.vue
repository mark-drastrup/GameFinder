<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  align-items: stretch;
}
</style>
