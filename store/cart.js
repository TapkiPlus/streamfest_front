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
    },
    async addItem({ dispatch }, { t_id, s_id = 0 }) {
      await this.$axios.post("/api/add_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: t_id,
        streamer_id: s_id
      });
      dispatch("fetchCart");
    },
    async changeQuantity({ dispatch }, { t_id, increase }) {
      await this.$axios.post(
        `/api/${increase ? "add_item_quantity" : "delete_item_quantity"}`,
        {
          session_id: this.$auth.$storage.getCookie("session_id"),
          item_id: t_id
        }
      );
      dispatch("fetchCart");
    },
    async deleteItem({ dispatch }, item_id) {
      await this.$axios.post("/api/delete_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id
      });
      dispatch("fetchCart");
    }
  },
  getters: {
    totalCount({ data: { cartitem_set } }) {
      return cartitem_set
        ? cartitem_set.reduce((acc, { quantity }) => acc + quantity, 0)
        : 0;
    }
  }
};
