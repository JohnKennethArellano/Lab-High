<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <div class="bg-red-100 flex flex-row px-2 py-1 text-lg border-l-2 border-red-400">
        <font-awesome-icon :icon="faExclamationCircle" class=" my-auto text-red-500 text-2xl mr-4" />
        <div class="flex flex-col ">
            <p class="font-bold text-red-500 italic mb-[-5px]">Error</p>
            <p class="text-[13px]">The credentials you provided are invalid.</p>
        </div>

    </div>
</template>

<style scoped>
/* Your scoped styles here */
</style>