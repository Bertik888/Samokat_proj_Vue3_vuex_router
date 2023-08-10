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
          subtitle="на весь ассортимент"      
        />
      </div>
      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Рассрочка"
          subtitle="от 6 месяцев"      
        />
      </div>

      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Подарки"
          subtitle="и бонусы к покупкам"      
        />
      </div>

      <div class="col-12 col-lg-3 col-sm-6 mb-3">
        <ui-skill
          title="Акции"
          subtitle="скидки до 50%"      
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import UiBanner from '@/components/Ui/UiBanner.vue'
import UiBadge from '@/components/Ui/UiBadge.vue'
import UiButton from '@/components/Ui/UiButton.vue'
import UiSkill from '@/components/Ui/UiSkill.vue'


  export default {
    name: 'HomePage',
    components: {
      UiBanner,
      UiBadge,
      UiButton,
      UiSkill
    }
  }
</script>