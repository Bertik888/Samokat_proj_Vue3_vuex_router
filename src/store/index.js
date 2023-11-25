import { createStore } from 'vuex'
import products from './modules/products'
import product from './modules/product'


export default createStore({
  modules: {
    products,
    product
  }
})
