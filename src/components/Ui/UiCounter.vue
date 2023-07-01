<template>
  <div class="ui-counter">
    <button 
      class="ui-counter__button"      
      @click="$emit('update:modelValue', modelValue > minValue ? modelValue - 1 : minValue)"
    >
      - 
    </button>
      {{ modelValue }}
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: $grey-1;
  border-radius: 5px;
  padding: 14px 17px;
  color: $black-1;

  &__button {
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    cursor: pointer;
    color: $grey;

    &:hover {
      color: $purple;
    }
  }
}

</style>
