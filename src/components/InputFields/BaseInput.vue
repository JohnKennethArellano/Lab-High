<template>
    <input
      :type="type"
      :id="id"
      v-model="value"
      :placeholder="placeholderText"
      class="w-auto h-auto text-base p-1"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </template>
  
  <script setup>
  import { defineProps, defineModel } from "vue";
  
  defineProps({
    id: {
      type: String,
      default: "inputField",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholderText: {
      type: String,
      default: "inputField",
    },
    modelValue: {
      type: String,
      default: "",
    },
  });
  
  const value = defineModel();
  </script>
  
  <style scoped>
  </style>