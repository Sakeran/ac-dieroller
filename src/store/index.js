import { createStore } from "vuex";

import state from "./initialState";
import mutations from "./mutations";
import actions from "./actions";

import { saveRolls } from "../storage";

export default createStore({
  state,

  mutations,
  actions,
  getters: {
    isActiveRoll: (state) => (rollId) => {
      return state.activeRoll ? state.activeRoll.id == rollId : false;
    },
  },
  plugins: [
    // Save the rolls configuration whenever it is changed.
    (store) => {
      let lastDice;
      let debounceTimeout;

      store.subscribe((mutation, state) => {
        if (state.dice && state.dice.length && state.dice != lastDice) {
          lastDice = state.dice;

          clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(() => {
            saveRolls(lastDice);
          }, 0.25);
        }
      });
    },
  ],
});
