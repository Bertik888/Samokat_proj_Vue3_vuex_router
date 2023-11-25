<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-lg-between align-items-lg-center flex-column flex-lg-row">
        <h2 class="text-title mb-0">
          Популярные категории
        </h2> 
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
          <ui-card-badge
            :image="require('@/assets/images/banner_4.jpg')"        
            title="Менеджер ответит на любой ваш вопрос о продуктах Kugoo"
            text-action="Задать вопрос"   
            @clickBtn="onClickBadge"    
          />
        </div>
      </div>
    </div>   

    <div class="row mt-5">
      <div 
        v-for="item in filteringCategories"
        :key="item.id"       
        class="col-12 col-sm-6 col-md-3 mb-3"
      >      
        <card-catalog
          :item="item"
          :image="require(`@/assets/images/banner_5.jpg`)"
          :title="item.title"
          :sub-title="item.price"
          @clickCatalog="onClickCatalog(item.id)"
        />
      </div> 

      <div 
        v-if="categories.length >= count"
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
  </div>
</template>

<script>
import UiCardBadge from '@/components/Ui/UiCardBadge.vue'
import CardCatalog from '@/components/CardCatalog.vue'
import UiButton from '@/components/Ui/UiButton.vue'

  export default {
    name: 'PopularCategories',
    components: {
      UiCardBadge,
      CardCatalog,
      UiButton
    },
    data() {
      return {
        isShowAll: false,
        count: 8,
        categories: [
          {
            id: 1,
            title: 'Робот-пылесоссы',
            price: 'от 29 900 ₽',
            image: 'banner_5.jpg'
          },
          {
            id: 2,
            title: 'Электровелосипеды',
            price: 'от 29 900 ₽',
            image: 'banner_10.jpg'
          },
          {
            id: 3,
            title: 'Весы',
            price: 'от 29 900 ₽',
            image: 'banner_5.jpg'
          },
          {
            id: 4,
            title: 'Робот-пылесоссы',
            price: 'от 29 900 ₽',
            image: 'banner_10.jpg'
          },
          {
            id: 5,
            title: 'Весы',
            price: 'от 29 900 ₽',
            image: 'banner_5.jpg'
          },
          {
            id: 6,
            title: 'Робот-пылесоссы',
            price: 'от 29 900 ₽',
            image: 'banner_10.jpg'
          },
          {
            id: 7,
            title: 'Электровелосипеды',
            price: 'от 29 900 ₽',
            image: 'banner_5.jpg'
          },
          {
            id: 8,
            title: 'Весы',
            price: 'от 29 900 ₽',
            image: 'banner_10.jpg'
          },
          {
            id: 9,
            title: 'Робот-пылесоссы',
            price: 'от 29 900 ₽',
            image: 'banner_5.jpg'
          }
        ]
      }
    },
    computed: {
      filteringCategories() {
        return this.isShowAll ? this.categories : this.categories.slice(0, this.count)
      }
    },
    methods: {
      onClickCatalog(id) {
        console.log('onClickCatalog', id)
      },
      getImage(img) {
        return require(`@/assets/images/${img}`)
      }
    }    
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
</style>
