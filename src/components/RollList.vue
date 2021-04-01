<template>
  <div class="roll-list">
    <ul>
      <li v-for="roll in dice" :key="roll.id"><RollEntry :roll="roll"/></li>
    </ul>
  </div>
</template>

<script>
import RollEntry from "./RollEntry";

export default {
  name: "RollList",
  components: {
    RollEntry,
  },
  props: {
    dice: Array,
  },
};
</script>