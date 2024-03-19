<template>
    <input type="text" v-model="value" v-bind="$attrs" class="">
</template>


<script setup>
import { defineModel } from 'vue';
const value = defineModel()
</script>