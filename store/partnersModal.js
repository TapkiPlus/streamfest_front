export default {
    state() {
      return {
        visibility: false
      };
    },
    mutations: {
      SET_VISIBILITY(state, payload) {
        state.visibility = payload;
      },
    },
    actions: {
        open({commit}) {
            commit("SET_VISIBILITY", true)
            document.body.style.overflow = "hidden";
        },
        close({commit}) {
            commit("SET_VISIBILITY", false)
            document.body.style.overflow = "visible";
        }
    }
  };
  