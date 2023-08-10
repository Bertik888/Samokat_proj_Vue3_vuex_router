<template>
  <header-block 
    class="mb-3"
  />
  <router-view />

</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock
  }
}
</script>
