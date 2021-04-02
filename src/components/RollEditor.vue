<template>
  <div :class="[{ 'edit-roll': $store.state.rollEditorActive }, 'roll-editor']">
    <div class="header">
      <h2>Edit Roll</h2>
      <button class="back" @click="$store.commit('openEditorView')">&lt; Return to List</button>
    </div>

    <div class="form">
      <div class="form-element">
        <label for="name">Name</label>
        <input type="text" id="roll-name" />
      </div>

      <div class="form-element">
        <label for="roll-type">Type</label>
        <select id="roll-type">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
        </select>
      </div>

      <div class="form-element">
        <label for="roll-count">Count</label>
        <input id="roll-count" type="number" />
      </div>

      <div class="form-element">
        <label for="roll-color">Color</label>
        <div class="roll-color-swatch"></div>
      </div>
      <div class="dice-display">DISPLAY</div>
      <button class="delete"><CircleCross size="30" />Delete Roll</button>
    </div>
  </div>
</template>

<script>
import CircleCross from "./icons/CircleCross";

export default {
  name: "RollEditor",
  components: {
    CircleCross,
  },
};
</script>

<style scoped>
.roll-editor {
  background-color: #292929;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100%;

  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
}

.roll-editor.edit-roll {
  transform: translateX(0);
}

.header {
  display: flex;
  /* align-items: center; */
  margin-bottom: 1.25rem;
}

h2 {
  font-size: 2rem;
}

.back {
  color: #2fbbce;
  font-size: 1.15rem;

  margin-left: 1rem;
  background: none;
  border: none;
}

.back:active {
  color: white;
}

.back > :first-child {
  margin-right: 0.5rem;
}

.form {
  font-size: 1.25rem;
}

.form-element {
  display: flex;
  align-items: end;
  margin-bottom: 1rem;
}

label {
  font-weight: 700;
  display: inline-block;
  min-width: 6ch;
}

input,
select {
  min-height: 32px;
  font-size: 1.25rem;
}

.roll-color-swatch {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: red;
}

.delete {
  display: block;
  margin-left: auto;

  color: #f14040;
  font-size: 1.5rem;
  font-weight: 700;

  padding: 0.5rem 1.2rem;
  background: none;
  border: none;

  display: flex;
  align-items: center;
}

.delete > :first-child {
  margin-right: 0.25rem;
}
</style>