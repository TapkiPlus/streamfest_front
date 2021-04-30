export default {
  state() {
    return {
      data: {},
      loading: true
    };
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async fetchCart({ commit }) {
      commit("SET_LOADING", true);
      const session_id = this.$auth.$storage.getCookie("session_id");
      session_id &&
        commit(
          "SET_DATA",
          (await this.$axios.get(`/api/get_cart?session_id=${session_id}`)).data
        );
      commit("SET_LOADING", false);
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
    totalCount(state) {
      return state.data.cartitem_set
        ? state.data.cartitem_set.reduce(
            (acc, { quantity }) => acc + quantity,
            0
          )
        : 0;
    }
  }
};
