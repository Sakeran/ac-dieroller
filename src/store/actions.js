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
};
