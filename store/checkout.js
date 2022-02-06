export default {
  actions: {
    async getPayLink(_, { firstname, lastname, email, phone }) {
      try {
        const { data } = await this.$axios.post("/api/create_order", {
          session_id: this.$auth.$storage.getCookie("session_id"),
          firstname,
          lastname,
          email,
          phone
        });

        document.write(data);
        document.close();
      } catch (e) {
        return false;
      }
    }
  }
};
