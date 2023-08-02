<template>
  <div class="banners">
    <div class="banners__badge">
      <ui-badge       
        title="Новинка"
        bg-color="bg-green"        
      />
    </div>
    <div class="banners__title">
      {{ title }}
    </div>
    <div class="banners__subtitle">
      {{ subtitle }}
    </div>
    <div class="banners__button">
      <ui-button      
        title="Перейти в католог"
        bg-color="bg-purple-1"
      />
    </div>
    <div class="banners__image">
      <div class="banners__image_header">
        <img
          src="@/assets/images/samokat_wheel.png"
          alt="samokat_wheel"
        >
      </div>
      <div class="banners__image_substrate">
        <img 
          src="@/assets/images/samokat_ten.png" 
          alt="samokat_ten"
        >
      </div>
      <div class="banners__image_text">
        <img 
          src="@/assets/images/kirin.png" 
          alt="kirin"
        >
      </div>
    </div>

    <!-- src="@/assets/images/samokat_wheel.jpg" 
    
      alt="headerbanner"
      :src="require(`@/assets/images/${item.image}`)" 
      + api файл создал - возможно пока рано еще ?
    -->
  </div>
</template>

<script>
import UiBadge from './Ui/UiBadge.vue'
import UiButton from './Ui/UiButton.vue'

  export default {
    name: 'Banners',
    components: {
      UiBadge,
      UiButton
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      badge: {
        type: Boolean,
        default: false
      },
      positionImage: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''        
      },

      // item: {
      //   type: Object,
      //   default: () => ({})   
      // }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.banners {
  height: 421px;
  background: radial-gradient(544.32% 83.35% at 75.14% 62.23%, #A6A9FF 0%, #6F73EE 100%);
  border-radius: 10px;
  padding: 39px 32px 0 135px;
  // background-image: url('@/assets/images/samokat_wheel.jpg'), lightgray 50% / cover no-repeat;  
  // .jpg - с белым фоном, опасити не закрывет, transparent также не помогает, работает только .png

  &__title {
    font-size: 35px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: white;
    margin-top: 40px;
    width: 55%;
    // margin-right: 60px;
  }

  &__subtitle {
    margin-top: 7px;
    margin-bottom: 25px;
    font-size: 20px;
    line-height: normal;
    color: white;
  }

  &__image {
    position: relative;
    flex-shrink: 0;
    // background: transparent;

    &_header {
      position: absolute;
      // background-image: url('@/assets/images/samokat_wheel_3.png'), lightgray 50% / cover no-repeat; 
      // - background; background-image не срабатывает 
      right: 0;
      bottom: -143px;
      z-index: 1;
    }

    &_substrate {
      position: absolute;
      right: 0;
      bottom: -143px;
      z-index: 1;
      filter: blur(50px);
      // opacity: .5;
    }

    &_text {
      position: absolute;
      bottom: -143px;
      right: 10px;
    }
  }
}

</style>
