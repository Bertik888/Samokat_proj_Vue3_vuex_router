<template>
  <div class="container-fluid mb-4">
    <ui-banner
      bg="radial-gradient(544.32% 83.35% at 75.14% 62.23%, #A6A9FF 0%, #6F73EE 100%)"
      :bg-image="require('@/assets/images/samokat_wheel.png')"
      bg-size="contain"
      :bg-image-up="true"
    >
    <div class="col-12 col-md-6">
      <ui-badge       
        title="Новинка"
        bg-color="bg-green"
        class="mb-4"        
      />
      <h2 class="mb-2">Электросамокаты Kugoo Kirin от официального дилера</h2>
      <p class="mb-4">с бесплатной доставкой по РФ от 1 дня</p>
      <ui-button      
        title="Перейти в католог"
        bg-color="bg-white"
        text-color="color-purple"
      />
      </div>
    </ui-banner>  
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Гарантия 1 год"
          sub-title="на весь ассортимент"      
        />
      </div>
      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Рассрочка"
          sub-title="от 6 месяцев"      
        />
      </div>

      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Подарки"
          sub-title="и бонусы к покупкам"      
        />
      </div>

      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Акции"
          sub-title="скидки до 50%"      
        />
      </div>
    </div>

    <products class="mt-5"/>

    <div class="row mt-5 mb-5"> 
      <div class="col-12 col-md-6">
        <card-banner
          :image="require('@/assets/images/banner_8.jpg')"
          title="Подбор модели электросамоката"
          sub-title="Пройдите тест и выберите электросамокат по своим критериям"
          text-action="Подобрать модель"
          @clickCardBanner="onClickCardBanner"   
        />
      </div>
      <div class="col-12 col-md-6">
        <card-banner
          :image="require('@/assets/images/banner_9.jpg')"
          title="Сервисное обслуживание"
          sub-title="Крупнейший сервисный центр в России для продуктов Kugoo"
          text-action="Подобрать модель"
          @clickCardBanner="onClickCardBanner"   
        />
      </div>
    </div>    
  </div>

  <div class="container-fluid mb-4">
    <ui-banner
      bg="radial-gradient(708.28% 82.86% at 23.30% 72.57%, #595959 0%, #3B3E46 100%)"
      :bg-image="require('@/assets/images/banner_3.png')"
      bg-size="contain"
      :bg-image-up="true"
      bg-position="center left"
    >
      <div class="col-12 col-md-6"></div>
    
      <div class="col-12 col-md-6">
        <ui-badge       
          title="Акция"
          bg-color="bg-red"
          class="mb-4"
        />
        <h2 class="mb-2">Бесплатная доставка электросамокатов по России до 01.09</h2>
        <ui-button      
          title="Подробнее"
          bg-color="bg-white"
          text-color="color-purple"
        />
      </div>
    </ui-banner>  
  </div>
  
  <popular-categories class="mt-5"/>

  <div class="container mt-5">
    <profit-block />
  </div>

  <div class="container mt-5 mb-5">
    <questions-block />
  </div>

</template>

<script>
import UiBanner from '@/components/Ui/UiBanner.vue'
import UiBadge from '@/components/Ui/UiBadge.vue'
import UiButton from '@/components/Ui/UiButton.vue'
import UiSkill from '@/components/Ui/UiSkill.vue'
import Products from '@/components/Products.vue'
import CardBanner from '@/components/CardBanner.vue'
import PopularCategories from '@/components/PopularCategories.vue'
import ProfitBlock from '@/components/ProfitBlock.vue'
import Subscribe from '@/components/Subscribe.vue'
import QuestionsBlock from '@/components/QuestionsBlock.vue'




  export default {
    name: 'HomePage',
    components: {
      UiBanner,
      UiBadge,
      UiButton,
      UiSkill,
      Products,
      CardBanner,
      PopularCategories,
      ProfitBlock,
      Subscribe,
      QuestionsBlock
    },
    methods: {
      onClickCardBanner() {
        console.log('onClickCardBanner')
      }
    }
  }
</script>
