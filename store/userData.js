export default {
  state() {
    return {
      timerId: null
    };
  },
  mutations: {
    SET_TIMER_ID(state, payload) {
      state.timerId = payload;
    }
  },
  actions: {
    saveData({ state, commit }, obj) {
      clearTimeout(state.timerId);
      commit(
        "SET_TIMER_ID",
        setTimeout(
          () =>
            this.$axios.post("/api/save_user_data", {
              session_id: this.$auth.$storage.getCookie("session_id"),
              ...obj
            }),
          300
        )
      );
    }
  }
};
