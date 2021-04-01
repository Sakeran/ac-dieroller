<template>
  <div :class="[{ 'editor-active': editorActive }, 'editor-view']">
    <EditorTopBar
      @toggle-editor="$emit('toggle-editor')"
      :editorActive="editorActive"
    />

    <div class="editor-content">
      <RollList :dice="dice" />
    </div>
  </div>
</template>

<script>
import EditorTopBar from "./EditorTopBar";
import RollList from "./RollList";

export default {
  name: "EditorView",
  emits: ["toggle-editor"],
  components: {
    EditorTopBar,
    RollList,
  },
  props: {
    editorActive: Boolean,
    dice: Array,
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
  top: calc(100% - 56px);
  left: 0;

  transition: top 0.3s ease-out;
}

.editor-view.editor-active {
  top: 4rem;
}

.editor-content {
  margin-top: 1rem;
}
</style>