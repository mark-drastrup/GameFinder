<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped lang="scss">
header {
  background-color: #323a45;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>