export const state = () => ({
  items:{ "id": 4,
    "tickets": [],
    "session": "d2e33ea5-55c6-4346-8c7c-f5910b4d7baf",
    "total_price": 0  },
  bonuses:0,
  promo:0


})

export const mutations = {
  setBonuses(state,data){
    state.bonuses = data
  },
  setPromo(state,data){
    state.promo = data
  },
  setCart(state,data){
    state.items = data
    console.log(state)
  }
}

export const actions = {
  async fetchCart({commit,state,dispatch}){
     let session_id = this.$auth.$storage.getCookie('session_id')
    console.log('session_id', session_id)
    if(session_id) {
      const responce = await this.$axios.get(`/api/get_cart?session_id=${session_id}`)
      commit('setCart', responce.data)
      //commit('setCategories', cats.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i))
    }

  },
  eraseCart({commit,state}, data) {
    commit('setCart', { })
  },


}

export const getters = {
  getCart: (state) => state.items,


}

