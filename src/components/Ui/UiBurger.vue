<template>
    <div 
      :class="{ '_active': isOpen }"
      :style="style"
      class="ui-burger"
    >
    </div>
</template>

<script>

  export default {
    name: 'UiBurger',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#282739'
      },
      size: {
        type: Number,
        default: 20
      }
    },
    computed: {
      style() {
        return {
          color: this.color,
          width: `${this.size}px`,
          height: `${this.size - (this.size / 100 * 15)}px`
        }
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.ui-burger {
  cursor: pointer;
  position: relative;
  border-top: solid 2px;
  border-bottom: solid 2px;
  font-size: 0;
  transition: all ease-in-out .3s;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;    
    position: absolute;
    top: 50%;
    left: 50%;    
    background: currentColor;    
    transform: translate(-50%, -50%);
    transition: transform ease-in-out .3s;
  }

  &._active {
    border-color: transparent;
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
