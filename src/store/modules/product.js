import { getProductById } from '@/api/products'

const state = () => ({
  product: undefined
})

const mutations = {
  SET_PRODUCT(state, payload) {
    state.product = payload
  }
}

const actions = {
  async getProduct({ commit }, id) {
    getProductById(id)
      .then(response => {
        commit('SET_PRODUCT', response)
      })
  }
}

const getters = {
  product: state => state.product
}

export default {
  namespaced: true,
  state,      //data
  mutations,  //изменение данных state
  actions,    //methods
  getters     //computed
}
