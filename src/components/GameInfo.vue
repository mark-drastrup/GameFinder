<template>
  <div class="game">
    <div class="game__herowrapper">
      <img :src="selectedGame.background_image" :alt="game.name" />
    </div>
    <p>{{game.name}}</p>
    <p>{{selectedGame.description_raw}}</p>
  </div>
</template>

<script>
export default {
  name: "GameInfo",
  props: {
    game: Object
  },
  created() {
    this.getSelectedGame();
  },
  methods: {
    getSelectedGame() {
      this.$store.dispatch("getSelectedGame", this.game.id);
    }
  },
  computed: {
    selectedGame() {
      return this.$store.state.selectedGame;
    }
  }
};
</script>

<style lang="scss" scoped>
.game__herowrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
}
</style>