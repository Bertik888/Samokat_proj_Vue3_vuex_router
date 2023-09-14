<template>
  
  <div class="row">
    <div class="col-12">
      <div class="mb-5 flex-column align-items-center text-center">
        <h2 class="text-title mb-0">
          Предлагаем самые выгодные цены на продукты Kugoo за счет прямых поставок
        </h2>
        <p class="text-subtitle mt-3 mb-5">
          и заботимся об удобстве покупателей
        </p>
        <div class="row g-3 justify-content-center">
          <div class="col-auto">
            <ui-button
              title="Интернет-магазин"
              bg-color="bg-grey-1"
              size="md"
            />
          </div>
          <div class="col-auto">
            <ui-button
              title="Сервисный центр"
              bg-color="bg-grey-1"
              size="md"
            />
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <profit-card
            :icon="require('@/assets/images/icons_svg/profit-cart.svg')"  
            title="Х товаров в каталоге"
            sub-title="Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении."            
          />
        </div>
        <div class="col">
          <profit-card
            :icon="require('@/assets/images/icons_svg/profit-wallet.svg')"
            title="5 способов оплаты"
            sub-title="Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка»."
          />
        </div>
        <div class="col">
          <profit-card 
            :icon="require('@/assets/images/icons_svg/profit-guarante.svg')"
            title="Полная документация и гарантия 1 год"
            sub-title="При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание."  
          />

        </div>
        <div class="col">
          <profit-card  
            :icon="require('@/assets/images/icons_svg/profit-delivery.svg')"
            title="Отправка заказа день в день"
            sub-title="Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре."  
          />
        </div>
        <div class="col">
          <profit-card 
            :icon="require('@/assets/images/icons_svg/profit-percentage.svg')"
            title="Рассрочка без переплат"
            sub-title="В нашем магазине можно приобрести любой товар в рассрочку."
            text-action="Подробнее про условия рассрочки"
            @onClick="onClickProfitCard"
          />
        </div>
        <div class="col">
          <profit-card 
            title="Больше в каталоге"
            text-action="Перейти"
            bg-color="bg-grey-1"
            :bg-image="require('@/assets/images/banner_11.png')"
            @onClick="onClickProfitCard"
          />            
        </div>

      </div>
    </div>
  </div>
      
  
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'
import ProfitCard from '@/components/ProfitCard.vue'
  export default {
    name: 'ProfitBlock',
    components: {
      UiButton,
      ProfitCard
    },
    methods: {
      onClickProfitCard() {
        console.log('onClickProfitCard')
      }

    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

</style>
