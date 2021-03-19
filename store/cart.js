export default {
  state() {
    return {
      data: {}
    };
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {
    async fetchCart({ commit }) {
      const session_id = this.$auth.$storage.getCookie("session_id");
      session_id &&
        commit(
          "SET_DATA",
          (await this.$axios.get(`/api/get_cart?session_id=${session_id}`)).data
        );
        console.log((await this.$axios.get(`/api/get_cart?session_id=${session_id}`)).data);
    },
    async addItem({ state, dispatch }, { t_id, s_id = 0 }) {
      await this.$axios.post("/api/add_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: t_id,
        streamer_id: s_id
      });
      dispatch("fetchCart");
    },
    async changeQuantity({ state, dispatch }, { t_id, quantity }) {
      await this.$axios.post("/api/change_item_quantity", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: t_id,
        quantity
      });
      dispatch("fetchCart");
    },
    async deleteItem({ state, dispatch }, { t_id }) {
      await this.$axios.post("/api/delete_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: t_id
      });
      dispatch("fetchCart");
    }
    //  addToCart({ dispatch }, { t_id, s_id = 0 }) {
    // let cart = JSON.parse(localStorage.getItem("cart")),
    //   ticketObj = { ticketId, count: 1, starId };
    // if (cart) {
    //   cart.find(item => item.ticketId === ticketId && item.starId === starId)
    //     ? cart.forEach(item => {
    //         if (item.ticketId === ticketId && item.starId === starId) {
    //           ++item.count;
    //           return item;
    //         }
    //       })
    //     : cart.push(ticketObj);
    // } else cart = [ticketObj];
    // commit("SET_CART", cart);
    // localStorage.setItem("cart", JSON.stringify(cart));
    // this.$router.push("cart");
    // },
    // changeCount({ state, commit }, { ticketId, starId, count }) {
    //   const cart = state.cart.map(item => {
    //     if (item.ticketId === ticketId && item.starId === starId) {
    //       item.count = count;
    //       return item;
    //     }
    //   });
    //   commit("SET_CART", cart);
    //   localStorage.setItem("cart", JSON.stringify(cart));
    // },
    // delete({ state, commit }, { ticketId, starId }) {
    //   const cart = state.cart.filter(
    //     item => item.ticketId !== ticketId && item.starId !== starId
    //   );
    //   commit("SET_CART", cart);
    //   cart.length
    //     ? localStorage.setItem("cart", JSON.stringify(cart))
    //     : localStorage.removeItem("cart");
    // }
  },
  getters: {
    cart({ data }) {
      return data;
    },
    cartCount({ data: { cartitem_set } }) {
      return cartitem_set
        ? cartitem_set.reduce((acc, { quantity }) => acc + quantity, 0)
        : 0;
    }
  }
};
