<template>
  <div    
    class="questions-item"
  >
    <div class="questions-item__top d-flex justify-content-between align-items-start">
      <div class="questions-item__title">
        {{ title }}
      </div>      
      <button
        @click="isOpen = !isOpen"
      >X</button>
    </div>    
    <transition name="fade">
      <div   
        v-show="isOpen"   
        class="questions-item__answer">
        {{ answer }}
      </div>
    </transition>    
  </div>
</template>

<script>

  export default {
    name: 'QuenstionsBlock',
    props: {
      title: {
        type: String,
        default: '' 
      },
      answer: {
        type: String,
        default: '' 
      },
      initOpen: {
        type: Boolean,
        default: false 
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    mounted() {      
      this.isOpen = this.initOpen      
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.questions-item {
  padding-top: 20px;
  padding-bottom: 20px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
  }

  &__answer {
    font-weight: 400;
    line-height: normal;
    padding-top: 24px;
  }
}
</style>
