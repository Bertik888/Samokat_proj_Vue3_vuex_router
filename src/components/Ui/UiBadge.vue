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
  padding: 4px 8px; 
  display: inline-block; 
  font-weight: 600;
  font-size: 12px;
  color: white;
  border-radius: 5px;
}
</style>
