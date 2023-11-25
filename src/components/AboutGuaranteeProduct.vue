<template>
  <div class="row g-4">
    <div class="col-lg-6">
      <card-banner
        :image="require('@/assets/images/banner_21.jpg')"
        title="14 дней на обмен и возврат"
        sub-title="Если вас, что-то не устроит в товаре, мы обменяем его на новый или вернем деньги"
      />
    </div>
    <div class="col-lg-6">
      <card-banner
        :image="require('@/assets/images/banner_22.jpg')"
        title="1 год на самокаты"
        sub-title="Обеспечиваем гарантийные обязательства на весь ассортимент самокатов в стандартной комплектации"
      />
    </div>
    <div class="col-lg-6">
      <card-banner
        :image="require('@/assets/images/banner_23.jpg')"
        title="Расширенная гарантия 2 года для версии MAX"
      />
    </div>
    <div class="col-lg-6">
      <card-banner
        :image="require('@/assets/images/banner_24.jpg')"
        title="Расширенная гарантия 3 года для версии VIP"
      />
    </div>
  </div>  
</template>

<script>
import CardBanner from '@/components/CardBanner.vue'

  export default {
    name: 'AboutGuaranteeProduct',
    components: {
      CardBanner
    }
  }
</script>
