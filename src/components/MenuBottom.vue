<template>
  <nav class="menu-bottom">
    <router-link  
      v-for="(item, idx) in items"  
      :key="idx"
      :to="item.route" 
      class="menu-top__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
  
  <hr class="line">
</template>

<script>
  export default {
    name: 'MenuBottom',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.menu-bottom {
  display: flex;
  // justify-content: space-between;
  justify-content: space-around;
  

  &__item {
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;  
    color: $black-1;
    transition: color ease-out .2s;
    padding: 10px 0;

    &.router-link-active, 
    &:hover {
      color: $purple;
    }
  }    

  .router-link-active {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: $purple;
      left: 0;
      bottom: 0;
      transform: scale(0);
      transition: .2s;
    }
    &:hover:before {
      transform: scale(1);
    }
  }
}
</style>


<!-- &::before {
  content: '';
  bottom: 0;
  left: 0;
  position: absolute;
  width: 0;
  height: 2px;
  background-color: $purple;
  transition: .2s;
} -->