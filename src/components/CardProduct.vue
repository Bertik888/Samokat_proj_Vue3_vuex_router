<template>
  <div class="card-product">
    <div class="card-product__top">
      <ui-badge            
        :title="item.isHit ? 'ХИТ' : 'Новинка'"
        :bg-color="item.isHit ? 'bg-red' : 'bg-green'"          
      />
      <ui-icon-action style="margin-left: auto;"
        type='compare'
        color="#6F73EE"
        :active="item.isCompare"
      />
    </div>    

    <div 
      class="card-product__image"
      @click="goTo"
    >
      <img src="@/assets/images/samokat.jpg" alt="samokat">
    </div>

    <div class="card-product__wrapper">
      <div 
        class="card-product__title"
        @click="goTo"      
      >
        {{ item.name }}
      </div>

      <div class="card-product__info">
        <div class="card-product__info_item">
          <svg 
            class="card-product__info_icon"
            width="18" 
            height="18" 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
          >
            <path d="M16.5 3.75001V2.99999C16.5 2.58655 16.1638 2.25 15.75 2.25H13.5C13.0862 2.25 12.75 2.58655 12.75 2.99999V3.74998H12.5303L12.2198 3.43944C11.9407 3.16002 11.554 2.99999 11.1592 2.99999H6.84081C6.44604 2.99999 6.05932 3.16002 5.78025 3.43944L5.46971 3.74998H5.24999V2.99999C5.24999 2.58655 4.91382 2.25 4.5 2.25H2.25C1.83618 2.25 1.50001 2.58655 1.50001 2.99999V3.74998C0.673102 3.75001 0 4.42273 0 5.24999V14.25C0 15.0773 0.673102 15.75 1.50001 15.75H16.5C17.3269 15.75 18 15.0773 18 14.25V5.24999C18 4.42273 17.3269 3.75001 16.5 3.75001ZM4.12499 7.49999H2.62501C2.41773 7.49999 2.25 7.33226 2.25 7.12498C2.25 6.91773 2.41773 6.75 2.62501 6.75H4.12502C4.3323 6.75 4.50004 6.91773 4.50004 7.12501C4.5 7.33229 4.33227 7.49999 4.12499 7.49999ZM15.375 7.49999H15V7.875C15 8.08228 14.8322 8.25001 14.625 8.25001C14.4177 8.25001 14.25 8.08228 14.25 7.875V7.49999H13.8749C13.6677 7.49999 13.4999 7.33226 13.4999 7.12498C13.4999 6.9177 13.6677 6.74996 13.8749 6.74996H14.25V6.37495C14.25 6.16767 14.4177 5.99994 14.625 5.99994C14.8322 5.99994 15 6.16767 15 6.37495V6.75H15.375C15.5823 6.75 15.75 6.91773 15.75 7.12501C15.75 7.33229 15.5823 7.49999 15.375 7.49999Z" fill="#5D6C7B"/>
          </svg>      
          2000 mAh
        </div>

        <div class="card-product__info_item">
          <svg 
            class="card-product__info_icon"
            width="18" 
            height="16" 
            viewBox="0 0 18 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47268 3.56442V0.236069C6.43987 0.352752 4.53356 1.14268 3.01196 2.49876L5.36518 4.85198C6.25077 4.11475 7.32609 3.66918 8.47268 3.56442Z" fill="#5D6C7B"/>
            <path d="M4.61925 5.59762L2.26606 3.24445C0.90882 4.76562 0.11791 6.67207 0.000488281 8.70536H3.32898C3.43445 7.55853 3.88093 6.48314 4.61925 5.59762Z" fill="#5D6C7B"/>
            <path d="M14.6711 8.70536H17.9996C17.8822 6.67207 17.0913 4.76562 15.734 3.24445L13.3809 5.59762C14.1192 6.4831 14.5657 7.55853 14.6711 8.70536Z" fill="#5D6C7B"/>
            <path d="M14.6703 9.76006C14.4959 11.676 13.4441 12.845 13.0265 13.2625C12.8203 13.4688 12.8203 13.8033 13.0265 14.0096L14.6266 15.6097C14.7297 15.7129 14.865 15.7644 15.0001 15.7644C15.1353 15.7644 15.2705 15.7129 15.3736 15.6097C16.953 14.0305 17.8739 11.9698 18 9.76006H14.6703Z" fill="#5D6C7B"/>
            <path d="M3.27189 12.7858C3.41919 12.5544 3.64215 12.2058 3.90962 11.7934C3.63544 11.2499 3.40358 10.5724 3.32965 9.76006H0C0.126035 11.9698 1.04695 14.0305 2.62628 15.6097C2.72943 15.7129 2.8646 15.7645 2.99978 15.7645C3.13495 15.7645 3.27016 15.7129 3.37331 15.6097L3.92119 15.0618C3.76249 14.9854 3.61607 14.8821 3.48785 14.754C2.95952 14.2256 2.87068 13.4163 3.27189 12.7858Z" fill="#5D6C7B"/>
            <path d="M9.52734 0.236069V3.56442C10.6739 3.66918 11.7493 4.11472 12.6348 4.85198L14.9881 2.49876C13.4665 1.14264 11.5601 0.352752 9.52734 0.236069Z" fill="#5D6C7B"/>
            <path d="M7.82847 8.06995C7.01228 8.88614 4.45115 12.8973 4.16181 13.352C4.02909 13.5605 4.05905 13.8332 4.23381 14.008C4.40857 14.1828 4.68128 14.2127 4.88983 14.08C5.3445 13.7907 9.3557 11.2295 10.1719 10.4134C10.818 9.76729 10.818 8.71605 10.1719 8.06999C9.52582 7.42392 8.47454 7.42388 7.82847 8.06995Z" fill="#5D6C7B"/>
          </svg>
          60 км/ч
        </div>

        <div class="card-product__info_item">
          <svg 
            class="card-product__info_icon"
            width="18" 
            height="18" 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.2232 0.260732C11.1399 0.101188 10.9748 0 10.7947 0H3.72919C3.51551 0 3.32721 0.141421 3.26608 0.346092L0.742124 8.80412C0.698447 8.95043 0.726477 9.10792 0.817697 9.23032C0.908917 9.35277 1.05263 9.42405 1.20523 9.42405H5.1669L3.57091 17.4212C3.52445 17.6538 3.65361 17.8862 3.8758 17.9691C3.9312 17.9898 3.98835 18 4.04471 18C4.21422 18 4.37673 17.9106 4.46481 17.7559L10.6889 6.82597C10.7741 6.67634 10.7732 6.49172 10.6867 6.34287C10.6002 6.19402 10.4411 6.10147 10.2689 6.10147H7.46637L11.1912 0.760267C11.2942 0.612563 11.3065 0.420397 11.2232 0.260732Z" fill="#5D6C7B"/>
          </svg>        
          1.2 л.с.
        </div>

        <div class="card-product__info_item">
          <svg 
            class="card-product__info_icon"
            width="18" 
            height="18" 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4525 5.35819L15.5303 4.28044L14.4698 3.21956L13.3168 4.3725C12.2636 3.62609 11.0345 3.16607 9.75 3.0375V1.5H11.25V0H6.75V1.5H8.25V3.0375C6.96551 3.16607 5.73644 3.62609 4.68319 4.3725L3.53025 3.21956L2.46975 4.28044L3.5475 5.35819C2.54149 6.42334 1.86948 7.75982 1.61448 9.20259C1.35947 10.6454 1.53263 12.1312 2.11257 13.4767C2.69252 14.8222 3.65384 15.9683 4.87783 16.7736C6.10182 17.5788 7.53487 18.008 9 18.008C10.4651 18.008 11.8982 17.5788 13.1222 16.7736C14.3462 15.9683 15.3075 14.8222 15.8874 13.4767C16.4674 12.1312 16.6405 10.6454 16.3855 9.20259C16.1305 7.75982 15.4585 6.42334 14.4525 5.35819ZM9 16.5C7.81332 16.5 6.65328 16.1481 5.66658 15.4888C4.67989 14.8295 3.91085 13.8925 3.45673 12.7961C3.0026 11.6997 2.88378 10.4933 3.11529 9.32946C3.3468 8.16557 3.91825 7.09647 4.75736 6.25736C5.59648 5.41824 6.66558 4.8468 7.82946 4.61529C8.99335 4.38378 10.1997 4.5026 11.2961 4.95672C12.3925 5.41085 13.3295 6.17988 13.9888 7.16658C14.6481 8.15327 15 9.31331 15 10.5C14.9982 12.0908 14.3655 13.6158 13.2407 14.7407C12.1158 15.8655 10.5908 16.4982 9 16.5Z" fill="#5D6C7B"/>
            <path d="M9 6.00015V10.5002H4.5C4.5 11.3902 4.76392 12.2602 5.25839 13.0002C5.75285 13.7402 6.45566 14.317 7.27792 14.6576C8.10019 14.9982 9.00499 15.0873 9.87791 14.9137C10.7508 14.7401 11.5526 14.3115 12.182 13.6821C12.8113 13.0528 13.2399 12.251 13.4135 11.3781C13.5872 10.5051 13.4981 9.60034 13.1575 8.77808C12.8169 7.95581 12.2401 7.25301 11.5001 6.75854C10.76 6.26407 9.89002 6.00015 9 6.00015Z" fill="#5D6C7B"/>
          </svg>   
          5 часов
        </div>
      </div>        

      <div class="card-product__shop">
        <div class="card-product__price">
          <span 
            v-if="isSale"
            class="card-product__price_old">
            {{ item.price }} ₽
          </span>
           {{ price }} ₽
        </div>

        <div class="card-product__icon">
          <ui-icon-action 
            type='cart'         
          />
          <ui-icon-action 
            type='favorite'
          />
        </div>
      </div>

      <ui-button
        :title="isStock ? 'Купить в 1 клик' : 'Оформить предзаказ'"
        class="full-width" 
        :bg-color="isStock ? 'bg-purple' : 'bg-orange'"
        @click="isStock ? $emit('buy', item.id) : $emit('preOrder', item.id)"
      />
    </div>    
    
  </div>
</template>

<script>
import UiBadge from '@/components/Ui/UiBadge.vue'
import IconCompare from './Ui/icons/IconCompare.vue'
import UiIconAction from './Ui/UiIconAction.vue'
import UiButton from './Ui/UiButton.vue'

  export default {
    name: 'CardProduct',
    components: { 
      UiBadge,
      IconCompare,
      UiIconAction,
      UiButton
    },
    data() {
      return {
        counter: 1
      }
    },
    props: {
      item: {
        type: Object,
        default: () => ({})   
      }
    },
    computed: {
      price() {
        return this.item.price - (this.item.price / 100) * this.item.sale
      },
      isSale() {
        return this.item.sale > 0
      },
      isStock() {
        return this.item.stock > 0
      }
    },
    methods: {
      goTo() {
        this.$router.push({
          name: 'productPage', 
          params: {product_id: this.item.id}
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.card-product {
  border: 2px solid $grey-2;
  border-radius: 10px;
  position: relative;

  &__top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0;
    position: absolute;
    width: 100%;
  }
  
  &__image {
    height: 231px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  &__wrapper {
    padding: 20px 24px;
  }

  &__title {
    color: $black-1;
    font-weight: 700;
    cursor: pointer;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
    color: $grey;
    flex-wrap: wrap;

    &_item {
      width: 50%;
      margin-bottom: 16px;

      &:nth-child(even) {
        text-align: right;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  &__shop {
    display: flex;    
    margin-top: 9px;
    align-items: center;
    margin-bottom: 16px;
  }

  &__price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 8px;
    
    font-size: 20px;
    font-weight: 700;
    color: $black-1;    

    &_old {
      font-size: 12px;
      text-decoration: line-through;  
      color: $grey;
      font-weight: 400;
    }
  }

  &__icon {
    display: flex;
    margin-left: auto;

    div:last-of-type {
      margin-left: 10px;
    }
  }
}
</style>
