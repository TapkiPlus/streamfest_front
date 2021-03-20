export default {
  state() {
    return {
      form: {}
    };
  },
  mutations: {
    INIT_FORM(state, payload) {
      state.form = payload;
    },
    SET_FORM(state, { key, value }) {
      state.form[key] = value;
    }
  },
  actions: {
    async getFormValues({ commit }) {
      commit(
        "INIT_FORM",
        await this.$axios.get(
          `/api/get_user_data?session_id=${this.$auth.$storage.getCookie(
            "session_id"
          )}`
        )
      );
    },
    saveData({ commit }, { key, value }) {
      this.$axios.post("/api/save_user_data", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        [key]: value
      });
      commit("SET_FORM", { key, value });
    },
    async getPayLink({ state: { form } }) {
      const { firstname, lastname, email, phone } = form;
      if (!firstname || !lastname || !email || !phone) return false;
      const url = (
        await $axios.post("/api/create_order", {
          session_id: this.$auth.$storage.getCookie("session_id"),
          firstname,
          lastname,
          email,
          phone
        })
      ).data;
      if (url) window.location.href = url;
      else return false;
    }
  },
  getters: {}
};
