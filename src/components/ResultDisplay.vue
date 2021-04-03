<template>
  <div :style="styles">
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultDisplay",
  data() {
    return {
      styles: {
        "--die-shade": `rgba(255,255,255,${
          1 - Math.floor(Math.random() * 3) / 10
        })`,
        "--delay-die": `${0.1 + (Math.random() / 10 - 1 / 10)}s`,
        "--rotate-die": `${Math.floor(Math.random() * 61) - 30}deg`,
        "--translate-die-x": `${Math.floor(Math.random() * 11) - 5}px`,
        "--translate-die-y": `${Math.floor(Math.random() * 11) - 5}px`,
      },
    };
  },
  props: {
    result: Number,
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 3rem;
  color: var(--die-shade, white);
  transform-origin: center;
  animation-name: roll;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: var(--delay-die, 0s);
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes roll {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(1.5) translateX(0) translateY(0);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: rotate(var(--rotate-die, 0deg))
      translateX(var(--translate-die-x, 0px))
      translateY(var(--translate-die-y, 0px));
  }
}
</style>

