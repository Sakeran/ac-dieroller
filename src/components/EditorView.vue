<template>
  <div :class="[{ 'editor-active': editorActive }, 'editor-view']">
    <EditorTopBar />

    <div class="editor-content">
      <p>Editor Stuff</p>
    </div>
  </div>
</template>

<script>
import EditorTopBar from "./EditorTopBar";

export default {
  name: "EditorView",
  components: {
    EditorTopBar,
  },
  props: {
    editorActive: Boolean,
  },
};
</script>

<style scoped>
.editor-view {
  padding: 0 0.5rem;

  background-color: #292929;
  border-top: 1px solid #454545;
  padding-top: 4px;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 4rem;
  left: 0;

  transition: top 0.3s ease-out;
}

.editor-view.editor-active {
  top: calc(100% - 48px);
}

.editor-content {
  margin-top: 2rem;
}
</style>