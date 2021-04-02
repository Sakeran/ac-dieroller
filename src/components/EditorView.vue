<template>
  <div :class="[{ 'editor-active': $store.state.editorActive }, 'editor-view']">
    <EditorTopBar />

    <div :aria-hidden="!$store.state.editorActive" class="editor-content">
      <RollList />
      <RollEditor :aria-hidden="!$store.state.rollEditorActive" />
    </div>
  </div>
</template>

<script>
import EditorTopBar from "./EditorTopBar";
import RollList from "./RollList";
import RollEditor from "./RollEditor";

export default {
  name: "EditorView",
  emits: ["toggle-editor"],
  components: {
    EditorTopBar,
    RollList,
    RollEditor,
  },
};
</script>

<style scoped>
.editor-view {
  padding: 0 0.5rem;

  display: flex;
  flex-direction: column;

  background-color: #292929;
  border-top: 1px solid #454545;
  padding-top: 4px;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  transform: translateY(calc(100% - 56px));
  transition: transform 0.3s ease-out;
}

.editor-view.editor-active {
  transform: translateY(4rem);
}

.editor-content {
  flex-grow: 1;
  margin-top: 1rem;
  padding-bottom: 5rem;
  overflow-y: scroll;
  position: relative;
}

.editor-content::after {
  content: "";
  display: block;
  width: 100%;
  height: 70px;
}
</style>