<template>
  <div class="main-grid">
    <div class="grid-sections">
      <RollView />
      <EditorView />
    </div>
    <div class="main-button"></div>
    <MainButton />
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
  mounted() {
    this.$store.dispatch("loadRolls");
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

  display: grid;
  grid-template-rows: 4rem 1fr;
}
</style>
