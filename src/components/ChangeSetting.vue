<template>
  <div class="change-setting border rounded-pill p-2 d-inline-flex align-items-center justify-content-center text-subtitle-1 cursor-pointer">

    <div 
      v-if="title"
      class="text-secondary me-1"
    >
      {{ title }}:
    </div>      
    <div 
      v-if="color"
      class="change-setting__color"
      :style="{ backgroundColor: color }"
    >
    </div>
    <div 
      v-if="subTitle"
    >
      {{ subTitle }}
    </div>

    <i class="bi bi-chevron-down d-flex align-items-center ms-2 "></i>
  </div>

  <!-- 
    1. вопрос по пробелу м/у title и color и subTitle 
    2. align-items-center justify-content-center - в верх диве нужны? и без этого работает
    3. me-1 - для title пробел 
  -->
</template>

<script>
  export default {
    name: 'ChangeSetting',
    props: {
      title: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
      
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.change-setting {
  
  &__color {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
}
</style>
