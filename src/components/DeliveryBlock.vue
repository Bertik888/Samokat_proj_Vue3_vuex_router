<template>
  <div class="delivery-block mt-3">
    <!-- <div class="row" > -->
      <div class="col-12 d-flex align-items-center justify-content-between">
        <h1 class="text-title mb-0">45 900 руб.</h1>
        <ui-icon-action
          type='favorite'
          color="#6F73EE"
        />
      </div>

      <hr class="line">

      <div class="delivery-block_info mt-3">
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 22 22" 
          fill="#282739" 
          xmlns="http://www.w3.org/2000/svg"
          class="me-3"
        >
          <path id="Vector" d="M20.7292 9.88196H20.2305L19.4223 6.50126C19.3089 6.01116 18.879 5.669 18.3751 5.669H15.0894V5.02417C15.0894 4.19448 14.4145 3.51953 13.5848 3.51953H1.50464C0.674953 3.51949 0 4.19444 0 5.02412V15.0407C0 15.87 0.674953 16.5454 1.50464 16.5454H2.73629C3.02345 17.6567 4.03459 18.4799 5.23398 18.4799C6.43341 18.4799 7.44451 17.6567 7.73167 16.5454H14.6122C14.8993 17.6567 15.9105 18.4799 17.1099 18.4799C18.3092 18.4799 19.3204 17.6567 19.6075 16.5454H20.4953C21.325 16.5454 21.9999 15.8704 21.9999 15.0407V11.1528C22 10.452 21.43 9.88196 20.7292 9.88196ZM18.2053 6.95866L18.9043 9.88196H15.0894V6.95866H18.2053ZM1.28971 15.0407V13.1544H2.66002C3.01615 13.1544 3.30486 12.8657 3.30486 12.5095C3.30486 12.1534 3.01615 11.8647 2.66002 11.8647H1.28971V5.02412C1.28971 4.90549 1.386 4.8092 1.50464 4.8092H13.5847C13.7034 4.8092 13.7997 4.90549 13.7997 5.02412V15.2557H7.73171C7.44455 14.1444 6.43341 13.3211 5.23402 13.3211C4.03459 13.3211 3.0235 14.1444 2.73634 15.2557H1.50464C1.386 15.2557 1.28971 15.1589 1.28971 15.0407ZM5.23398 17.1902C4.5228 17.1902 3.94427 16.611 3.94427 15.9005C3.94427 14.5856 5.69254 14.1199 6.35039 15.2557C6.58023 15.6501 6.58281 16.145 6.35039 16.5454C6.12691 16.9305 5.71033 17.1902 5.23398 17.1902ZM17.1099 17.1902C16.1174 17.1902 15.4982 16.1087 15.9934 15.2557C16.6538 14.1156 18.3996 14.5888 18.3996 15.9005C18.3996 16.6081 17.8235 17.1902 17.1099 17.1902ZM20.7103 15.0407C20.7103 15.1594 20.614 15.2557 20.4954 15.2557H19.6076C19.3205 14.1444 18.3093 13.3211 17.1099 13.3211C16.2927 13.3211 15.5627 13.7033 15.0894 14.2987V11.1716H20.7103V15.0407H20.7103Z" />
          <path id="Vector_2" d="M6.21079 11.8077C6.45107 12.0824 6.87131 12.1032 7.13746 11.8534L10.0178 9.15021C10.2774 8.90649 10.2904 8.49841 10.0467 8.23871C9.80302 7.97905 9.39495 7.96607 9.1352 8.20979L6.74184 10.4559L5.99934 9.60705C5.76486 9.33897 5.35748 9.31177 5.08944 9.54621C4.8214 9.78069 4.79416 10.1881 5.02859 10.4561L6.21079 11.8077Z" />
        </svg>
        <div class="delivery-block_text">
          Бесплатная доставка по РФ от 1 дня при заказе до 01.09
        </div>
      </div>

      <div class="delivery-block_cart mt-4">
        <ui-button      
          title="Купить в 1 клик"
          bg-color="bg-purple"
          text-color="color-white"
          size="md"
        />
        <ui-button      
          title="Добавить в корзину"
          bg-color="bg-white"
          text-color="color-purple"
          size="md"
          
        /> 
        <!-- class="ms-auto"  -->
      </div> 
             
    <!-- </div> --> <!-- row -->    
  </div>
  <span class="delivery-block__text mt-3 mb-2">Хотите купить позже?</span>
</template>

<script>
import UiIconAction from '@/components/Ui/UiIconAction.vue'
import UiButton from '@/components/Ui/UiButton.vue'

  export default {
    name: 'DeliveryBlock',
    components: {
      UiIconAction,
      UiButton
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.delivery-block {
  border-radius: 10px;
  background: $grey-1;
  padding: 30px;
  color: $black-1;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  &_info {
    display: flex;
    align-items: flex-start;
  }

  // &_text {
  //   color: $black-1;
  //   font-size: 16px;
  //   font-weight: 600;
  //   line-height: normal;
  // }

  &_cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover { 
      color: $purple;
      cursor: pointer;
    }
  }
}
</style>
