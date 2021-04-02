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
        { id: "000", name: "Sample D20", type: 20, color: "#f00", count: 1 },
        { id: "001", name: "Sample D10", type: 10, color: "#0f0", count: 2 },
        { id: "002", name: "Sample D6", type: 6, color: "#f0f", count: 3 },
      ],

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

    editRoll(state, rollId) {
      const roll = state.dice.find((r) => r.id == rollId);
      if (!roll) return; // Failing silently seems acceptable for now.

      state.editorActive = true;
      state.rollEditorActive = true;
      state.editedRoll = roll;
    },
  },
});

createApp(App)
  .use(store)
  .mount("#app");
