<template>

  <!-- UiBurger -->
  <div class="wrapper">
    <div class="container mb-4 bg-purple p-5 ">
      <ui-burger 
        class="mb-4"
        :is-open="isOpenBurger1" 
        @click="isOpenBurger1 = !isOpenBurger1"  
      />
      <ui-burger
        :is-open="isOpenBurger2"   
        color="white"
        @click="isOpenBurger2 = !isOpenBurger2"  

      />
    </div>    
  </div>


  <!-- UiCardTopMounth -->
  <div class="wrapper">
    <div class="container mb-4">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <ui-card-top-mounth
            :image="require('@/assets/images/banner_7.jpg')"
            top-month="Товар месяца"
            title="Kugoo Kirin M4"
            sub-title="29 900 ₽"
          />
        </div>
      </div>      
    </div>
  </div>


  <!-- UiCardHelp -->
  <div class="wrapper">
    <div class="container mb-4">      
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <ui-card-help 
            :image="require('@/assets/images/banner_6.png')"
            title="Задать вопрос менеджеру"
            @clickHelp="onClickHelp"    
          />
        </div>
      </div>
    </div>
  </div>


  <!-- UiCardBadge -->
  <div class="wrapper">
    <div class="container mb-4">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <ui-card-badge
            :image="require('@/assets/images/banner_4.jpg')"        
            title="Менеджер ответит на любой ваш вопрос о продуктах Kugoo"
            text-action="Задать вопрос"   
            @clickBtn="onClickBadge"    
          />
        </div>
      </div>      
    </div>    
  </div>


  <!-- CardCatalog -->

  <div class="wrapper">
    <div class="container mb-4">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
          <card-catalog
            :image="require('@/assets/images/banner_5.jpg')"
            title="Электровелосипеды"
            sub-title="от 29 900 ₽"
            @clickCatalog="onClickCatalog"
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <card-catalog
            :image="require('@/assets/images/banner_5.jpg')"
            title="Электровелосипеды"
            sub-title="от 29 900 ₽"
          />
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <card-catalog
            :image="require('@/assets/images/banner_5.jpg')"
            title="Электровелосипеды"
            sub-title="от 29 900 ₽"
          />
        </div>
      </div>
      
    </div>    
  </div>

  



  <!-- UiBanner -->

  <!-- DRON -->

  <div class="container-fluid mb-4">
    <ui-banner
      bg="radial-gradient(708.28% 82.86% at 23.30% 72.57%, #595959 0%, #3B3E46 100%)"
      :bg-image="require('@/assets/images/banner_3.png')"
      bg-size="contain"
      :bg-image-up="true"
      bg-position="center left"
    >
      <div class="col-12 col-md-6"></div>
    
      <div class="col-12 col-md-6">
        <ui-badge       
          title="Акция"
          bg-color="bg-red"
          class="mb-4"
        />
        <h2 class="mb-2">Бесплатная доставка электросамокатов по России до 01.09</h2>
        <ui-button      
          title="Подробнее"
          bg-color="bg-white"
          text-color="color-purple"
        />
      </div>
    </ui-banner>  
  </div>


  <div class="container-fluid mt-4 mb-4">
    <ui-banner
        bg="linear-gradient(19deg, #6F73EE 0%, rgba(111, 115, 238, 0.00) 100%)"
        :bg-image="require('@/assets/images/banner_1.jpg')"
        bg-size="cover"
        :bg-image-up="false"
      >
      <div class="col-12 col-md-6">
        <ui-badge       
          title="Новинка"
          bg-color="bg-green"
          class="mb-4"        
        />
        <h2 class="mb-2">Электросамокаты Kugoo Kirin от официального дилера</h2>
        <p class="mb-4">с бесплатной доставкой по РФ от 1 дня</p>
        <ui-button      
          title="Перейти в католог"
          bg-color="bg-white"
          text-color="color-purple"
        />
      </div>
    </ui-banner>  
  </div>

  <div class="container-fluid mt-4 mb-4">
    <ui-banner
        bg="radial-gradient(544.32% 83.35% at 75.14% 62.23%, #A6A9FF 0%, #6F73EE 100%)"
        :bg-image="require('@/assets/images/samokat_wheel.png')"
        bg-size="contain"
        :bg-image-up="true"
      >
      <div class="col-12 col-md-6">
        <ui-badge       
          title="Новинка"
          bg-color="bg-green"
          class="mb-4"        
        />
        <h2 class="mb-2">Электросамокаты Kugoo Kirin от официального дилера</h2>
        <p class="mb-4">с бесплатной доставкой по РФ от 1 дня</p>
        <ui-button      
          title="Перейти в католог"
          bg-color="bg-white"
          text-color="color-purple"
        />
      </div>
    </ui-banner>  
  </div>

  <div class="container-fluid mt-4 mb-4">
    <ui-banner
      bg="linear-gradient(19deg, #6F73EE 0%, rgba(111, 115, 238, 0.00) 100%)"
      :bg-image="require('@/assets/images/banner_2.jpg')"
      bg-size="cover"
      :bg-image-up="false"
      :min-mode="true"
    >
      <div class="col-12">
        <h2>Каталог товаров</h2>
      </div>
    </ui-banner>  
  </div>


  <!-- Button-->
  <div class="container">  
    <div class="wrapper">

      <!-- Button-->
      <div class="row">
        <div class="col-12" style="margin-bottom: 30px;">
          <ui-button 
            class="full-width"
            title="Оформить заказ"
            bg-color="bg-purple"
            @onClick="onClick"        
          />
        </div>

        <div class="col-12" style="margin-bottom: 30px;">
          <ui-button 
            title="Оформить заказ"
            size="md"
            bg-color="bg-orange"
          />
        </div>

        <div class="col-12" style="margin-bottom: 30px;">
          <ui-button 
            title="Оформить заказ"
            bg-color="bg-purple-1"
            :active="true"
          />
        </div>

        <div class="col-12" style="margin-bottom: 30px;">
          <ui-button 
            title="Оформить заказ"
            bg-color="bg-grey"
            :disabled="true"
          />
        </div>
      </div>

    </div>


    <!-- Icon -->

    <div class="wrapper">
      <icon-basket 
        size="200"
        color="#6F73EE"
        :active="true"
      />
      <icon-basket 
        size="200"
        color="#6F73EE"
        :active="false"
      />
      <icon-heart
        size="200"
        color="#EE685F"
        :active="true"
      />
      <icon-heart
        size="200"
        color="#EE685F"
        :active="false"
      />
      <icon-compare
        size="200"
        color="#6F73EE"
        :active="true"
      />
      <icon-compare       
        size="200"
        color="#6F73EE"
        :active="false"
      />
    </div>

    <!-- Icon-action -->

    <div class="wrapper">
      <ui-icon-action 
        color="#6F73EE"
        type="favorite"
        :active="true" 
      />
      <ui-icon-action 
        color="#6F73EE"
        type="favorite"
        :active="false"
      />
      <ui-icon-action 
        color="#6F73EE"
        type="favorite"
        :active="false"
        title="favorite"
      />
      <ui-icon-action 
        color="#6F73EE"
        type="cart"
        :active="true"
      />
      <ui-icon-action 
        color="#6F73EE"
        type="cart"
        :active="false"
      />
      <ui-icon-action 
        color="#6F73EE"
        type="compare"
        :active="true"
      />
      <ui-icon-action 
        color="#6F73EE"
        type="compare"
        :active="false"
        :is-border="false"
      />      
    </div>


    <!-- Badge -->

    <div class="wrapper">
      <ui-badge 
        title="ХИТ"
        bg-color="bg-red"      
        :style="{ textTransform: 'uppercase' }"  
      />
    </div>

    <div class="wrapper">
      <ui-badge 
        title="Новинка"
        bg-color="bg-green"     
      />
    </div>


    <!-- Skill -->

    <div class="wrapper">
      <ui-skill
        title="Гарантия 1 год"
        subtitle="на весь ассортимент"      
      />
    </div>

    <div class="wrapper">
      <ui-skill
        title="Рассрочка"
        subtitle="от 6 месяцев"      
      />
    </div>

    <div class="wrapper">
      <ui-skill
        title="Подарки"
        subtitle="и бонусы к покупкам"      
      />
    </div>


    <!-- Ui-counter -->
    <div class="wrapper">
      <ui-counter
        v-model="counter"
      />
    </div>


    <!-- CardProduct -->
    <div class="wrapper">
      <div class="row">
        <div 
          v-for="item in products"
          :key="item.id"
          class="col-12 col-sm-6 col-lg-4">
          <card-product 
            :item="item"
          />
        </div>
      </div>
    </div>


    <!-- Menu-top -->
    <div class="wrapper" style="margin-bottom: 30px;">
      <menu-top
        :items="menuTopList"
      />
    </div>
    
    
    

  </div>
</template>

<script>
import UiButton from '@/components/Ui/UiButton.vue'
import UiBadge from '@/components/Ui/UiBadge.vue'
import UiSkill from '@/components/Ui/UiSkill.vue'
import IconBasket from '@/components/Ui/icons/IconBasket.vue'
import IconHeart from '@/components/Ui/icons/IconHeart.vue'
import IconCompare from '@/components/Ui/icons/IconCompare.vue'
import UiIconAction from '@/components/Ui/UiIconAction.vue'
import UiCounter from '@/components/Ui/UiCounter.vue'
import MenuTop from '@/components/MenuTop.vue'
import CardProduct from '@/components/CardProduct.vue'
import UiBanner from '@/components/Ui/UiBanner.vue'
import UiCardBadge from '@/components/Ui/UiCardBadge.vue'
import CardCatalog from '@/components/CardCatalog.vue'
import UiBurger from '@/components/Ui/UiBurger.vue'
import UiCardHelp from '@/components/Ui/UiCardHelp.vue'
import UiCardTopMounth from '@/components/Ui/UiCardTopMounth.vue'






export default {
  name: 'App',
  components: {
    UiBanner,

    UiCardBadge,
    CardCatalog,
    UiBurger,
    UiCardHelp,
    UiCardTopMounth,
    
    UiButton,
    UiBadge,
    UiSkill,
    IconBasket,
    IconHeart,
    IconCompare,
    UiIconAction,
    UiCounter,
    MenuTop,
    CardProduct
    
  },
  data() {
    return {
      counter: 0,
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
      products: [
        {
          name: 'Kugoo Kirin M4',
          id: 1,
          isHit: true,
          isCompare: true,
          price: 30000,
          sale: 10,
          stock: 1
        },
        {
          name: 'Kugoo Kirin M4',
          id: 2,
          isHit: false,
          isCompare: false,
          price: 25000,
          sale: 0,
          stock: 0
        },
        {
          id: 1,
          cat_id: 1,
          is_new: false,
          is_top: true,
          name: 'Kugoo Kirin M4',
          article: '2200000000026',
          views_count: 0,
          buy_count: 0,
          sale: 10,
          price: 39900,
          image: '1_0.jpeg',
          images: ['1_1.jpeg', '1_2.jpeg', '1_3.jpeg'],
          equipped: [
            {
              type: 'base',
              name: 'Базовая',
              price: 0,
              stock: 5
            },
            {
              type: 'max',
              name: 'Версия MAX',
              price: 3000,
              stock: 9
            },
            {
              type: 'vip',
              name: 'VIP-версия',
              price: 9000,
              stock: 2
            }
          ],
          guarantee: [
            {
              type: 'Стандартная 1 год',
              name: 'Базовая',
              price: 0
            },
            {
              type: 'extended',
              name: 'Расширенная 2 года',
              price: 2990
            }
          ],
          additional_services: [
            {
              type: 'none',
              name: 'Нет',
              price: 0
            },
            {
              type: 'setting',
              name: 'Настройка',
              price: 1520
            },
            {
              type: 'Гидроизоляция',
              name: 'waterproofing',
              price: 3850
            },
            {
              type: 'Гидроизоляция и настройка',
              name: 'waterproofing_and_setting',
              price: 4500
            }
          ],
          description: '<h2>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h2><p>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p><p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>',
          tags: ['Для города', 'Быстрый', 'Комфортный', 'Легкий'],
          age_category: 'adult', // child || adult
          options: {
            weight: {
              name: 'Масса нетто',
              value: 22,
              unit: 'кг'
            },
            power: {
              name: 'Мощность',
              value: 500,
              unit: 'W'
            },
            battery: {
              name: 'Аккумулятор',
              value: 10000,
              unit: 'mAh'
            },
            max_speed: {
              name: 'Максимальная скорость',
              value: 40,
              unit: 'км/ч'
            },
            max_mileage: {
              name: 'Максимальный пробег',
              value: 30,
              unit: 'км'
            },
            charge_time: {
              name: 'Время полной зарядки',
              value: 6,
              unit: 'часов'
            },
            max_weight: {
              name: 'Максимальная нагрузка',
              value: 140,
              unit: 'кг'
            },
            wheel_size: {
              name: 'Размер колес',
              value: 10,
              unit: 'дюймов'
            },
            wheel_type: {
              name: 'Тип колес',
              value: 'Надувные',
              unit: ''
            },
            dimensions: {
              name: 'Габариты (ДВШ), см',
              value: '113/86-116/60',
              unit: ''
            },
            illumination: {
              name: 'Подсветка',
              value: 'Передняя фара, стоп-сигнал, боковая',
              unit: ''
            },
            drive: {
              name: 'Привод',
              value: 'Задний',
              unit: ''
            },
            brake_system: {
              name: 'Тормозная система',
              value: 'Передняя и задняя дисковая',
              unit: ''
            },
            equipment: {
              name: 'Комплектация',
              value: 'Товарный чек, гарантийный талон, з/у',
              unit: ''
            },
            guarantee: {
              name: 'Гарантия',
              value: 12,
              unit: 'месяцев'
            }
          }
        }
      ],
      isOpenBurger1: false,
      isOpenBurger2: true

    }
  },

  methods: {
    onClickBadge() {
      console.log('onClickBadge')
    },
    onClickCatalog() {
      console.log('onClickCatalog')
    },
    onClickHelp() {
      console.log('onClickHelp')
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 60px;
  }
</style>
