export default {
  state() {
    return {
      form: {},
      errors: [],
      disabledPay: false
    };
  },
  mutations: {
    INIT_FORM(state, payload) {
      state.form = payload;
    },
    SET_FORM(state, obj) {
      state.form = { ...state.form, ...obj };
    },
    REMOVE_ERRORS(state) {
      state.errors = [];
    },
    PUSH_ERROR(state, name) {
      state.errors.push(name);
    },
    DISABLE_PAY(state, boolean) {
      state.disabledPay = boolean;
    }
  },
  actions: {
    async getFormValues({ commit }) {
      const { firstname, lastname, email, phone } = (
        await this.$axios.get(
          `/api/get_user_data?session_id=${this.$auth.$storage.getCookie(
            "session_id"
          )}`
        )
      ).data;
      commit("INIT_FORM", { firstname, lastname, email, phone });
    },
    saveData({ commit, dispatch }, obj) {
      dispatch("userData/saveData", obj, { root: true });
      commit("SET_FORM", obj);
    },
    async getPayLink({ state, commit, dispatch }, fromCheckout = false) {
      const { firstname, lastname, email, emailConfirm, phone } = state.form;
      commit("DISABLE_PAY", true);
      commit("REMOVE_ERRORS");
      if (!firstname) commit("PUSH_ERROR", "firstname");
      if (!lastname) commit("PUSH_ERROR", "lastname");
      if (!email) commit("PUSH_ERROR", "email");
      if (fromCheckout && (!emailConfirm || email !== emailConfirm))
        commit("PUSH_ERROR", "emailConfirm");
      if (!phone) commit("PUSH_ERROR", "phone");
      if (state.errors.length) commit("DISABLE_PAY", false);
      else {
        const url = (
          await this.$axios.post("/api/create_order", {
            session_id: this.$auth.$storage.getCookie("session_id"),
            firstname,
            lastname,
            email,
            phone
          })
        ).data;
        if (url) {
          fromCheckout &&
            dispatch("userData/saveData", { clickedPay: true }, { root: true });
          window.location.href = url;
        } else {
          commit("DISABLE_PAY", false);
          return false;
        }
      }
    }
  }
};
