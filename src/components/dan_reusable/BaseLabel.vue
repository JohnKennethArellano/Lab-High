<script setup>
defineProps({
    id: {
      type: String,
      default: "label",
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "Label",
    },
  });
  
</script>

<template>
  <label>{{ label }}</label>
</template>

<style scoped>
  
</style>