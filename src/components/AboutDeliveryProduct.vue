<template>
  <div class="row g-3">
    <div class="col-md-6">
      <div class="text-title-1 text-uppercase mb-4 ">
        5 способов оплаты
      </div>
      <div class="text-title-2 mb-2">
        Вы можете оплатить покупку:
      </div>
      <ul class="d-flex flex-column p-0 text-subtitle-1">
        <li>
          <i class="bi bi-caret-left-fill"></i>
          наличными 
        </li>
        <li>
          <i class="bi bi-caret-left-fill"></i>
          картой 
        </li>
        <li>
          <i class="bi bi-caret-left-fill"></i>
          онлайн на сайте через корзину 
        </li>
        <li>
          <i class="bi bi-caret-left-fill"></i>
          через интернет-банкинг по счету
        </li>
        <li>
          <i class="bi bi-caret-left-fill"></i>
          в кредит от «Сбербанка» 
        </li>
      </ul>
    </div>
    
    <div class="col-md-6">
      <div class="text-title-1 text-uppercase mb-4">
        Доставка по всей России
      </div>
      <ul class="d-flex flex-column p-0 text-subtitle-1">
        <li>
          <i class="bi bi-caret-left-fill"></i>
          Отправляем заказы по всей России день в день службой доставки товаров CDEK
        </li>
        <li>
          <i class="bi bi-caret-left-fill"></i>
          Самовывоз из магазинов в Москве, Санкт-Петербурге и Краснодаре
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutDeliveryProduct',
  }
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  margin-bottom: 6px; 
}
</style>
