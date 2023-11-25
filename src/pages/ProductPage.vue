<template>
  <div class="product-page container">  
    <div class="row">
      <div class="col-12 col-md-6">        
        <div class="product-page__image">
          <ui-badge
            title="Новинка"
            bg-color="bg-green"
            class="product-page__image_badge"           
          />          
          <img 
            src="@/assets/images/banner_13.png" 
            alt="banner_13"
          >
        </div>
        <div class="product-page__images row g-2 mt-2">
          <div 
            v-for="(item, index) in 7"
            :key="index"          
            class="col-auto"
          >
            <div class="product-page__images_item">
              <img 
                src="@/assets/images/banner_14.png" 
                alt="banner_14"            
              >
            </div>            
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <h1 class="text-title">{{ product?.name }}</h1>        
        <div class="product-page__info">          
          <span>Просмотров: {{ product?.views_count }}</span>          
          <span>Купили {{ product?.buy_count }} раз</span>          
          <span>Артикул: {{ product?.article }}</span>           
        </div>
        <div class="product-page__action mt-2">   
          <div class="d-flex align-items-center me-3">
            <svg 
              width="9" 
              height="9" 
              viewBox="0 0 9 9" 
              fill="#75D14A" 
              xmlns="http://www.w3.org/2000/svg"
              class="me-1"
            >
              <circle cx="4.5" cy="4.5" r="4.5"/>
            </svg>
            В наличии
          </div>  
          <ui-icon-action
            type='compare'
            title="Сравнить"
            color="#6F73EE"
            :is-border="false"
            class="me-3"
          />
          <ui-icon-action
            type='share'
            title="Поделиться"
            color="#6F73EE"
            :is-border="false"
          />
        </div>

        <div class="d-flex align-items-center mt-4 ">
          <div class="product-page__price">
            <span
              v-if="isSale"
              class="product-page__price_old">
              {{ formatPrice(product?.price) }}
            </span>
              {{ formatPrice(price) }}              
          </div>
          <credit-block              
            class="ms-auto"
            :price="price"
          />
        </div>

        <div class="product-page__equipment mt-4 mb-4">
          Комплектация
        </div>
        <div class="row g-2">
          <div 
            v-for="item in product?.equipped"
            :key="item.type"          
            class="col-12 col-md-6"
          >
            <ui-button-product
              :title="item.name"
              :sub-title="item.price ? `${item.price} руб.` : ''"
              :active="item.type === order.equipped"
              @click="changeOrder('equipped', item.type)"
            />
          </div>
        </div>

        <hr class="line">

        <div class="product-page__wheel">
          <div class="product-page__wheel_info">
            <div>Покрышки</div> 
            <div class="product-page__wheel_title mt-1">Внедорожная шипованная</div>
            <div>+ установка (с доп.комплектом базовых покрышек)</div> 
            <div class="product-page__wheel_price mt-1">7600 руб.</div>
          </div>            
          <div class="product-page__wheel_change">Изменить</div>
        </div>

        <hr class="line">

        <div class="product-page__guarantee">
          <h2 class="text-title-2">Гарантия</h2>
          <div class="row g-2 mt-2">
            <div 
              v-for="item in product?.guarantee"
              :key="item.type"
              class="col-12 col-md-6"
            >
              <ui-button-product
                :title="item.name"
                :sub-title="item.price ? `${item.price} руб.` : 'Бесплатно'"
                :active="item.type === order.guarantee"
                @click="changeOrder('guarantee', item.type)"
              />
            </div>
          </div>
        </div>

        <hr class="line">

        <div class="product-page__service">
          <h2 class="text-title-2">Дополнительные услуги</h2>
          <div class="row g-2 mt-2">
            <div 
              v-for="item in product?.additional_services"
              :key="item.type"            
              class="col-12 col-md-6">
              <ui-button-product
                :title="item.name"
                :sub-title="item.price ? `${item.price} руб.` : ''"                
                :active="item.type === order.service"
                @click="changeOrder('service', item.type)"
              />
            </div>
          </div>
        </div>

        <hr class="line">
        
        <div class="product-page__wrap">
          <h2 class="text-title-2 mb-0">Подарочная упаковка</h2>
          <div class="product-page__wrap_info">
            <div class="product-page__wrap_action">
              До конца акции
            </div>
            <div class="product-page__wrap_time">
              06:34:23:02 
            </div>
          </div>
        </div>

        <product-page-present />   
        
        <div class="row g-2 mt-3">
          <div 
            v-for="item in wrappers"
            :key="item.type"
            class="col-12 col-md-6"
          >
            <ui-button-product
              :title="item.name"
              :color="item.color"
              :active="item.type === order.wrapper"
              @click="changeOrder('wrapper', item.type)"
            />
          </div>
        </div>

        <delivery-block class="mt-3"/>
      </div><!-- col-md-6 -->

      <div class="col-12 mt-3">
        <tabs
          v-model="tab"
          :items="tabsList"
        /> 
        <about-product 
          v-if="tab === 'product'"
          class="mt-5"          
        />
        <about-settings-product 
          v-if="tab === 'settings'"
          :options="product.options"
          class="mt-5" 
        />
        <about-delivery-product 
          v-if="tab === 'delivery'"
          class="mt-5" 
        />
        <about-guarantee-product 
          v-if="tab === 'guarantee'"
          class="mt-5" 
        />
        <about-version-product 
          v-if="tab === 'version'"
          class="mt-5" 
        />
      </div>

    </div><!-- row -->
  </div><!-- product-page container -->

  <div class="container-fluid mt-5">
    <ui-banner-test 
      :image="require('@/assets/images/banner_19.jpg')"
      @click="onClikBannerTest"
    />
    <ui-banner-test 
      :image="require('@/assets/images/banner_20.jpg')"
      class="mt-3"
      @click="onClikBannerTest"
    />
  </div>

  <pre class="mt-5"> {{ product }}</pre>

</template>

<script>
import UiBadge from '@/components/Ui/UiBadge.vue'
import UiIconAction from '@/components/Ui/UiIconAction.vue'
import UiButton from '@/components/Ui/UiButton.vue'
import UiButtonProduct from '@/components/Ui/UiButtonProduct.vue'
import CreditBlock from '@/components/CreditBlock.vue'
import DeliveryBlock from '@/components/DeliveryBlock.vue'
import Tabs from '@/components/Tabs.vue'
import AboutProduct from '@/components/AboutProduct.vue'
import UiBannerTest from '@/components/Ui/UiBannerTest.vue'
import ProductPagePresent from '@/components/ProductPagePresent.vue'
import AboutSettingsProduct from '@/components/AboutSettingsProduct.vue'
import AboutDeliveryProduct from '@/components/AboutDeliveryProduct.vue'
import AboutGuaranteeProduct from '@/components/AboutGuaranteeProduct.vue'
import AboutVersionProduct from '@/components/AboutVersionProduct.vue'

import { mapGetters } from 'vuex'
import formatMixin from '@/mixins/format.mixin.vue'

  export default {
    name: 'ProductPage',
    components: {
      UiBadge,
      UiIconAction,
      UiButton,
      UiButtonProduct,
      CreditBlock,
      DeliveryBlock,
      Tabs,
      AboutProduct,
      UiBannerTest,
      ProductPagePresent,
      AboutSettingsProduct,
      AboutDeliveryProduct,
      AboutGuaranteeProduct,
      AboutVersionProduct
    },
    data() {
      return {
        tabsList: [
          {
            title: 'О товаре',
            key: 'product'
          },
          {
            title: 'Характеристики',
            key: 'settings'
          },
          {
            title: 'Доставка и оплата',
            key: 'delivery'
          },
          {
            title: 'Гарантии',
            key: 'guarantee'
          },
          {
            title: 'Версия MAX',
            key: 'version'
          }
        ],
        tab: 'product', 
        wrappers: [
          {
            type: 'none',
            name: 'Без упаковки',
            color: ''
          },
          {
            type: 'pink',
            name: 'Розовый',
            color: '#FA6BFD'
          },
          {
            type: 'blue',
            name: 'Синий',
            color: '#6B7AFD'
          },
          {
            type: 'red',
            name: 'Красный',
            color: '#F45A5A'
          }
        ],
        order: {
          equipped: 'base',
          guarantee: 'base',
          service: 'none',
          wrapper: 'none'
        }
      }
    },
    computed: {
      ...mapGetters({
        product: 'product/product'
      }),
      price() {
        if (this.product) {
          return this.product.price - (this.product.price / 100) * this.product.sale
        }
        return ''
      },
      isSale() {
        return this.product?.sale > 0
      },
      isStock() {
        return this.product?.stock > 0
      }
    },
    mounted() {
      this.getProduct()
    },
    mixins: [formatMixin],
    methods: {
      getProduct() {
        this.$store.dispatch('product/getProduct', Number(this.$route.params.product_id))
      },
      onClikBannerTest() {
        console.log('onClikBannerTest')
      },
      // changeGuarantee(type) {
      //   this.order.guarantee = type
      // },
      changeOrder(key, type) {
        this.order[key] = type
      }
    },    
  }
</script>

<style lang="scss" >
@import '@/assets/css/variables.scss';
.product-page {

  &__image {
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    &:before {
      content: "";
      padding-top: 100%;
      float: left;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    &_badge {
      position: absolute;
      margin-top: 10px;
      margin-left: 10px;
    }
  }

  &__images {

    &_item {
      width: 73px;  
      height: 73px;
      border-radius: 5px;
      overflow: hidden;
      border: 2px solid $grey-3;

      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    color: $grey;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;

    span {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__action {
    display: flex;
    align-items: center;
    color: $black-1;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  &__price {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: $black-1;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;

    &_old {
      color: $grey;
      font-size: 12px;
      font-weight: 400;
      text-decoration: line-through;     
    }
  }

  &__equipment {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $black-1;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
  }

  &__wheel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $grey;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;

    &_info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &_title {
      color: $black-1;  
      font-size: 20px;
      font-weight: 600;
    }
    &_price {
      color: $black-1; 
      font-weight: 600;
    }

    &_change {

      &:hover {
        color: $purple;
        cursor: pointer;
      }
    }
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_info {
      display: flex;
      line-height: normal;

    }

    &_action {
      color: $grey;
      font-size: 14px;
      font-weight: 400;
      margin-right: 8px;
    }

    &_time {
      color: $black-1;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
