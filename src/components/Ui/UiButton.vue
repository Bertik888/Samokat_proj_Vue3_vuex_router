<template>
  <button
    class="ui-btn"
    :class="[`_${size}`, bgColor, textColor, { '_active': active }]"
    :disabled="disabled"
    @click="!active && $emit('onClick')" 
  >
    {{ title }}
  </button>
</template>

<script>

  export default {
    name: 'UiButton',    
    props: {
      title: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        validator: (value) => ['sm', 'md', ''].includes(value),
        default: 'sm'
      },
      bgColor: {
        type: String,
        default: ''
      },
      textColor: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    }    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.ui-btn {
  position: relative;
  // width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  border-radius: 5px;
  color: #FFFFFF;

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
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    opacity: 0;
    transition: opacity liner .2s;
    z-index: 1;
  }

  &:hover {
    opacity: 0.2;
  }
}

button:disabled,                          // для разных браузеров full -width сделать класс
button[disabled] {
  background-color: $grey-2 !important;
  color: #FFFFFF !important;
}
</style>
