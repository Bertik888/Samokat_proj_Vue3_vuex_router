<template>
  <div class="ui-banner-test">
    <div class="ui-banner-test__wrapper">
      <div class="row g-5">
        <div class="col-12 col-md-6">
          <div class="ui-banner-test__image">
            <img :src="image" alt="image">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="text-title mb-3">Запишитесь на бесплатный тест-драйв Kugoo Kirin M4 в Москве</div>
          <div class="text-title-2 mb-5">
            Оставьте свой номер, менеджер свяжется с вами в течение 5 минут, чтобы уточнить дату и время
          </div>
          <div class="row mb-5">
            <div class="col-6">
              <ui-input
                v-model="inputValue"
                placeholder="+7 (___) __ - __ - __"
                bg-color="bg-white"
                text-color="color-grey"
              />
            </div>
            <div class="col-6">
              <ui-button
                size="md"
                title="Оставить заявку"
                bg-color="bg-purple"
                text-color="color-white"
                class="text-nowrap w-100"
                @click="$emit('onClikBannerTest')"
              /> 
            </div>   
          </div>
          <div class="d-flex align-items-center">
            <label for="checkbox">
              <input type="checkbox">
            </label>
            <div class="text-subtitle-1 ms-3">
              Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и 
              <a href="#">политикой конфиденциальности</a>              
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import UiInput from '@/components/Ui/UiInput.vue'
import UiButton from '@/components/Ui/UiButton.vue'

  export default {
    name: 'UiBannerTest',
    components: {
      UiInput,
      UiButton
    },
    data() {
      return {
        inputValue: ''
      }
    },
    props: {
      image: {
        type: String,
        default: ''
      }
    }    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.ui-banner-test { 
  border-radius: 10px;
  background: $grey-1;
  color: $black-1;
  line-height: normal;

  &__wrapper { 
    padding: 30px 30px;
    display: flex;
    align-items: center;
  }

  &__image {
    overflow: hidden;
    border-radius: 10px;
    height: 100%;
    
    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
}
</style>
