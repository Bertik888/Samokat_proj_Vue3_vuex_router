<template>
  
  <div 
    class="ui-badge"
    :class="bgColor"  
  >
    {{ title }}

  </div>
</template>

<script>
  export default {
    name: 'UiBadge',

    props: {
      title: {
        type: String,
        default: ''
      },
      bgColor: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.ui-badge {
  padding: 5px; //верно ли задан класс сверху? + вопрос по ширине?
}

</style>