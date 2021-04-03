export default {
  openEditorView(state) {
    state.editorActive = true;
    state.rollEditorActive = false;
  },
  closeEditorView(state) {
    state.editorActive = false;
    state.rollEditorActive = false;
  },
  toggleEditorView(state) {
    state.editorActive = !state.editorActive;
    state.rollEditorActive = false;
  },

  selectRoll(state, rollId) {
    const roll = state.dice.find((r) => r.id == rollId);
    if (!roll) return; // Failing silently seems acceptable for now.

    state.activeRoll = roll;
  },

  addRoll(state, roll) {
    state.dice = [...state.dice, roll];
  },

  editRoll(state, rollId) {
    const roll = state.dice.find((r) => r.id == rollId);
    if (!roll) return; // Failing silently seems acceptable for now.

    state.editorActive = true;
    state.rollEditorActive = true;
    state.editedRoll = roll;
  },

  updateRoll(state, roll) {
    state.dice = state.dice.map((r) => {
      if (r.id !== roll.id) return r;
      return {
        id: roll.id,
        name: roll.name || r.name || "Untitled Roll",
        type: parseInt(roll.type || r.type || "20"),
        count: parseInt(roll.count || r.count || "1"),
      };
    });

    // Update the active roll if necessary.
    if (state.activeRoll.id === roll.id) {
      state.activeRoll = state.dice.find((r) => r.id == roll.id);
    }
  },

  deleteRoll(state, rollId) {
    state.dice = state.dice.filter((r) => r.id !== rollId);

    if (
      state.rollEditorActive &&
      state.editedRoll &&
      state.editedRoll.id === rollId
    ) {
      state.rollEditorActive = false;
    }

    if (state.activeRoll && state.activeRoll.id == rollId) {
      state.activeRoll = null;
    }
  },

  setRollResults(state, results) {
    state.rollResults = results;
  },

  refreshRollId(state) {
    state.rollResultId = Date.now();
  },
};
