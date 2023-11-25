<template>
  <div class="row g-2">
    <div class="col">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Самовывоз из магазина
          </div>
        </div>

        <div class="border rounded-2 p-2 text-subtitle-2 d-flex align-items-center justify-content-between cursor-pointer mb-3" style="background-color: #F4F7FB;">
          в Москве
          <i class="bi bi-chevron-down d-flex align-items-center"></i>
        </div>

        <div class="d-flex align-items-center">
          <i class="bi bi-geo-alt-fill d-flex align-items-center me-2"></i>
          <div class="text-subtitle-2">
            ул. Ткацкая, 5 стр. 16. Пн - Вс 10:00 - 20:00.
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Доставка курьером
          </div>
        </div>

        <ul class="d-flex flex-column p-0 text-subtitle-2">
          <li>
            <i class="bi bi-caret-left-fill"></i>
            Москва  
          </li>
          <li>
            <i class="bi bi-caret-left-fill"></i>
            Санкт-Петербург  
          </li>
          <li>
            <i class="bi bi-caret-left-fill"></i>
            Краснодар 
          </li>
        </ul>
      </div>
    </div>

    <div class="col">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Срочная доставка курьером
          </div>
        </div>        
        <div class="text-subtitle-2 mb-4">
          Только по Москве
        </div>
        <div class="text-subtitle-2 mb-2">
          Стоимость уточняйте у менеджера + 7 (800) 505 54 61
        </div>
        <ui-button      
          title="Бесплатно"
          bg-color="bg-green"
          text-color="color-white"
        />
      </div>      
    </div>

    <div class="col">
      <div class="h-100 w-100 border rounded-2 p-3 d-inline-flex flex-column">
        <div class="d-flex align-items-center mb-3"> 
          <label class="me-2 d-flex align-items-center" for="radio">
            <input type="radio">
          </label>
          <div class="text-title-2">
            Служба доставки CDEK
          </div>
        </div>        
        <div class="text-subtitle-2 mb-4">
          Регионы России
        </div>
        <div class="text-subtitle-2 mb-2">
          Стоимость уточняйте у менеджера + 7 (800) 505 54 61
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
</style>
