<template>
  <div class="header">
    <div class="header__top container">
      <div class="row">
        <div class="col-12 d-flex align-items-center">
          <img 
            src="@/assets/images/logo.svg" 
            alt="logo"
            class="header__logo"
          >
          <ui-button 
            title="Каталог"
            bg-color="bg-purple"
            text-color="color-white"
            class="d-none d-md-block"
          />

          <div class="header__action">            
            <ui-icon-action 
              :color="isActiveCompare ? '#6F73EE' : '#282739'"
              type="compare"
              :active="isActiveCompare"
              :is-border="false"
              class="me-2"
            />              
            <ui-icon-action 
              :color="isActiveFavorite ? '#6F73EE' : '#282739'"
              type="favorite"
              :active="isActiveFavorite"
              :is-border="false"
              class="me-2"
            />

            <div class="d-none d-md-block">
              <ui-icon-action 
                :color="isActiveCart ? '#6F73EE' : '#282739'"
                type="cart"
                :active="isActiveCart"
                :is-border="false"
                title="Корзина"                
              />
            </div>

            <div class="d-md-none d-flex align-items-center">
              <ui-icon-action 
                :color="isActiveCart ? '#6F73EE' : '#282739'"
                type="cart"
                :active="isActiveCart"
                :is-border="false"
                class="me-2"
              />

              <div 
                class="header__burger"
                :class="{ '_open': menuIsOpen}"  
                @click="menuIsOpen = !menuIsOpen"            
              >
                {{ menuIsOpen ? 'close' : 'open' }}
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>

    <div class="header__menu d-none d-md-block">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <menu-top 
              :items="menuTopList"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="d-md-none">
      <menu-top-mobile
        :items="menuTopList"
        :is-open="menuIsOpen"
      />
    </div>
    

  </div>
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'
import UiIconAction from '@/components/Ui/UiIconAction.vue'
import MenuTop from '@/components/MenuTop.vue'
import MenuTopMobile from '@/components/MenuTopMobile.vue'



  export default {
    name: 'HeaderBlock',
    components: {
      UiButton,
      UiIconAction,
      MenuTop,
      MenuTopMobile
    },
    data() {
      return {
        isActiveCompare: false,
        isActiveFavorite: true,
        isActiveCart: true,
        menuTopList: [
          {
            title: 'О магазине',
            route: '/1'
          },
          {
            title: 'Доставка и оплата',
            route: '/home'
          },
          {
            title: 'Тест-драйв',
            route: '/home'
          },
          {
            title: 'Блог',
            route: '/'
          },
          {
            title: 'Контакты',
            route: '/home'
          },
          {
            title: 'Акции',
            route: '/home'
          }
        ],
        menuIsOpen: false
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

.header {
  &__logo {
    margin-right: 30px;
    height: 43px;

    @media (max-width: $break_md) {
      height: 26px;
    }
  }

  &__top {
    padding-top: 30px;
    padding-bottom: 30px;

    @media (max-width: $break_md) {      
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }

  &__action {
    margin-left: auto;    
    display: flex;
    align-items: center;
  }

  &__menu {
    background-color: $grey-1;
  }

  &__burger {
    height: 40px;
    display: flex;
    align-items: center;

    &._open {
      color: $purple;
    }
  }
}

</style>
