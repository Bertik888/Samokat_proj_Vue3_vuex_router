<template>
  <div   
    v-for="item in products"
    :key="item.id"
    class="product-page"
  >
    <div class="row">

      <div class="col-6">
        <div class="product-page__image mb-2">  
          <img 
            :src="require(`@/assets/images/${item.image}`)"
            :alt="item.name">
          
        </div>
        <div>
          <img 
            v-for="items in item.images"
            :key="item.id"
            :src="require(`@/assets/images/${item.image}`)" 
            :alt="item.name"
            class="product-page__images me-2 mb-2"            
          >            
        </div>
      </div>

      <div class="col-6">
        <div class="product-page__info">
          <h1>{{ item.name }}</h1>

         <pre>{{ products }}</pre> 
        </div>
      </div>



    </div>    

  </div>

</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'ProductPage2',
    props: {
      item: {
        type: Object,
        default: () => ({})
      }
    },

    mounted() {
      this.$store.dispatch('products/getProducts')
    },
    computed: {
      ...mapGetters({
        products: 'products/products'
      }),
    }
    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.product-page {

  &__image {
    width: 100%;
    // width: 570px;
    // height: 506px;
    flex-shrink: 0;
    border-radius: 10px;
    background: $grey-3;

    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  &__images {
    max-width: 95px;  // размер не работает
    max-height: 72px;
    flex-shrink: 0;
  }

}
</style>
