import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
import userInfo from './modules/userInfo'
import message from './modules/message'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    // cart,
    userInfo,
    message
  },
  strict: debug
})
