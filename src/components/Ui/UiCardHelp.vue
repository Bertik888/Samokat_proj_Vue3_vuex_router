<template>
  <div 
    class="ui-card-help"
    @click="$emit('clickHelp')"
  >  
    <div class="ui-card-help__image">
      <img :src="image" alt="image">
    </div>
    <div class="ui-card-help__title">
      {{ title }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'UiCardHelp',
    props: {
      title: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.ui-card-help {
  border-radius: 10px;
  background: radial-gradient(202.55% 104.39% at 82.43% 76.38%, #8FE865 0%, #49AC1B 100%);
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;

  &__image {
    margin-right: 10px;
    flex-shrink: 0;    
    width: 106px;
    height: 100%;

    img {      
      width: 100%;    
      height: 100%;
      object-fit: fill;
    }
  }

  &__title {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
