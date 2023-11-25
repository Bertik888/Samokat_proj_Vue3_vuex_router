<template>
  <!-- mb-5 - пока добавил, прибить футер к низу  -->
  <div class="cart-page container mb-5">
    <div class="row">
      <div class="text-title mb-4">
        Моя корзина
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center p-5 mb-5 border rounded-2 mw-100" style="background-color: #F4F7FB;">
        <img src="@/assets/images/cart_empty.png" alt="cart_empty">
        <div class="text-title-1 mt-2 mb-2">
          Ваша корзина пуста
        </div>
        <div class="text-subtitle-1 mb-3">
          Добавьте в нее товары из каталога
        </div>
        <ui-button      
          title="Перейти в католог"
          bg-color="bg-purple"
          text-color="color-white"
        />
      </div>

      <div class="text-title mb-4">
        Рекомендуем вам
      </div>
      <div 
        v-for="item in products"
        :key="item.id"
        class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
      >      
        <card-product 
          :item="item"        
        />
      </div>

      <div class="text-subtitle-1 mb-3" style="color: #5D6C7B;">
        2 товара
      </div>
      <div class="row">
        <div class="col-lg-8">
          <!-- mb-3 - на 968 чтоб не слипалось, верно ли это ? то же самое с card banner на 768, добавить mb ? меню бургера при переходах по страницам в меню - блог - тест - драйв и других -->
          <div class="wrapper d-flex align-items-center  justify-content-between mb-4">
            <div class="d-flex align-items-center">
                <div class="wrapper__image border rounded-2 me-3" style="background-color: #F4F7FB;">
                <img src="@/assets/images/banner_25.png" alt="banner_25">
              </div>

              <div class="wrapper__info">
                <div class="text-subtitle mb-2">Kugoo Kirin M4</div>
                <div class="d-flex align-items-center text-subtitle-2">
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
                  <div>+ 2 подарка</div>
                </div>              
              </div>
            </div>
            <ui-counter 
              v-model="counter"          
            />
            <div class="text-subtitle">
              {{ formatPrice(29900) }} 
            </div>
            <i class="bi bi-trash cursor-pointer"></i>
            <i class="bi bi-trash-fill"></i>
          </div>

          <div class="border rounded-2 p-3">
            <div class="row g-3">
              <div class="col-auto">
                <change-setting 
                  title="Комплектация"
                  sub-title="стандартная"
                />
              </div>
              <div class="col-auto">
                <change-setting 
                  title="Подарочная упаковка"
                  color="#FA6BFD"
                />
              </div>
              <div class="col-auto">
                <change-setting 
                  title="Гарантия"
                  sub-title="1 год"
                />
              </div>
              <div class="col-auto">
                <change-setting 
                  title="Тип покрышки"
                  sub-title="шоссейная"
                />
              </div>
              <div class="col-auto">
                <change-setting 
                  title="Доп.услуги"
                  sub-title="гидроизоляция"
                />
              </div>
            </div><!-- row -->
          </div>

          <hr class="line">

        </div><!-- col-8 -->

        <div class="col-lg-4 mb-4">          
          <div class="border rounded-2 p-4" style="background-color: #F4F7FB;">
            <div class="text-subtitle-2 mb-2">Итого</div>
            <div class="text-title-1">
              {{ formatPrice(58800) }} 
            </div>

            <hr class="line">

            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-subtitle-2">Стоимость товаров</div>
              <div class="text-title-2">{{ formatPrice(58800) }}</div>
            </div>

            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-subtitle-2">Сумма скидки</div>
              <div class="text-title-2">{{ formatPrice(8000) }}</div>
            </div>

            <div class="d-flex align-items-center justify-content-between">
              <div class="text-subtitle-2">Итого без учета доставки</div>
              <div class="text-title-2">{{ formatPrice(50800) }}</div>
            </div>

            <hr class="line">

            <div class="d-flex align-items-center justify-content-center  mb-3">
              <ui-button      
                title="Оформить заказ"
                bg-color="bg-purple"
                text-color="color-white"
                class="full-width"       
              />
            </div>

            <div class="d-flex align-items-center justify-content-between">
              <label for="checkbox">
                <input type="checkbox">
              </label>
              <div class="text-subtitle-2 ms-3">
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и 
                <a href="#">политикой конфиденциальности</a>              
              </div>
            </div>

          </div><!-- border -->
        </div><!-- col-4 -->

        <div class="col-lg-8">
          <div class="text-subtitle fw-bolder mb-4">
            Шаг 1. Выберите способ доставки
          </div>
          <delivery-card class="mb-5" />

          <div class="text-subtitle fw-bolder mb-4">
            Шаг 2. Укажите данные получателя
          </div>

          <div class="row g-3 text-subtitle-2 mb-3">

            <div class="col-6">
              <label>Ваша фамилия
                <ui-input 
                  v-model="inputValue"
                  placeholder="Введите фамилию"
                  bg-color="bg-grey-1"
                  text-color="color-black-1"                
                />
              </label>              
            </div>

            <div class="col-6">
              <label>Ваше имя
                <ui-input 
                  v-model="inputValue"
                  placeholder="Введите имя"
                  bg-color="bg-grey-1"
                  text-color="color-black-1"                
                />
              </label>         
            </div>

            <div class="col-6">
              <label>Ваш телефон*
                <ui-input 
                  v-model="inputValue"
                  placeholder="+7(___)__-__ -__"
                  bg-color="bg-grey-1"
                  text-color="color-black-1"                
                />
              </label>              
            </div>

            <div class="col-6">
              <label>Ваш email
                <ui-input 
                  v-model="inputValue"
                  placeholder="Введите email"
                  bg-color="bg-grey-1"
                  text-color="color-black-1"                
                />
              </label>              
            </div>

            <div class="d-flex align-items-center justify-content-end">
              <label class="d-flex align-items-center" for="checkbox">
                <input type="checkbox">
              </label>
              <div class="ms-3">
                Сообщать мне об акциях и скидках             
              </div>
            </div>
          </div><!-- row -->

          <div class="text-subtitle-2 mb-2">Комментарий</div>
          <form class="mb-5" action="">
            <label for="message"></label>
            <textarea 
              name="user_message" 
              id="message" 
              cols="70" 
              rows="10"
              placeholder="Оставьте пожелание или комментарий к заказу"
            >
            </textarea>
          </form>

          <div class="text-subtitle fw-bolder mb-4">
            Шаг 3. Выберите способ оплаты
          </div>

          <pay-card />

        </div><!-- col-lg-8 -->

        
      </div><!-- row -->

      
        

    </div><!-- row -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UiButton from '@/components/Ui/UiButton.vue'
import CardProduct from '@/components/CardProduct.vue'
import UiCounter from '@/components/Ui/UiCounter.vue'
import formatMixin from '@/mixins/format.mixin.vue'
import ChangeSetting from '@/components/ChangeSetting.vue'
import DeliveryCard from '@/components/DeliveryCard.vue'
import UiInput from '@/components/Ui/UiInput.vue'
import PayCard from '@/components/PayCard.vue'


  export default {
    name: 'CartPage',
    components: {
      UiButton,
      CardProduct,
      UiCounter,
      ChangeSetting,
      DeliveryCard,
      UiInput,
      PayCard
    },
    data() {
      return {
        cardsCart: [],
        counter: 0,
        inputValue: ''
      }
    },
    mixins: [formatMixin],
    mounted() {
      this.$store.dispatch('products/getProducts')
    },
    computed: {
      ...mapGetters({
        products: 'products/products'
      }),
    },
    methods: {
      getProduct() {
        this.$store.dispatch('product/getProduct', Number(this.$route.params.product_id))
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.wrapper {

  @media (max-width: $break_md) {
    // padding: 5px;
  } 

  &__image {
    width: 75px;
    height: 75px;
    // border-radius: 5px;
    overflow: hidden;
    background-repeat: no-repeat !important;
    background-position: center;
    background-size: cover;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:before {
      content: "";
      padding-top: 100%;
      float: left;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    @media (max-width: $break_md) {
      font-size: 12px;
      // display: flex;
      // flex-direction: column;
  }

  }
}

// textarea {
//   padding: 10px;
//   resize:none;
//   outline:none;
// }

</style>
