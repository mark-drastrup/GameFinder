<template>
  <section class="home">
    <sidebar />
    <home-main />
  </section>
</template>

<script>
import Sidebar from "@/components/home/Sidebar.vue";
import HomeMain from "@/components/home/Main.vue";
export default {
  name: "home",
  components: {
    Sidebar,
    HomeMain
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  align-items: stretch;
}
</style>
