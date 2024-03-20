<template>
    <div class="absolute h-screen w-screen grid place-items-center z-50 bg-white ">
        <div class="custom-loader"></div>
    </div>
</template>


<script setup>

</script>
<style scoped>
.custom-loader {
    width: 45px;
    height: 40px;
    --c: linear-gradient(#9B0D32 0 0);
    background:
        var(--c) 0% 50%,
        var(--c) 50% 50%,
        var(--c) 100% 50%;
    background-size: 9px 100%;
    background-repeat: no-repeat;
    animation: b1 1s infinite linear;
}

@keyframes b1 {
    33% {
        background-size: 9px 10%, 9px 100%, 9px 100%
    }

    50% {
        background-size: 9px 100%, 9px 10%, 9px 100%
    }

    66% {
        background-size: 9px 100%, 9px 100%, 9px 10%
    }
}
</style>