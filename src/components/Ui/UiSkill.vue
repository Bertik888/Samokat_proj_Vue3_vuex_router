<template>
  <div class="ui-skill"> 
    <div class="ui-skill__title">
      {{ title }}
    </div>
    <div class="ui-skill__subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UiSkill',
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.ui-skill {

  &__title {
    font-weight: 700;
    text-transform: uppercase;
  }

  &__subtitle {
    font-weight: 300;
  }
}
</style>
