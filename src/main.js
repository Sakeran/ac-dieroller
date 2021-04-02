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
