<template>
  <header-block class="mb-3" />
  <router-view />
  <footer-block />
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock
  }
}
</script>
