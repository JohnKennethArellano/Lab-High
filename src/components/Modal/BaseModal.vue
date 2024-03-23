<template>
    <div
        class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10 fadeInOut backdrop-blur-sm">
        <div class="w-auto h-auto flex flex-col bg-white rounded-lg px-10 py-5">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    modalTitle: {
        type: String,
        default: 'Modal Title'
    },
})
</script>

<style scoped></style>