import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      // Layout State
      editorActive: false,
      rollEditorActive: false,

      // Roll / Dice Data
      // Stub
      dice: [
        { id: "000", name: "Sample D20", type: 20, count: 1 },
        { id: "001", name: "Sample D10", type: 10, count: 2 },
        { id: "002", name: "Sample D6", type: 6, count: 3 },
      ],

      activeRoll: null,

      // Roll Editor State
      editedRoll: null,

      // Roll View State
      rollResultId: 0,
      rollResults: [],
    };
  },

  mutations: {
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
  },
  actions: {
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
  },
  getters: {
    isActiveRoll: (state) => (rollId) => {
      return state.activeRoll ? state.activeRoll.id == rollId : false;
    },
  },
});

createApp(App)
  .use(store)
  .mount("#app");
