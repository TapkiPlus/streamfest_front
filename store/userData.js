export default {
  actions: {
    saveData(_, obj) {
      this.$axios.post("/api/save_user_data", {
        session_id: this.$auth.$storage.getCookie("session_id"),
        ...obj
      });
    }
  }
};
