import { createStore } from "vuex";

import state from "./initialState";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  state,

  mutations,
  actions,
  getters: {
    isActiveRoll: (state) => (rollId) => {
      return state.activeRoll ? state.activeRoll.id == rollId : false;
    },
  },
});
