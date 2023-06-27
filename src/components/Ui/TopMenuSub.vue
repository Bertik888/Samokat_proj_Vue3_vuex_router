<template>
  <ul class="top-menu__sub">
    <li><a href="#">Документы</a></li>
    <li>
      <a href="#">Информация</a>
      <i class="bi bi-chevron-left"></i> 
      <top-menu-sub />
    </li>
    <li><a href="#">О нас</a></li>
    <li><a href="#">Мы находимся</a></li>

  </ul>
</template>

<script>
import TopMenuSub from './TopMenuSub.vue' 

  export default {
    name: 'TopMenuSub',
    components: {
      TopMenuSub
    }
  }
</script>

<style lang="scss" scoped>

</style>