<template>
  <div class="roll-entry">
    <p class="die-name">{{ roll.name }}</p>
    <div class="die-icons" :style="{ color: roll.color }">
      <!-- STUB -->
      <PlusCircle :key="i" v-for="i in roll.count" size="12" />
    </div>
    <p class="die-type">{{ roll.count }}d{{ roll.type }}</p>
    <button aria-label="Edit Roll"><PlusCircle size="32" /></button>
  </div>
</template>

<script>
import PlusCircle from "./icons/PlusCircle";

export default {
  name: "RollEntry",
  components: {
    PlusCircle,
  },
  props: {
    roll: Object,
  },
};
</script>

<style scoped>
.roll-entry {
  margin-bottom: 1rem;

  display: grid;
  grid-template-areas:
    "name display edit"
    "type . edit";
  grid-template-columns: 3fr 2fr 32px;
  row-gap: 0.25rem;
}

.die-name {
  grid-area: name;

  font-size: 1.25rem;
  font-weight: 700;
}

.die-icons {
  grid-area: display;

  display: flex;
  align-items: center;
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
</style>