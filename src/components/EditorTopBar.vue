<template>
  <div class="editor-bar">
    <button class="toggle" @click.prevent="$store.commit('toggleEditorView')">
      <ChevronRightCircle v-if="!$store.state.editorActive" :size="28" />
      <ChevronDownCircle v-else :size="28" />
      {{ toggleText }}
    </button>
    <button class="new-roll"><PlusCircle size="28" /> New Roll</button>
  </div>
</template>

<script>
import PlusCircle from "./icons/PlusCircle";
import ChevronRightCircle from "./icons/ChevronRightCircle";
import ChevronDownCircle from "./icons/ChevronDownCircle";

export default {
  name: "EditorTopBar",
  components: {
    PlusCircle,
    ChevronRightCircle,
    ChevronDownCircle,
  },
  computed: {
    toggleText() {
      return !this.$store.state.editorActive ? "Show Rolls" : "Hide Rolls";
    },
  },
};
</script>

<style scoped>
.editor-bar {
  height: 48px;

  display: flex;
  justify-content: space-between;
}

button {
  flex-basis: 50%;

  color: #2fbbce;
  font-size: 1.1rem;
  font-weight: 700;

  padding: 0.5rem 1.2rem;
  background: none;
  border: none;

  display: flex;
  align-items: center;
}

button:active {
  color: white;
}

button > :first-child {
  margin-right: 0.5rem;
}
</style>