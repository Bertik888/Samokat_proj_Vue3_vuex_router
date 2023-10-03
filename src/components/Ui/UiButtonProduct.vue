<template>
  <div
    class="ui-btn-product"
    :class="{ '_active': active }"
  >
    <div 
      v-if="color"
      class="ui-btn-product__color"
      :class="{ 'mb-2': title || subTitle }"
      :style="{ backgroundColor: color }"
    >
    </div>
    <div 
      v-if="title"
      class="ui-btn-product__title"
      :class="{ 'mb-2': subTitle }"
    >
      {{ title }}
    </div>
    <div 
      v-if="subTitle"    
      class="ui-btn-product__subtitle"
    >
      {{ subTitle }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'UiButtonProduct',    
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
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

.ui-btn-product {
  border-radius: 10px;
  border: 2px solid $grey-2;
  color: $black-1;
  text-align: center;
  line-height: 1;
  padding: 28px;
  cursor: pointer;
  transition: border-color ease-in .2s;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  &._active {
    border-color: $purple;
  }

  &:hover:not(._active) {
    border-color: $purple;
  }

  &__title {
    color: $black-1;
    font-size: 18px;
  }

  &__subtitle {
    color: $grey;
    text-align: center;
    font-size: 14px;
  }

  &__color {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }  
}
</style>
