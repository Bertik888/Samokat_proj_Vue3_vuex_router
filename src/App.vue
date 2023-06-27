<template>
  <div class="container">
    <div class="wrapper">
      <ui-button 
        title="Оформить заказ"
        bg-color="bg-purple"
        @click="onClick"
        
      />

      <ui-button 
        title="Оформить заказ"
        size="md"
        bg-color="bg-orange"
      />

      <ui-button 
        title="Оформить заказ"
        bg-color="bg-purple-1"
        :active="true"
      />

      <ui-button 
        title="Оформить заказ"
        size="md"
        bg-color="bg-purple-1"
        :active="true"
      />

      <ui-button 
        title="Test"
        bg-color="bg-grey"
        :disabled="true"
      />

      <ui-button 
        title="Testik"
        size="md"
        bg-color="bg-grey"
        :disabled="true"
      />

    </div>

    <div class="wrapper">
      <ui-icon-cart />
    </div>

    <div class="wrapper">
      <ui-icon-favorite />
    </div>

    <div class="wrapper">
      <ui-icon-compare />
    </div>

    <div class="wrapper">
      <ui-badge 
        title="ХИТ"
        bg-color="bg-red"      
      />

      <ui-badge 
        title="Новинка"
        bg-color="bg-green"      
      />
    </div>

    <div class="wrapper">
      <ui-skill
        title="Гарантия 1 год"
        subtitle="на весь ассортимент"      
      />
    </div>

    <div class="wrapper">
      <ui-skill
        title="Рассрочка"
        subtitle="от 6 месяцев"      
      />
    </div>

    <div class="wrapper">
      <ui-skill
        title="Подарки"
        subtitle="и бонусы к покупкам"      
      />
    </div>

    <div class="wrapper">
      <ui-menu-top

      />
    </div>

    

  </div>
</template>


<script>
import UiButton from '@/components/Ui/UiButton.vue'
import UiIconCart from '@/components/Ui/UiIconCart.vue'
import UiIconFavorite from '@/components/Ui/UiIconFavorite.vue'
import UiIconCompare from '@/components/Ui/UiIconCompare.vue'
import UiBadge from '@/components/Ui/UiBadge.vue'
import UiSkill from '@/components/Ui/UiSkill.vue'
import UiMenuTop from '@/components/Ui/UiMenuTop.vue'





export default {
  name: 'App',

  components: {
    UiButton,
    UiIconCart,
    UiIconFavorite,
    UiIconCompare,
    UiBadge,
    UiSkill,
    UiMenuTop
  },

  methods: {
    onClick(data) {
      this.counter++

      console.log(data)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

@font-face{
  font-family: 'Jost';
  src: url(@/assets/fonts/jost-light.ttf) format('ttf');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'Jost';
  src: url(@/assets/fonts/jost-regular.ttf) format('ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'Jost';
  src: url(@/assets/fonts/jost-semiBold.ttf) format('ttf');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'Jost';
  src: url(@/assets/fonts/jost-bold.ttf) format('ttf');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-jost;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  // width: 100%;
  // max-width: 1275px;

  // padding-right: 165px;
  // padding-left: 165px;  
  // margin-right: auto;
  // margin-left: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.wrapper {
  margin-top: 60px;
}

</style>
