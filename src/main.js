import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      editorActive: false,
      rollEditorActive: false,
      // Stub dice data
      dice: [
        { id: "000", name: "Sample D20", type: 20, color: "#f00", count: 1 },
        { id: "001", name: "Sample D10", type: 10, color: "#0f0", count: 2 },
        { id: "002", name: "Sample D6", type: 6, color: "#f0f", count: 3 },
      ],
    };
  },

  mutations: {
    openEditorView(state) {
      state.editorActive = true;
    },
    closeEditorView(state) {
      state.editorActive = false;
    },
    toggleEditorView(state) {
      state.editorActive = !state.editorActive;
    },
  },
});

createApp(App)
  .use(store)
  .mount("#app");
