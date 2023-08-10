<template>
  <nav class="menu-top-mobile"
    :class="{ '_open': isOpen }"
  >
    <router-link  
      v-for="(item, idx) in items"       
      :key="idx"
      :to="item.route"            
      class="menu-top-mobile__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'MenuTopMobile',
    props: {
      items: {
        type: Array,
        default: () => []
      },
      isOpen: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.menu-top-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $grey-1;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 100vh;
  transition: all linear .2s;

  &._open {
    top: 72px;
    bottom: 0;    
  }

  &__item {
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;  
    color: $black-1;
    transition: color ease-out .2s;
    padding: 15px 0;

    &.router-link-active, 
    &:hover {
      color: $purple;        
    }
  }    
}
</style>
