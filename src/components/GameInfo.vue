<template>
  <div>
    <p>Game info</p>
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

<style>
</style>