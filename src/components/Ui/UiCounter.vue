<template>
  <div class="ui-counter">
    <button 
      class="ui-counter__button"   
      :class="{ '_disabled': minValue === modelValue }"   
      @click="$emit('update:modelValue', modelValue > minValue ? modelValue - 1 : minValue)"
    >
      –  
    </button>
    <div class="ui-counter__info">
      {{ modelValue }}
    </div>
    <button     
      class="ui-counter__button"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      +      
    </button>
  </div>
</template>

<script>
  export default {
    name: 'UiCounter',
    props: {
      modelValue: {
        type: Number,
        default: 0
      },
      minValue: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.ui-counter {
  display: inline-flex;
  align-items: center;
  background-color: $grey-1;
  border-radius: 5px;
  padding: 8px 12px;
  line-height: 22px;
  color: $black-1;
  

  &__button {
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    cursor: pointer;
    color: $grey;
    transition: all ease-out .2s;
    border-radius: 5px;
    font-weight: 700;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: $purple;
      background-color: white;
    }
    &._disabled {
      cursor: default;
    }
  }

  &__info {
    margin: 0 8px;
    text-align: center;
    min-width: 22px;
  }
}

</style>
