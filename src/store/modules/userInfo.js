import api from '../../api'
import http from '../../http'

// initial state
const state = {
  imInfo: {},
  doctorInfo: {}
}

// getters
const getters = {}

// actions
const actions = {
  getUserInfo ({commit}) {
    return new Promise((resolve, reject) => {
      http.post(api.getUserInfo).then(res => {
        if (+res.code === 0) {
          let data = {
            imInfo: res.data.im_info,
            doctorInfo: res.data.doctor_info
          }
          commit('setStates', data)
          resolve(data)
        } else {
          // return Promise.reject()
        }
      }, reject)
    })
  }
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
  setStates (state, data) {
    for (let key in data) {
      state[key] = data[key]
    }
  }
  // setProducts (state, products) {
  //   state.all = products
  // },
  //
  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
