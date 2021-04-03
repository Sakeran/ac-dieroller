<template>
  <div class="roll-view">
    <h1>QuickRoll</h1>
    <section :aria-hidden="$store.state.editorActive" class="roll-screen">
      <h2 id="roll-total">
        Total: <span class="total">{{ total }}</span>
      </h2>
      <div class="result-display">
        <ResultDisplay
          v-for="(result, i) in $store.state.rollResults"
          :result="result"
          :key="`${$store.state.rollResultId}-${i}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ResultDisplay from "./ResultDisplay";

export default {
  name: "RollView",
  components: {
    ResultDisplay,
  },
  computed: {
    total() {
      return this.$store.state.rollResults.reduce((prev, cur) => prev + cur, 0);
    },
  },
};
</script>

<style scoped>
.roll-view {
  position: relative;
  background-color: #1f1f1f;
  height: 100%;
  overflow-y: scroll;
}

h1 {
  font-size: 3rem;
  color: #2fbbce;
  font-weight: 700;
  padding-left: 0.5rem;
}

h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #eee;
}

.total {
  color: white;
  font-size: 1.2em;
}
.roll-screen {
  margin-top: 2rem;
  margin-left: 0.5rem;
}

.result-display {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 4rem));
  gap: 1.5rem;
}

.roll-view::after {
  content: "";
  display: block;
  height: 92px;
}
</style>