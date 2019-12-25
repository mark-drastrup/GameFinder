<template>
  <div>
    <p>Game info</p>
    <p>{{game.name}}</p>
  </div>
</template>

<script>
export default {
  name: "GameInfo",
  props: {
    game: Object
  }
};
</script>

<style>
</style>