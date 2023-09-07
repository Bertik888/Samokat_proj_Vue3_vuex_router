<template>
  <div 
    class="profit-card"
    :class="bgColor"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <img 
      v-if="icon"
      width="25" 
      :src="icon"
      class="profit-card__icon"
    >
    <div class="profit-card__title">
      {{ title }}
    </div>
    <div 
      v-if="subTitle"
      class="profit-card__subtitle"
    >
      {{ subTitle }}
    </div>
    <div
      v-if="textAction" 
      @click="$emit('onClick')"
      class="profit-card__text-action"
    >
      {{ textAction }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProfitCard',
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {        
        type: String,
        default: ''
      },
      subTitle: {        
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: ''
      },
      bgImage: {        
        type: String,
        default: ''
      },
      textAction: {        
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.profit-card {
  width: 100%;
  border-radius: 10px;
  border: 1px solid $grey-2;
  padding: 20px;
  height: 100%; 
  background-position: center right;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  &__icon {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: 14px;  
    margin-bottom: 4px;
  }

  &__text-action {    
    color: $purple;
    font-size: 14px;
    line-height: normal;
    cursor: pointer;
  }
}  
</style>
