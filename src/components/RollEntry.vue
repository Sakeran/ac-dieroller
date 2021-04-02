<template>
  <div class="roll-entry">
    <p class="die-name">{{ roll.name }}</p>
    <div class="die-icons">
      <!-- STUB -->
      <Pencil :key="i" v-for="i in roll.count" size="12" />
    </div>
    <p class="die-type">{{ roll.count }}d{{ roll.type }}</p>
    <button aria-label="Edit Roll" @click="$store.commit('editRoll', roll.id)">
      <Pencil size="32" />
    </button>
  </div>
</template>

<script>
import Pencil from "./icons/Pencil";

export default {
  name: "RollEntry",
  components: {
    Pencil,
  },
  props: {
    roll: Object,
  },
};
</script>

<style scoped>
.roll-entry {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #454545;

  display: grid;
  grid-template-areas:
    "name display edit"
    "type display edit";
  grid-template-columns: 4fr 2fr 48px;
  row-gap: 0.25rem;
}

.die-name {
  grid-area: name;

  font-size: 1.25rem;
  font-weight: 700;
}

.die-icons {
  grid-area: display;
  padding-right: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.die-type {
  grid-area: type;
}

button {
  grid-area: edit;

  background: none;
  border: none;
  color: currentColor;
}

button:hover,
button:focus {
  color: #aaa;
}

button:active {
  color: #2fbbce;
}
</style>