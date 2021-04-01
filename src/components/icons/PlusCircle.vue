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
    class="icon-circle-plus"
  >
    <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
    <circle cx="12" cy="12" r="10" />
  </svg>
</template>

<script>
export default {
  name: "PlusCircle",
  props: {
    size: { type: String, required: false },
  },
  computed: {
    computedSize() {
      return this.size || 24;
    },
  },
};
</script>