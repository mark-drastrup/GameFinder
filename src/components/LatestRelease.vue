<template>
  <div class="game">
    <router-link :to="{ name: 'games', params: {id: game.id, game:game } }">
      <div class="game__imgwrapper">
        <img :src="game.background_image" :alt="game.name" class="game__img" />
      </div>
      <div class="game__caption">
        <p>{{game.name}}</p>
      </div>
    </router-link>
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
.game {
  border: 1px solid black;
  margin: 10px;
  width: 300px;
}

.game__imgwrapper {
  height: 170px;
  overflow: hidden;
}

.game__img {
  width: 300px;
  height: auto;
}

.game__caption {
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 15px;
}

a {
  text-decoration: none;
  color: black;
}
</style>