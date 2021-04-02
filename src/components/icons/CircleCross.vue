,<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="computedSize"
    :height="computedSize"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-circle-cross"
  >
    <path d="M15 15L9 9m6 0l-6 6" />
    <circle cx="12" cy="12" r="10" />
  </svg>
</template>

<script>
export default {
  name: "CircleCross",
  props: {
    size: { type: Number, required: false },
  },
  computed: {
    computedSize() {
      return this.size || 24;
    },
  },
};
</script>