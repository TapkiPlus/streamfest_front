export default {
  state() {
    return {
      cart: []
    };
  },
  mutations: {
    SET_CART(state, cart) {
      state.cart = cart ?? [];
    }
  },
  actions: {
    addToCart({ commit }, { ticketId, starId = null }) {
      let cart = JSON.parse(localStorage.getItem("cart")),
        ticketObj = { ticketId, count: 1, starId };
      if (cart) {
        cart.find(item => item.ticketId === ticketId && item.starId === starId)
          ? cart.forEach(item => {
              if (item.ticketId === ticketId && item.starId === starId) {
                ++item.count;
                return item;
              }
            })
          : cart.push(ticketObj);
      } else cart = [ticketObj];
      commit("SET_CART", cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.$router.push("cart");
    },
    changeCount({ state, commit }, { ticketId, starId, count }) {
      const cart = state.cart.map(item => {
        if (item.ticketId === ticketId && item.starId === starId) {
          item.count = count;
          return item;
        }
      });
      commit("SET_CART", cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    delete({ state, commit }, { ticketId, starId }) {
      const cart = state.cart.filter(
        item => item.ticketId !== ticketId && item.starId !== starId
      );
      commit("SET_CART", cart);
      cart.length
        ? localStorage.setItem("cart", JSON.stringify(cart))
        : localStorage.removeItem("cart");
    }
  },
  getters: {
    cart({ cart }) {
      return cart;
    },
    cartCount({ cart }) {
      return cart.reduce((acc, { count }) => acc + count, 0);
    }
  }
};
