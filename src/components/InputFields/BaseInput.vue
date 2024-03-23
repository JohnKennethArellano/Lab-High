<template>
    <input
      v-model="value"
      class="w-auto h-auto text-base p-1"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </template>
  
  <script setup>
  import { defineModel } from "vue";
  
  defineProps({
    modelValue: {
      type: String,
      default: "",
    },
  });
  
  const value = defineModel();
  </script>
  
  <style scoped>
  </style>