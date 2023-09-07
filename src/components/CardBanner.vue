<template>
  <div
    :style="{ backgroundImage: `url(${image})` }"
    class="card-banner"
  >
    <div class="card-banner__title">{{ title }}</div>
    <div class="card-banner__subtitle">{{ subTitle }}</div>
    <div 
      class="card-banner__text-action"      
      @click="$emit('clickCardBanner')"
    >
      {{ textAction }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CardBanner',
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      },
      textAction: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    },
    // methods: {
    //   onClickCardBanner() {
    //     console.log('onClickCardBanner')
    //   }
    // }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.card-banner {
  width: 100%;
  min-height: 235px;
  border-radius: 10px;
  background-position: center right;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-size: cover;
  padding: 32px;

  &__title {
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 10px;
    max-width: 258px;
  }

  &__subtitle {
    max-width: 258px;
  }

  &__text-action {
    margin-top: 22px;
    color: $purple;
    font-size: 14px;
    line-height: normal;
    cursor: pointer;
  }
}
</style>
