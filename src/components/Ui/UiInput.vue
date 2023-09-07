<template>
  <div class="ui-input">
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @focus="onFocus"
      class="ui-input__input"
    >
  </div>
</template>

<script>

  export default {
    name: 'UiInput',
    props: {
      modelValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    methods: {
      onInput(event) {
        this.$emit('update:modelValue', event.target.value)
      },
      onFocus() {
        this.$emit('focus')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.ui-input {
  width: 100%;
  &__input {
    border: none;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 25px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.20);
    color: white;
    line-height: normal;

    &:-moz-placeholder {
      color: white;
    }
    &::-webkit-input-placeholder {
      color: white;
    }
    &::-moz-placeholder {
      color: white;
    }  
  }  
}
</style>
