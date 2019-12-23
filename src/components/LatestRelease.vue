<template>
  <div class="game">
    <img :src="game.background_image" :alt="game.name" class="game__img" />
    <p>{{game.name}}</p>
  </div>
</template>

<script>
export default {
  name: "LatestRelease",
  props: {
    game: Object
  }
};
</script>

<style lang="scss" scoped>
.game__img {
  width: 300px;
  height: auto;
}
</style>