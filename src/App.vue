<template>
  <header-block class="mb-3 " />
  <router-view />
  <subscribe />
  <footer-block class="mt-5 " />
</template>

<script>
import Subscribe from '@/components/Subscribe.vue'
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    FooterBlock,
    Subscribe
  }
}
</script>
