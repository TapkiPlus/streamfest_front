export default {
  state() {
    return {
      disabledSending: false
    };
  },
  mutations: {
    DISABLE_SENDING(state, payload) {
      state.disabledSending = payload;
    }
  },
  actions: {
    saveData({ state, commit }, obj) {
      if (state.disabledSending) return;
      this.$axios.post("/api/save_user_data", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        ...obj
      });
      commit("DISABLE_SENDING", true);
      setTimeout(() => commit("DISABLE_SENDING", false), 500);
    }
  }
};
