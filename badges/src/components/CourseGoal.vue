<template>
  <h1>Goals</h1>
  <ul v-for="goal in goals" :key="goal">
    <slot :item="goal" anotherItem="..."></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Basic", "Intermedia", "Advance"],
    };
  },
};
</script>