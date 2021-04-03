import { loadRolls } from "../storage";

export default {
  newRoll({ commit }) {
    const newRoll = {
      id: `${Date.now()}`,
      name: "New Roll",
      count: 1,
      type: 20,
    };

    commit("addRoll", newRoll);
    commit("editRoll", newRoll.id);
  },
  rollDice({ commit, state }) {
    commit("closeEditorView");

    const roll = state.activeRoll;

    const results = [];
    for (let i = 0; i < roll.count; i++) {
      results.push(1 + Math.floor(Math.random() * roll.type));
    }

    commit("setRollResults", results);
    commit("refreshRollId");
  },
  resetRolls({ commit }) {
    commit("clearRolls");

    const roll = {
      id: `${Date.now()}`,
      name: "Twenty-Sided",
      count: 1,
      type: 20,
    };

    commit("addRoll", roll);
    commit("selectRoll", roll.id);
  },
  loadRolls({ commit, dispatch }) {
    const dice = loadRolls();

    if (!dice.length) {
      return dispatch("resetRolls");
    }

    commit("setRolls", dice);
    commit("selectRoll", dice[0].id);
  },
};
