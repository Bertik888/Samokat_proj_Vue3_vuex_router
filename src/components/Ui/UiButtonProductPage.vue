<template>
  <button
    class="ui-btn-product"
    :class="[`_${size}`, bgColor, textColor, { '_active': active }]"
    :disabled="disabled"
    @click="$emit('onClick')" 
  >
    {{ title }}
  </button>
</template>

<script>

  export default {
    name: 'UiButtonProductPage',    
    props: {
      title: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'bg-white'
      }
    }    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.ui-btn-product {
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  &._sm {
    padding: 10px 20px;
  }
  &._md {
    padding: 15px 25px;
  }
  &._active {
    background: transparent;
    border: 2px solid $purple !important;
    color: $purple !important;
    cursor: default;
  }

  &::before {                                  
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    opacity: 0;
    transition: opacity liner .2s;
    z-index: 1;
  }

  &:hover:not(._active, button[disabled])::before  {
    opacity: 0.2;
  }
}

button:disabled,
button[disabled] {
  background-color: $grey-2 !important;
  color: #FFFFFF !important;
  cursor: default;
}
</style>
