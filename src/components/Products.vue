<template>  
  <div class="row">
    <div class="col-12 d-flex justify-content-lg-between align-items-lg-center flex-column flex-lg-row mb-5">
      <h2 class="text-title mb-0">
        Электросамокаты
      </h2>
      <div>
        <ui-button
          title="Хиты продаж"
          bg-color="bg-grey-1"
          text-color="color-grey"
          :active="filter === 'is_top'"
          class="me-2 mb-2 mb-lg-0"
          @onClick="setFilter('is_top')"
        />
        <ui-button
          title="Для взрослых"
          bg-color="bg-grey-1"
          text-color="color-grey"
          :active="filter === 'adult'"
          class="me-2 mb-2 mb-lg-0"   
          @onClick="setFilter('adult')"  
        />
        <ui-button
          title="Для детей"
          bg-color="bg-grey-1"
          text-color="color-grey"   
          :active="filter === 'child'"
          @onClick="setFilter('child')"  
          class="mb-2 mb-lg-0"
        />
      </div>
    </div>

    <div 
      v-for="item in filteringProducts"
      :key="item.id"
      class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <card-product 
        :item="item"
      />
    </div>

    <div 
      v-if="filteringProducts.length >= count"
      class="col-12 d-flex justify-content-center mt-3"
    >
      <ui-button
        :title="isShowAll ? 'Свернуть' : 'Смотреть все'"
        bg-color="bg-grey-1"
        text-color="color-purple"
        size="md"
        @click="isShowAll = !isShowAll"
        class="btn-all"
      />
    </div>    
  </div>
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'
import CardProduct from '@/components/CardProduct.vue'
import { mapGetters } from 'vuex'


  export default {
    name: 'Products',
    components: {
      UiButton,
      CardProduct
    },
    data() {
      return {
        filter: '',
        isShowAll: false,
        count: 8
      }
    },
    mounted() {
      this.$store.dispatch('products/getProducts')
    },
    computed: {
      ...mapGetters({
        products: 'products/products'
      }),
      filteringProducts() {
        let products = this.products
        if (this.filter === 'is_top') {
          products = this.products.filter(item => item.is_top)
        } else if (this.filter === 'child') {
          products = this.products.filter(item => item.age_category === 'child')          
        } else if (this.filter === 'adult') {
          products = this.products.filter(item => item.age_category === 'adult')
        }
        return this.isShowAll ? products : products.slice(0, this.count)
      }
    },
    methods: {
      setFilter(name) {
        if (name === this.filter) {
          this.filter = ''
        } else {
          this.filter = name
        }        
      }
    }
  }
</script>
