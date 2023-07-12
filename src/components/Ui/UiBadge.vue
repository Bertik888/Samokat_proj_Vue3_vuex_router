<template>  
  <div 
    class="ui-badge"
    :class="bgColor" 
    
  >
    {{ title }}

    <!-- :style="{ textTransform: 'uppercase' }"   -->
    <!-- написать, что только, если бейдж красный тогда upercase  -->

  </div>  
</template>



<script>
  export default {
    name: 'UiBadge',
    // data() {
    //   return {
    //     text: 'uppercase' 
    //   }
    // },

    props: {
      title: {
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: ''
      },
      // text: {
      //   type: String,
      //   default: ''
      // }
    }
  }
</script>

<style lang="scss" scoped>
.ui-badge {
  padding: 4px 8px; //верно ли задан класс сверху? 
  display: inline-block; // по ширине контента
  font-weight: 600;
  font-size: 12px;
  color: white;
  border-radius: 5px;
}
</style>
