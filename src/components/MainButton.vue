<template>
  <button @click.prevent="$emit('click', $event)">{{ text }}</button>
</template>

<script>
export default {
  name: "MainButton",
  emits: ["click"],
  props: {
    text: String,
  },
};
</script>

<style scoped>
button {
  display: block;
  width: calc(100% - 1rem);
  margin: 4px auto 0 auto;
  height: 88px;

  background-color: #296b74;
  border: none;
  border-radius: 8px;

  font-size: 3.5rem;
  font-weight: 700;
  color: white;
}

button:hover,
button:focus {
  background-color: #184e55;
}

button:active {
  color: #82f0ff;
  background-color: #184e55;
}
</style>