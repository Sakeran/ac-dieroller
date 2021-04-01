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
    class="icon-circle-chevron-down"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 10.5l4 4 4-4" />
  </svg>
</template>

<script>
export default {
  name: "ChevronDownCircle",
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