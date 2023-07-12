<template>
  <nav class="menu-top">
    <router-link  
      v-for="(item, idx) in items"       
      :key="idx"
      :to="item.route"            
      class="menu-top__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'MenuTop',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.menu-top {
  display: flex;
  justify-content: space-between;

  &__item {
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;  
    color: $black-1;
    transition: color ease-out .2s;

    &.router-link-active, 
    &:hover {
      color: $purple;        
    }
  }    
}
</style>
