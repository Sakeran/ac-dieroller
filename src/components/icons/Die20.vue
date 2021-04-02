<template>
  <svg
    :width="computedSize"
    :height="computedSize"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.73724 38.1806L50 7.4749L92.2628 38.1806L76.1198 87.8634H23.8802L7.73724 38.1806Z"
      stroke="currentColor"
      :stroke-width="computedStrokeWidth"
    />
  </svg>
</template>

<script>
export default {
  name: "Die20",
  props: {
    size: { type: String, required: false },
    strokeWidth: { type: String, required: false },
  },
  computed: {
    computedSize() {
      return this.size || 24;
    },
    computedStrokeWidth() {
      return this.strokeWidth || "2";
    },
  },
};
</script>