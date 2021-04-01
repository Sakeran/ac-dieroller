<template>
  <div class="main-grid">
    <div class="grid-sections">
      <RollView :editorActive="editorActive" />
      <EditorView :editorActive="editorActive" />
    </div>
    <div class="main-button"></div>
    <MainButton @click="onClick" text="Roll" />
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
    };
  },
  methods: {
    onClick() {
      // Temp. button behavior.
      this.toggleEditor();
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

      window.addEventListener("resize", setVh);
      setVh();
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
  background-color: #1f1f1f;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.main-grid {
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  overflow-y: hidden;
}

.grid-sections {
  height: calc(100% - 96px);
  overflow-y: hidden;
  position: relative;
}

.main-button {
  border-top: 1px solid #003E47;
}
</style>
