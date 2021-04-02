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
    class="icon-pencil"
  >
    <path
      d="M4.333 16.048L16.57 3.81a2.56 2.56 0 013.62 3.619L7.951 19.667a2 2 0 01-1.022.547L3 21l.786-3.93a2 2 0 01.547-1.022z"
    />
    <path d="M4.5 16.5l3 3" />
    <path d="M14.5 6.5l3 3" />
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