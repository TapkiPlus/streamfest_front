export default {
  state() {
    return {
      form: {}
    };
  },
  mutations: {
    SET_FORM(state, { key, value }) {
      state.form[key] = value;
    }
  },
  actions: {
    saveInput({ commit }, input) {
      commit("SET_FORM", input);
      let storage = JSON.parse(localStorage.getItem("checkoutForm"));
      storage = storage
        ? [...storage.filter(item => item.key !== key), input]
        : input;
      localStorage.setItem("checkoutForm", JSON.stringify(storage));
    },
    async getPayLink({ state: { form } }) {
      const { firstname, lastname, email, phone } = form;
      if (Object.entries(form).length === 0) return false;
      return (
        await $axios.post("", {
          firstname,
          lastname,
          email,
          phone
        })
      ).data;
    }
  },
  getters: {
    formValues() {
      return JSON.parse(localStorage.getItem("checkoutForm"));
    }
  }
};
