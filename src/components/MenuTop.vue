<template>
  <div class="menu-top">

  </div>
</template>

<script>
  export default {
    name: 'MenuTop',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        menuTopList: [
          {
            title: 'test1',
            route: ''
          },
          {
            title: 'test2',
            route: ''
          },
          {
            title: 'test3',
            route: ''
          },
          {
            title: 'test4',
            route: ''
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>