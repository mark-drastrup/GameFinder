<template>
  <main class="home">
    <h1>Latest Releases</h1>
    <div class="home__releases">
      <latest-release v-for="game in latestReleases" :key="game.id" :game="game" />
    </div>
  </main>
</template>

<script>
import latestRelease from "@/components/LatestRelease.vue";
export default {
  name: "home",
  components: {
    latestRelease
  },
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

.home__releases {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
