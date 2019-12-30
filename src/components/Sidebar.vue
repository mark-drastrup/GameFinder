<template>
  <aside>
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Indie</li>
      <li>RPG</li>
      <li>Shooter</li>
      <li>Strategy</li>
      <li>Puzzle</li>
      <li>Arcade</li>
      <li>Platform</li>
      <li>Racing</li>
      <li>Sports</li>
      <li>Fighting</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
aside {
  border-right: 1px solid #ececec;

  ul {
    list-style: none;
    padding: 0;
    margin-block-start: 0;
  }

  ul li {
    border-bottom: 1px solid black;
    text-indent: 15px;
    padding: 10px 0;
  }

  ul li:hover {
    cursor: pointer;
    background-color: #6c7e93;
    color: #fff;
    font-weight: bold;
  }
}
</style>
