<template>
  <div class="roll-view">
    <h1>QuickRoll</h1>
    <section class="roll-screen">
      <p>Roll Content</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "RollView",
  props: {
    editorActive: Boolean,
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

.roll-screen {
  margin-top: 2rem;
  margin-left: 0.5rem;
}

.roll-view::after {
    content: "";
    display: block;
    height: 92px;
}
</style>