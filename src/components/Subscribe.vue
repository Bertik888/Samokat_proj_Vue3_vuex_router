<template>
  <div class="subscribe">
    <div class="container">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-6">
          <h1 class="subscribe__text mb-0">
            Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
          </h1>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-between flex-column flex-lg-row">
          <ui-input
            @focus="test"
            v-model="inputValue"
            placeholder="Введите ваш email"
          />
          <ui-button
            title="Подписаться"
            bg-color="bg-white"
            size="md"
            class="ms-lg-2 mt-2 mt-lg-0"
            @click="$emit('onClickSubscribe')"
          />        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'
import UiInput from '@/components/Ui/UiInput.vue'

  export default {
    name: 'Subscribe',
    components: {
      UiButton,
      UiInput
    },
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      test() {
        console.log('я в фокусе')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.subscribe {
  background-color: $purple;
  padding: 24px;
  
  &__text {    
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
}
</style>
