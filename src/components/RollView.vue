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
        editorActive: Boolean
    }
}
</script>

<style scoped>
.roll-view {
    background-color: #1F1F1F;
    height: 100%;
}

h1 {
    font-size: 3rem;
    color: #2FBBCE;
    font-weight: 700;
    padding-left: 0.5rem;
}

.roll-screen {
    margin-top: 2rem;
    margin-left: 0.5rem;
}
</style>