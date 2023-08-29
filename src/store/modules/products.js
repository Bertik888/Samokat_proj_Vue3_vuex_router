import { getProducts } from '@/api/products'

const state = () => ({
  products: []
})

const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  }
}

const actions = {
  async getProducts({ commit }) {
    getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response)
      })
  }
}

const getters = {
  products: state => state.products
}

export default {
  namespaced: true,
  state,      //data
  mutations,  //изменение данных state
  actions,    //methods
  getters     //computed
}
