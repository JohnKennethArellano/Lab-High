<script setup>
import { useStore } from 'vuex';
const store = useStore()
console.log(store.state.userData)
</script>

<template>
  <div class="tabTitle">dashboard</div>
</template>
