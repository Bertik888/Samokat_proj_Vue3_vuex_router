<template>
  <div class="row g-3 w-100">
    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Картой
          </div>
        </div>
        <div class="row g-2">
          <div class="col-auto">
            <div class="border rounded-2 p-2 d-inline-flex h-100 w-100">
              <img src="@/assets/images/google_pay.png" alt="google_pay">
            </div>
          </div>
          <div class="col-auto">
            <div class="border rounded-2 p-2 d-inline-flex h-100 w-100">
              <img src="@/assets/images/apple_pay.png" alt="apple_pay">
            </div>
          </div>
          <div class="col-auto">
            <div class="border rounded-2 p-2 d-inline-flex h-100 w-100">
              <img src="@/assets/images/visa_pay.png" alt="visa_pay">
            </div>
          </div>
          <div class="col-auto">
            <div class="border rounded-2 p-2 d-inline-flex h-100 w-100">
              <img src="@/assets/images/mastercard_pay.png" alt="mastercard_pay">
            </div>
          </div>
          <div class="col-auto">
            <div class="border rounded-2 p-2 d-inline-flex h-100 w-100">
              <img src="@/assets/images/maestro_pay.png" alt="maestro_pay">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Наличными
          </div>
        </div>
        <div class="text-subtitle-2">
          Курьеру, в магазине или при доставке CDEK
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Через интернет-банкинг по счету
          </div>
        </div>  
        <div class="text-subtitle-2">
          Менеджер свяжется с вами, чтобы выставить счет
        </div>
      </div>      
    </div>

    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Онлайн на сайте
          </div>
        </div>
        <div class="text-subtitle-2">
          После оформления заказа вы будете перенаправлены на страницу оплаты
        </div>
      </div>      
    </div>

    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            В рассрочку
          </div>
        </div>
        <div class="text-subtitle-2">
          После оформления заказа c вами свяжется менеджер.
        </div>
      </div>      
    </div>

    <div class="col-md-4">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            В кредит от «Сбербанка»
          </div>
        </div>
        <div class="text-subtitle-2">
          С условиями можно ознакомиться <span class="text-primary cursor-pointer">на сайте банка</span> 
        </div>
      </div>      
    </div>    
    
  </div>

  <!-- 1. уточнить про class="cursor-pointer" для radio
      2. Верно ли, что h-100 для выравнивания карточек и w-100 ?т.к. и без w-100 - они ровные 
  -->
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'

  export default {
    name: 'DeliveryCard',
    components: {
      UiButton
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

li {
  list-style: none;
  margin-bottom: 6px; 
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
