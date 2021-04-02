<template>
  <div class="main-grid">
    <div class="grid-sections">
      <RollView :editorActive="editorActive" />
      <EditorView
        @toggle-editor="toggleEditor"
        :editorActive="editorActive"
        rollEditorActive
        :dice="dice"
      />
    </div>
    <div class="main-button"></div>
    <MainButton @click="onMainClick" text="Roll" />
  </div>
</template>

<script>
import RollView from "./components/RollView";
import EditorView from "./components/EditorView";
import MainButton from "./components/MainButton";
import { onBeforeMount } from "vue";

export default {
  name: "App",
  components: {
    RollView,
    EditorView,
    MainButton,
  },
  data() {
    return {
      editorActive: false,
      // Stub dice data
      dice: [
        { id: "000", name: "Sample D20", type: 20, color: "#f00", count: 1 },
        { id: "001", name: "Sample D10", type: 10, color: "#0f0", count: 2 },
        { id: "002", name: "Sample D6", type: 6, color: "#f0f", count: 3 },
      ],
    };
  },
  methods: {
    onMainClick() {
      // Stub
    },
    toggleEditor() {
      this.editorActive = !this.editorActive;
    },
  },
  setup() {
    onBeforeMount(() => {
      // Setup listener to determine viewport's inner height.

      let windowHeight = -1;
      const setVh = () => {
        if (windowHeight === window.innerHeight) return;

        windowHeight = window.innerHeight;
        document.documentElement.style.setProperty(
          "--vh",
          `${windowHeight * 0.01}px`
        );
      };

      // Note - Listening on the 'resize' event doesn't quite seem to work for this layout, since
      // all of the content is pushed up on mobile when the keyboard is visible, but not restored after.
      // Periodically running the setVh function at least acheives the correct behavior in all the
      // browsers I've tested in.
      // window.addEventListener("resize", setVh);

      setVh();
      setInterval(setVh, 100);
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  background-color: #1f1f1f;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.main-grid {
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: scroll;
}

.grid-sections {
  height: calc(100% - 96px);
  overflow-y: hidden;
  position: relative;
}
</style>
