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
    async addItem({ commit }, { t_id, s_id = 0 }) {
     const { data } = await this.$axios.post("/api/add_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id: t_id,
        streamer_id: s_id
      });
      commit("SET_DATA", data)
    },
    async changeQuantity({ commit }, { t_id, increase }) {
      const { data } = await this.$axios.post(
        `/api/${increase ? "add_item_quantity" : "delete_item_quantity"}`,
        {
          session_id: this.$auth.$storage.getCookie("session_id"),
          item_id: t_id
        }
      );
      commit("SET_DATA", data)
    },
    async deleteItem({ commit }, item_id) {
      const { data } = await this.$axios.post("/api/delete_item", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        item_id
      });
      commit("SET_DATA", data)
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
