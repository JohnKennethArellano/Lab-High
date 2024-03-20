<template>
    <button :class="[buttonClass, width]">
        {{ text }}
    </button>
</template>


<script setup>
defineProps({
    text: {
        type: String,
        default: "Button text"
    },
    buttonClass: {
        type: String,
        default: " mainButton"
    },
    width: {
        type: String,
        default: "w-36"
    }
})
</script>
