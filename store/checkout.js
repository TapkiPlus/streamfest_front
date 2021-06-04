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
    SET_FORM(state, payload) {
      state.form = { ...state.form, ...payload };
    },
    REMOVE_ERRORS(state) {
      state.errors = [];
    },
    PUSH_ERROR(state, payload) {
      state.errors.push(payload);
    },
    DISABLE_PAY(state, payload) {
      state.disabledPay = payload;
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
      dispatch("userData/saveData", (Object.keys(obj)[0] === 'phone' ? obj.formatInternational : obj), { root: true });
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
      if (!phone || !phone.isValid) commit("PUSH_ERROR", "phone");
      if (state.errors.length) commit("DISABLE_PAY", false);
      else {
        const { data } = await this.$axios.post("/api/create_order", {
          session_id: this.$auth.$storage.getCookie("session_id"),
          firstname,
          lastname,
          email,
          phone
        });
        if (data) {
          fromCheckout &&
            dispatch("userData/saveData", { clickedPay: true }, { root: true });
          window.location.href = data;
        } else {
          commit("DISABLE_PAY", false);
          return false;
        }
      }
    }
  }
};
