<template>
  <main class="home">
    <h1>Latest Releases</h1>
  </main>
</template>

<script>
export default {
  name: "home",
  computed: {
    latestReleases() {
      return this.$store.state.latestReleases;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 15px;
}
</style>
