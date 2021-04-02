<template>
  <div class="roll-list">
    <ul>
      <li v-for="roll in $store.state.dice" :key="roll.id">
        <RollEntry :roll="roll" />
      </li>
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
};
</script>