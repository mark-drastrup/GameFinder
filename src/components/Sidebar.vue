<template>
  <aside>
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Indie</li>
      <li>RPG <i class="fas fa-dragon"></i></li>
      <!-- <li>Shooter</li> -->
      <li>Strategy <i class="fas fa-chess-knight"></i></li>
      <li>Puzzle <i class="fas fa-puzzle-piece"></i></li>
      <li>Arcade <i class="fas fa-rocket"></i></li>
      <li>Platform <i class="fa fa-running"></i></li>
      <li>Racing <i class="fas fa-car"></i></li>
      <li>Sports <i class="fas fa-futbol"></i></li>
      <li>Fighting <i class="far fa-hand-rock"></i></li>
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
