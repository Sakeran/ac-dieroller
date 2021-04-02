<template>
  <button @click="click" :class="{ inactive: !isActive }">
    <p class="label">Roll:</p>
    <p class="active-roll">{{ activeRoll }}</p>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  computed: {
    isActive() {
      const roll = this.$store.state.activeRoll;
      if (!roll) return false;

      return true;
    },
    activeRoll() {
      if (!this.isActive) return "--";
      const roll = this.$store.state.activeRoll;

      return `${roll.name} (${roll.count}d${roll.type})`;
    },
  },
  methods: {
    click() {
      if (!this.isActive) return;

      // STUB
      console.log("Click Main");
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: calc(100% - 1rem);
  margin: 4px auto 0 auto;
  padding: 0 0.5rem;
  height: 88px;

  background-color: #296b74;
  border: none;
  border-radius: 8px;

  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  overflow-y: hidden;
}

.inactive {
  color: #666;
}

.label {
  font-size: 2rem;
}

.active-roll {
  font-size: 1rem;
}

button:not(.inactive):hover,
button:not(.inactive):focus {
  background-color: #184e55;
}

button:not(.inactive):active {
  color: #82f0ff;
  background-color: #184e55;
}
</style>