<template>
  <div :class="[{ 'edit-roll': $store.state.rollEditorActive }, 'roll-editor']">
    <div class="header">
      <h2>Edit Roll</h2>
      <button class="back" @click="$store.commit('openEditorView')">
        &lt; Return to List
      </button>
    </div>

    <div class="form">
      <div class="form-element">
        <label for="name">Name</label>
        <input
          type="text"
          id="roll-name"
          :value="rollName"
          @input="
            (e) =>
              $store.commit('updateRoll', {
                ...roll,
                name: e.target.value,
              })
          "
        />
      </div>

      <div class="form-element">
        <label for="roll-type">Type</label>
        <select
          id="roll-type"
          :value="rollType"
          @input="
            (e) =>
              $store.commit('updateRoll', { ...roll, type: e.target.value })
          "
        >
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
        <input
          id="roll-count"
          min="1"
          size="2"
          type="number"
          :value="rollCount"
          @input="
            (e) =>
              $store.commit('updateRoll', {
                ...roll,
                count: e.target.value,
              })
          "
        />
      </div>

      <div class="form-element">
        <label for="roll-color">Color</label>
        <div
          class="roll-color-swatch"
          :style="{ 'background-color': rollColor }"
        ></div>
      </div>
      <button class="delete" @click="$store.commit('deleteRoll', roll.id)">
        <CircleCross size="30" />Delete Roll
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CircleCross from "./icons/CircleCross";

export default {
  name: "RollEditor",
  components: {
    CircleCross,
  },
  computed: {
    ...mapState({
      roll: (state) => state.editedRoll,
      rollName: (state) => state.editedRoll && (state.editedRoll.name || ""),
      rollType: (state) => state.editedRoll && (state.editedRoll.type || "20"),
      rollCount: (state) => state.editedRoll && (state.editedRoll.count || "1"),
      rollColor: (state) =>
        state.editedRoll && (state.editedRoll.color || "#fff"),
    }),
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