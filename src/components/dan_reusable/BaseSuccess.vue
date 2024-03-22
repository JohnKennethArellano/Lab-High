<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { defineProps } from "vue";
  
defineProps({
    // id: {
    //   type: String,
    //   default: "label",
    // },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
  });
  
</script>

<template>
    <div class="bg-green-100 flex flex-row px-2 py-1 text-lg border-l-2 border-green-300">
        <font-awesome-icon :icon="faExclamationCircle" class=" my-auto text-green-400 text-2xl mr-4" />
        <div class="flex flex-col ">
            <p class="font-bold text-green-400 italic mb-[-5px]">Success</p>
            <p class="text-[13px]">{{label}}</p>
        </div>

    </div>
</template>

<style scoped>
/* Your scoped styles here */
</style>