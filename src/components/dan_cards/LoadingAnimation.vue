<template>
    <div class="custom-loader"></div>
</template>

<style scoped>
.custom-loader {
    width: 25px;
    aspect-ratio: 1;
    --_c: no-repeat radial-gradient(farthest-side, #FFF 92%, #0000);
    background:
        var(--_c) top,
        var(--_c) left,
        var(--_c) right,
        var(--_c) bottom;
    background-size: 8px 8px;
    animation: l7 1s infinite;
}

@keyframes l7 {
    to {
        transform: rotate(.5turn)
    }
}
</style>