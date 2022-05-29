import VueCookies from 'vue-cookies'

export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {
    isLogin(state) {
      // if (state.userInfo.name) {
      //   return true
      // } else {
      //   return false
      // }

      if (VueCookies.get('userInfo')) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    // vue-cookies -> 쿠키에 저장이 되는 것
    // vuex-persistedstate -> 사용자 정보를  유지
    setUser(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '8h')
      // VueCookies.set('key', value, '설정할시간') ->로그인이 8시간있다가 사라진다.
    },
    logout(state) {
      state.userInfo = {}
      VueCookies.remove('userInfo')
    }
  },
  actions: {}
}
