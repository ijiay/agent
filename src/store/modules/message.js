// import api from '../../api'
// import http from '../../http'

// initial state
const state = {
  roomList: []
}

// getters
const getters = {

}

// actions
const actions = {
  // getRoomList({commit}) {
  //   return http.post(api.getRoomList).then(res => {
  //     if (+res.code === 0) {
  //       let roomList = res.data.room_list.map((item, index) => {
  //         item.msgList = []
  //         item.currentPage = 1
  //         // if (!index) {
  //         //   this.currentRoom = item
  //         // }
  //         const lastName = item.last_msg_name
  //         item.member_list.forEach(member => {
  //           if (member.member_name === lastName) {
  //             item.avatar = member.member_photo
  //           }
  //         })
  //         return item
  //       })
  //       let data = {
  //         roomList
  //       }
  //       commit('setStates', data)
  //     } else {
  //       // EventBus.$emit('error', res.msg)
  //     }
  //   }).catch(() => {
  //   })
  // }
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
