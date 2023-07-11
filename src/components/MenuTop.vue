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
  list-style: none;
  padding-left: 0;

    &__item {
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;  
      color: $black-1;
    }
    & .router-link-active {
      color: $purple;        
    }
}
</style>
